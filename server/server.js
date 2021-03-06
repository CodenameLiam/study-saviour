import express from "express";
import redis from "redis";
import admin from "firebase-admin";
import service from "./firebase-admin-token.js";
import responseTime from "response-time";
import path from "path";
import url from "url";
import cors from "cors";
import _ from "lodash";

// Express application
const app = express();

// Redis client
const redisClient = redis.createClient();

// Firebase application
admin.initializeApp({
	credential: admin.credential.cert(service),
	databaseURL: "https://study-saviour.firebaseio.com",
});

// Firestore noSQL database
const db = admin.firestore();
const userRef = db.collection("users");
const likesRef = db.collection("likes");
const notesRef = db.collection("notes");
const hashtagsRef = db.collection("hashtags");
const coursesRef = db.collection("courses");

// Define port
const port = 3000;

// Define build path
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

// Serve static assets built from the clientside
app.use(express.static(path.join(__dirname, "../client/build")));

// Parse JSON request body
app.use(express.json());

// Measure response time for requests
app.use(responseTime());

// Cross-optional resource sharing for development
app.use(cors({ origin: "http://localhost:3000" }));

// ======================================================================================
// Notes
// ======================================================================================

// Gets a particular users uploaded notes
app.post("/api/notes/user", async (req, res) => {
	try {
		const { user } = req.body;

		const redisUserLikesKey = `/api/likes/${user}`;
		const redisUserNotesKey = `/api/notes/user/${user}`;

		// If a users likes are cached...
		redisClient.get(redisUserLikesKey, async (err, userResult) => {
			if (userResult) {
				const userLikes = JSON.parse(userResult);

				// Check if notes for the course are cached, otherwise get the notes
				redisClient.get(redisUserNotesKey, async (err, courseResult) => {
					if (courseResult) {
						const notes = JSON.parse(courseResult);
						const sortedNotes = appendLikes(notes, userLikes);
						console.log("Redis notes, Redis likes");
						res.status(200).json(sortedNotes);
					} else {
						const notes = await getCloudUsereNotes(user);
						const sortedNotes = appendLikes(notes, userLikes);
						redisClient.setex(redisUserNotesKey, 1800, JSON.stringify(notes));
						redisClient.setex(redisUserLikesKey, 3600, JSON.stringify(userLikes));
						console.log("Firestore notes, Redis likes");
						res.status(200).json(sortedNotes);
					}
				});
				// Get all data from the cloud
			} else {
				let userSnapshot = await userRef.doc(user).get();
				if (!userSnapshot.exists) {
					await userRef.doc(user).set({ likes: [], notes: [], courses: [] });
					userSnapshot = await userRef.doc(user).get();
				}
				const userLikes = userSnapshot.data().likes;
				const notes = await getCloudUsereNotes(user);
				const sortedNotes = appendLikes(notes, userLikes);
				redisClient.setex(redisUserNotesKey, 1800, JSON.stringify(notes));
				redisClient.setex(redisUserLikesKey, 3600, JSON.stringify(userLikes));
				console.log("Firestore notes, Firestore likes");
				res.status(200).json(sortedNotes);
			}
		});
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}
});

// Gets a particular users liked notes
app.post("/api/notes/user/liked", async (req, res) => {
	try {
		const { user } = req.body;
		const redisUserLikedNotesKey = `/api/notes/liked/${user}`;

		// If a users likes are cached...
		redisClient.get(redisUserLikedNotesKey, async (err, result) => {
			if (result) {
				const sortedNotes = JSON.parse(result);
				console.log("Liked notes from Redis");
				res.status(200).json(sortedNotes);
			} else {
				const sortedNotes = await getCloudUserNoteLikes(user);
				redisClient.setex(redisUserLikedNotesKey, 3600, JSON.stringify(sortedNotes));
				console.log("Liked notes from Firestore");
				res.status(200).json(sortedNotes);
			}
		});
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}
});

