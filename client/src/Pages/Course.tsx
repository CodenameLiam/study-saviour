import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import Page from "../Components/Navigation/Page";
import firebase from "firebase";
import NoteTable from "../Components/Table/NoteTable";
import Axios from "axios";
import { toast } from "react-toastify";
import { Button, IconButton } from "@material-ui/core";
import { mdiChevronLeft, mdiNotebookCheck, mdiSchool } from "@mdi/js";
import Icon from "@mdi/react";
import { AppContext } from "../Context/AppContext";

interface ICourseParams {
	name: string;
}

export default function Course() {
	const user = firebase.auth().currentUser;
	const { appState, setAppState } = useContext(AppContext);
	const history = useHistory();
	const params = useParams<ICourseParams>();
	const [notes, setNotes] = useState<any>(undefined);
	const [enrolled, setEnrolled] = useState<boolean>(false);
	const [enrolledCourses, setEnrolledCourses] = useState<any>(undefined);

	useEffect(() => {
		setAppState({ ...appState, reFetch: () => courseFetch() });
		courseFetch();
	}, []);

	const courseFetch = () => {
		Axios.post(`/api/notes/course/${params.name}`, { user: user?.email })
			.then((d) => {
				setNotes(d.data);
			})
			.catch((e) => toast.error(e));

		Axios.post("/api/user", { user: user?.email })
			.then((d) => {
				setEnrolledCourses(d.data.courses);
				setEnrolled(d.data.courses.includes(params.name));
			})
			.catch((e) => toast.error(e));
	};

	const handleEnrol = () => {
		if (enrolled) {
			Axios.post("/api/courses/finish", { user: user?.email, course: params.name })
				.then(() => {
					setEnrolled(false);
					toast.success(`Finished ${params.name}!`);
				})
				.catch((e) => toast.error(e));
		} else {
			Axios.post("/api/courses/enrol", { user: user?.email, course: params.name })
				.then(() => {
					setEnrolled(true);
					toast.success(`Enrolled in ${params.name}!`);
				})
				.catch((e) => toast.error(e));
		}
	};

	return (
		<Page>
			<div className="course">
				<div className="course-title">
					<IconButton className="back-button" onClick={() => history.goBack()}>
						<Icon path={mdiChevronLeft} size={1.25} color={"#ffa492"} />
					</IconButton>
					{params.name}
					{enrolledCourses ? (
						<Button
							onClick={handleEnrol}
							className="enroll-button"
							startIcon={
								<Icon
									path={enrolled ? mdiNotebookCheck : mdiSchool}
									size={1.25}
									color={"#ffa492"}
								/>
							}>
							{enrolled ? "Finish Course" : "Enrol in this course"}
						</Button>
					) : (
						<></>
					)}
				</div>
				<CSSTransition in={true} appear={true} timeout={1500} classNames="grow">
					<div className="title-underline" />
				</CSSTransition>
				<div className="top-notes">
					<div className="title">Top Notes</div>
					<div className="notes">
						<NoteTable notes={notes} />
					</div>
				</div>
				<div className="latest-notes"></div>
			</div>
		</Page>
	);
}

const notes = [
	{
		downloads: [
			{
				_seconds: 1603272060,
				_nanoseconds: 0,
			},
		],
		hashtags: ["cloud computing", "mathematics", "software engineering", "not here"],
		id: "EPAMdEqE0R47RNXs1BQH",
		author: "liam@example.com",
		semester: "Semester 2, 2020",
		courseCode: "Test",
		likes: [
			{
				_seconds: 1603419681,
				_nanoseconds: 0,
			},
		],
		faculty: "Test",
		name: "Test",
		uploadDate: {
			_seconds: 1603425866,
			_nanoseconds: 103000000,
		},
		description: "Test",
		liked: true,
	},
	{
		semester: "Semester 2, 2020",
		name: "New Note",
		description: "hello",
		hashtags: ["cloud computing", "mathematics"],
		courseCode: "Bing Bong",
		downloads: [],
		faculty: "TRhe Best",
		author: "liam@example.com",
		uploadDate: {
			_seconds: 1603430982,
			_nanoseconds: 443000000,
		},
		id: "N0EAQMAMuelQrjJwocUB",
		likes: [
			{
				_seconds: 1603430982,
				_nanoseconds: 443000000,
			},
		],
		liked: false,
	},
];