// Gets the top notes for a particular couse
app.post("/api/notes/course/:course", async (req, res) => {
	try {
		const { course } = req.params;
		const { user } = req.body;

		const redisCoursekey = `/api/notes/${course}`;
		const redisUserLikesKey = `/api/likes/${user}`;

		// If a users likes are cached...
		redisClient.get(redisUserLikesKey, async (err, userResult) => {
			if (userResult) {
				const userLikes = JSON.parse(userResult);

				// Check if notes for the course are cached, otherwise get the notes
				redisClient.get(redisCoursekey, async (err, courseResult) => {
					if (courseResult) {
						const notes = JSON.parse(courseResult);
						const sortedNotes = appendLikes(notes, userLikes);
						console.log("Redis notes, Redis likes");
						res.status(200).json(sortedNotes);
					} else {
						const notes = await getCloudCourseNotes(course);
						const sortedNotes = appendLikes(notes, userLikes);
						redisClient.setex(redisCoursekey, 1800, JSON.stringify(notes));
						redisClient.setex(redisUserLikesKey, 3600, JSON.stringify(userLikes));
						console.log("Firestore notes, Redis likes");
						res.status(200).json(sortedNotes);
					}
				});
				// Get all data from the cloud
			} else {
				let userSnapshot = await userRef.doc(user).get();
				if (!userSnapshot.exists) {
					await userRef.doc(user).set({ likes: [], notes: [], courses: [] });
					userSnapshot = await userRef.doc(user).get();
				}
				const userLikes = userSnapshot.data().likes;
				const notes = await getCloudCourseNotes(course);
				const sortedNotes = appendLikes(notes, userLikes);
				redisClient.setex(redisCoursekey, 1800, JSON.stringify(notes));
				redisClient.setex(redisUserLikesKey, 3600, JSON.stringify(userLikes));
				console.log("Firestore notes, Firestore likes");
				res.status(200).json(sortedNotes);
			}
		});
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}
});

// Gets all of the notes in storage
app.get("/api/notes", async (req, res) => {
	try {
		const notes = [];
		const noteSnapshot = await notesRef.get();
		const noteDocs = noteSnapshot.docs.map((doc) => doc.data());

		for (let note of noteDocs) {
			const likeSnapshot = await likesRef.where("note", "==", note.id).get();
			const likeDocs = likeSnapshot.docs.map((doc) => doc.data());
			note.likes = likeDocs;
			notes.push(note);
		}
		res.status(200).json(notes);
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}
});

// Adds a note to storage
app.post("/api/note", async (req, res) => {
	try {
		const { name, author, courseCode, description, hashtags, faculty, semester } = req.body;
		const uploadDate = admin.firestore.Timestamp.fromDate(new Date());

		// Remove keys from storage
		redisDeleteMyNotes(author);
		redisDeleteUserLikes(author);
		redisDeleteCourse(courseCode);
		redisDeleteUserNoteLikes(author);

		const note = await notesRef.add({
			name: name,
			author: author,
			description: description,
			courseCode: courseCode,
			hashtags: hashtags,
			faculty: faculty,
			semester: semester,
			likes: [],
			totalLikes: 1,
			downloads: [],
			uploadDate: uploadDate,
		});

		await notesRef.doc(note.id).update({ id: note.id });

		await userRef.doc(author).set(
			{
				// Add note to list of uploaded notes
				notes: admin.firestore.FieldValue.arrayUnion(note.id),
				// Add note to list of liked notes
				likes: admin.firestore.FieldValue.arrayUnion(note.id),
			},
			{ merge: true }
		);

		// Add reference to the like object from note object
		const like = await likesRef.add({ date: uploadDate, note: note.id, user: author });
		await notesRef.doc(note.id).set(
			{
				likes: admin.firestore.FieldValue.arrayUnion(like),
			},
			{ merge: true }
		);

		res.status(200).json({ id: note.id, message: "Succesfully uploaded note!" });
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}
});

app.post("/api/notes/like-note", async (req, res) => {
	try {
		const { user, note } = req.body;

		redisDeleteUserLikes(user);
		redisDeleteMyNotes(user);
		redisDeleteUserNoteLikes(user);
		redisDeleteDashboard(user);

		// Add like
		const likeDate = admin.firestore.Timestamp.fromDate(new Date());
		const like = await likesRef.add({ user: user, date: likeDate, note: note });

		// Update reference in user table
		await userRef
			.doc(user)
			.set({ likes: admin.firestore.FieldValue.arrayUnion(note) }, { merge: true });
		// Update reference in note table
		await notesRef.doc(note).set(
			{
				likes: admin.firestore.FieldValue.arrayUnion(like),
				totalLikes: admin.firestore.FieldValue.increment(1),
			},
			{ merge: true }
		);
		res.status(200).send("Liked note!");
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}
});

app.post("/api/notes/unlike-note", async (req, res) => {
	try {
		const { user, note } = req.body;
		redisDeleteUserLikes(user);
		redisDeleteMyNotes(user);
		redisDeleteUserNoteLikes(user);
		redisDeleteDashboard(user);

		// Remove like document and note reference
		const likes = await likesRef.where("note", "==", note).where("user", "==", user).get();
		for (const like of likes.docs) {
			await notesRef.doc(note).update({
				likes: admin.firestore.FieldValue.arrayRemove(like.ref),
				totalLikes: admin.firestore.FieldValue.increment(-1),
			});
			await like.ref.delete();
		}
		// Remove user liked note reference
		await userRef.doc(user).update({
			likes: admin.firestore.FieldValue.arrayRemove(note),
		});
		res.status(200).send("Unliked note!");
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}
});

app.post("/api/notes/download-note", async (req, res) => {
	try {
		const { note } = req.body;

		// Download note
		const downloadDate = admin.firestore.Timestamp.fromDate(new Date());
		await notesRef
			.doc(note)
			.update({ downloads: admin.firestore.FieldValue.arrayUnion(downloadDate) });

		res.status(200).send("Note downloaded!");
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}
});

// ======================================================================================
// Note helper functions
// ======================================================================================

// Sorts notes by highest liked
function sortNotes(notes, userLikes) {
	let sortedNotes = _.orderBy(
		notes,
		(note) => {
			return note.likes.length;
		},
		["desc"]
	).splice(-Math.abs(20));

	sortedNotes.forEach((note) => {
		if (userLikes.includes(note.id)) {
			note.liked = true;
		} else {
			note.liked = false;
		}
	});
	return sortedNotes;
}

function appendLikes(sortedNotes, userLikes) {
	sortedNotes.forEach((note) => {
		if (userLikes.includes(note.id)) {
			note.liked = true;
		} else {
			note.liked = false;
		}
	});
	return sortedNotes;
}

// Gets notes from Firestore
async function getCloudUsereNotes(user) {
	try {
		let notes = [];
		const noteSnapshot = await notesRef
			.where("author", "==", user)
			.orderBy("totalLikes", "desc")
			.get();
		if (!noteSnapshot) {
			res.status(400).send("This user has no notes");
		}
		const noteDocs = noteSnapshot.docs.map((doc) => doc.data());

		for (let note of noteDocs) {
			const likeSnapshot = await likesRef.where("note", "==", note.id).get();
			const likeDocs = likeSnapshot.docs.map((doc) => doc.data());
			note.likes = likeDocs;
			notes.push(note);
		}

		return notes;
	} catch (error) {
		console.log(error);
	}
}

// Gets notes from Firestore
async function getCloudUserNoteLikes(user) {
	try {
		let notes = [];

		const userSnapshot = await userRef.doc(user).get();

		const userLikes = userSnapshot.data().likes;

		for (let note of userLikes) {
			const noteSnapshot = await notesRef.doc(note).get();
			const noteDoc = noteSnapshot.data();
			const likeSnapshot = await likesRef.where("note", "==", noteDoc.id).get();
			const likeDocs = likeSnapshot.docs.map((doc) => doc.data());
			noteDoc.likes = likeDocs;
			notes.push(noteDoc);
		}

		const sortedNotes = sortNotes(notes, userLikes);
		return sortedNotes;
	} catch (error) {
		console.log(error);
	}
}

// Gets notes from Firestore
async function getCloudCourseNotes(course) {
	try {
		let notes = [];

		const courseSnapshot = await notesRef
			.where("courseCode", "==", course)
			.orderBy("totalLikes", "desc")
			.get();
		if (!courseSnapshot) {
			res.status(400).send("No notes exist in the current course");
		}
		const noteDocs = courseSnapshot.docs.map((doc) => doc.data());
		for (let note of noteDocs) {
			const likeSnapshot = await likesRef.where("note", "==", note.id).get();
			const likeDocs = likeSnapshot.docs.map((doc) => doc.data());
			note.likes = likeDocs;
			notes.push(note);
		}

		return notes;
	} catch (error) {
		console.log(error);
	}
}

// ======================================================================================
// Dashboard
// ======================================================================================
app.post("/api/dashboard", async (req, res) => {
	try {
		const { user } = req.body;
		const redisDashboard = `/api/dashboard/${user}`;

		// // If a users dashboard is cached...
		redisClient.get(redisDashboard, async (err, result) => {
			if (result) {
				const dashboard = JSON.parse(result);
				console.log("Dashboard from Redis");
				res.status(200).json(dashboard);
			} else {
				let downloadsArray = [];
				let likesArray = [];

				const snapshot = await notesRef.where("author", "==", user).get();

				for (let doc of snapshot.docs) {
					for (let like of doc.data().likes) {
						const likeDoc = await likesRef.doc(like.id).get();
						const date = likeDoc.data().date.toDate();
						likesArray.push(date);
					}
					const downloads = doc.data().downloads.map((download) => download.toDate());
					downloadsArray = downloadsArray.concat(downloads);
				}

				downloadsArray = _.orderBy(downloadsArray, [], ["desc"]);
				likesArray = _.orderBy(likesArray, [], ["desc"]);

				const response = {
					downloads: downloadsArray,
					totalDownloads: downloadsArray.length,
					likes: likesArray,
					totalLikes: likesArray.length,
				};

				redisClient.setex(redisDashboard, 900, JSON.stringify(response));
				console.log("Dashboard from Firetore");
				res.status(200).json(response);
			}
		});
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}
});

// ======================================================================================
// User
// ======================================================================================

// Gets information pertaining to a particular user
app.post("/api/user", async (req, res) => {
	try {
		const { user } = req.body;
		const redisKey = `/api/user/courses/${user}`;

		redisClient.get(redisKey, async (err, result) => {
			if (result) {
				const user = JSON.parse(result);
				console.log("User from Redis");
				res.status(200).json(user);
			} else {
				const doc = await userRef.doc(user).get(); // Get document
				redisClient.setex(redisKey, 3600, JSON.stringify(doc.data()));
				console.log("User from Firestore");
				res.status(200).json(doc.data());
			}
		});
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}
});

// Creates a new user
app.post("/api/user/create", async (req, res) => {
	try {
		const { user } = req.body;
		await userRef.doc(user).set({ courses: [], likes: [], notes: [] });
		res.status(200).send(`${user} created!`);
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}
});

// ======================================================================================
// Hashtags
// ======================================================================================
app.get("/api/hashtags", async (req, res) => {
	try {
		const snapshot = await hashtagsRef.get();
		const hashtags = snapshot.docs.map((doc) => doc.data().name);
		res.status(200).json(hashtags);
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}
});

app.post("/api/hashtags", async (req, res) => {
	try {
		// Get the list of hashtags the user wants to add to a note
		const postHashtags = req.body.hashtags;
		if (postHashtags == undefined) {
			throw new Error("Undefined hashtag list");
		}

		// Get the list of already existing hashtags
		const getSnapshot = await hashtagsRef.get();
		const getHashtags = getSnapshot.docs.map((doc) => doc.data().name);

		// If any post hashtag does not appear in the get hashtag list,
		// add the value to the database
		const hashtags = postHashtags.filter((hashtag) => !getHashtags.includes(hashtag));

		hashtags.forEach((hashtag) => {
			hashtagsRef.doc(hashtag).set({ name: hashtag });
		});

		res.status(200).send("Added hashtags to store");
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}
});

// ======================================================================================
// Courses
// ======================================================================================
app.get("/api/courses", async (req, res) => {
	try {
		const redisKey = req.url;

		redisClient.get(redisKey, async (err, result) => {
			if (result) {
				const courses = JSON.parse(result);
				console.log("Courses from Redis");
				res.status(200).json(courses);
			} else {
				const snapshot = await coursesRef.get();
				const courses = snapshot.docs.map((doc) => doc.data().name);
				redisClient.setex(redisKey, 3600, JSON.stringify(courses));
				console.log("Courses from Firestore");
				res.status(200).json(courses);
			}
		});
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}
});

app.post("/api/courses/enrol", async (req, res) => {
	try {
		const { user, course } = req.body;
		redisDeleteEnrolled(user);
		await userRef.doc(user).update({ courses: admin.firestore.FieldValue.arrayUnion(course) });

		res.status(200).send(`Enrolled in ${course}`);
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}
});

app.post("/api/courses/finish", async (req, res) => {
	try {
		const { user, course } = req.body;
		redisDeleteEnrolled(user);
		await userRef.doc(user).update({ courses: admin.firestore.FieldValue.arrayRemove(course) });
		res.status(200).send(`Finished ${course}`);
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}
});

// ======================================================================================
// Redis delete keys
// ======================================================================================

function redisDeleteUserLikes(user) {
	const redisUserLikesKey = `/api/likes/${user}`;
	redisClient.del(redisUserLikesKey, async (error, result) => {
		if (result) {
			console.log(`Deleted key: ${redisUserLikesKey}`);
		}
	});
}

function redisDeleteMyNotes(user) {
	const redisKey = `/api/notes/user/${user}`;
	redisClient.del(redisKey, async (error, result) => {
		if (result) {
			console.log(`Deleted key: ${redisKey}`);
		}
	});
}

function redisDeleteCourse(course) {
	const redisCoursekey = `/api/notes/${course}`;
	redisClient.del(redisCoursekey, async (error, result) => {
		if (result) {
			console.log(`Deleted key: ${redisCoursekey}`);
		}
	});
}

function redisDeleteEnrolled(user) {
	const redisKey = `/api/user/courses/${user}`;
	redisClient.del(redisKey, async (error, result) => {
		if (result) {
			console.log(`Deleted key: ${redisKey}`);
		}
	});
}

function redisDeleteUserNoteLikes(user) {
	const redisKey = `/api/notes/liked/${user}`;
	redisClient.del(redisKey, async (error, result) => {
		if (result) {
			console.log(`Deleted key: ${redisKey}`);
		}
	});
}

function redisDeleteDashboard(user) {
	const redisKey = `/api/dashboard/${user}`;
	redisClient.del(redisKey, async (error, result) => {
		if (result) {
			console.log(`Deleted key: ${redisKey}`);
		}
	});
}

// ======================================================================================
// Send file test so I don't get charged by Google
// ======================================================================================
app.get("/api/test/download", async (req, res) => {
	try {
		res.sendFile(path.join(__dirname, "../client/build", "N9959807 Report.pdf"));
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}
});

// All other routes will be served clientside content
app.use((req, res) => {
	res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

app.listen(port, () => console.log(`Server started on port ${port}`));

// export default class server {}
