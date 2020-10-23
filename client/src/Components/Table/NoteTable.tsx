import {
	IconButton,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	withStyles,
} from "@material-ui/core";
import { mdiCloudDownload, mdiFilePdf, mdiThumbUp } from "@mdi/js";
import Icon from "@mdi/react";
import moment from "moment";
import React, { useState } from "react";
import firebase from "firebase";
import TableSpinner from "../Spinners/TableSpinner";
import Axios from "axios";
import { download } from "../../Services/FileService";

interface INoteTable {
	notes: any[];
}

export default function NoteTable(props: INoteTable) {
	if (props.notes) {
		return (
			<NoteTableContainer>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Name</TableCell>
							<TableCell align="center">Course</TableCell>
							<TableCell align="center">Author</TableCell>
							<TableCell align="center">Hashtags</TableCell>
							<TableCell align="center">Uploaded</TableCell>
							<TableCell align="center">Likes</TableCell>
							<TableCell align="center">Downloads</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{props.notes.map((note) => (
							<NoteRow note={note} key={note.id} />
						))}
					</TableBody>
				</Table>
			</NoteTableContainer>
		);
	}
	return <TableSpinner />;
}

const NoteTableContainer = withStyles({
	root: {
		border: "1px solid rgba(0, 0, 0, 0.12)",
		borderRadius: "1rem",
		boxShadow: "2px 2px 5px #dddddd",
		transition: "all 0.3s",
		"&:hover": {
			boxShadow: "2px 2px 15px #dddddd",
		},
		"& .MuiTableHead-root": {
			background: "#ffa492",

			"& .MuiTableCell-head": {
				color: "#ffffff",
			},
		},
		"& .icon-cell": {
			display: "flex",
			"& .row-name": {
				margin: "auto",
				marginLeft: "1rem",
				fontSize: "0.875rem",
			},
		},
		"& .download-cell": {
			"& svg": {
				marginLeft: "auto",
			},
		},
		"& .MuiIconButton-root": {
			marginLeft: "auto",
		},
		"& .MuiTableCell-root": {
			fontFamily: "'Poppins', sans-serif",
			maxWidth: "12rem",
			whiteSpace: "nowrap",
			overflow: "hidden",
			textOverflow: "ellipsis",
		},
		"& .body-row": {
			transition: "all 0.3s",
			"&:hover": {
				cursor: "pointer",
				background: "#f4f4f4",
			},
		},
	},
})(TableContainer);

interface INoteRow {
	note: any;
}

interface INoteRowState {
	liked: boolean;
	likes: number;
	downloads: number;
}

function NoteRow(props: INoteRow) {
	const user = firebase.auth().currentUser;
	const { note } = props;

	const [state, setState] = useState<INoteRowState>({
		liked: note.liked,
		likes: note.likes.length,
		downloads: note.downloads.length,
	});

	const likeNote = (e: any) => {
		e.stopPropagation();

		// If not was already liked
		if (state.liked) {
			Axios.post("/api/notes/unlike-note", { user: user?.email, note: note.id });
		} else {
			Axios.post("/api/notes/like-note", { user: user?.email, note: note.id });
		}

		// Update frontend information
		const likes = state.liked ? state.likes - 1 : state.likes + 1;
		setState({ ...state, liked: !state.liked, likes: likes });
	};

	const downloadNote = (e: any) => {
		e.stopPropagation();
		Axios.post("/api/notes/download-note", { note: note.id });
		const downloads = state.downloads + 1;
		setState({ ...state, downloads: downloads });
		download(note.id, note.name);
	};

	const openNote = () => {
		Axios.post("/api/notes/download-note", { note: note.id });
		const downloads = state.downloads + 1;
		setState({ ...state, downloads: downloads });
		const storageRef = firebase.storage().ref();
		storageRef
			.child(`notes/${note.id}/${note.name}.pdf`)
			.getDownloadURL()
			.then((url) => window.open(url));
	};

	return (
		<TableRow key={note.name} className="body-row" onClick={openNote}>
			<TableCell>
				<div className="icon-cell">
					<Icon path={mdiFilePdf} size={1} color={"#ffa492"} />
					<span className="row-name">{note.name}</span>
				</div>
			</TableCell>
			<TableCell align="center">{note.courseCode}</TableCell>
			<TableCell align="center">{note.author}</TableCell>
			<TableCell align="center" className="row-hashtag">
				{note.hashtags.join(", ")}
			</TableCell>
			<TableCell align="center">
				{moment(
					new firebase.firestore.Timestamp(
						note.uploadDate._seconds,
						note.uploadDate._nanoseconds
					).toDate()
				)
					.local()
					.format("DD/MM/YYYY, HH:mm")}
			</TableCell>
			<TableCell align="right">
				<div className="icon-cell like-cell">
					<IconButton onClick={likeNote}>
						<Icon path={mdiThumbUp} size={1} color={state.liked ? "#ffa492" : "#c5c5c5"} />
					</IconButton>
					<span className="row-name">{state.likes}</span>
				</div>
			</TableCell>
			<TableCell align="right">
				<div className="icon-cell download-cell">
					<IconButton onClick={downloadNote}>
						<Icon path={mdiCloudDownload} size={1} color={"#c5c5c5"} />
					</IconButton>
					<span className="row-name">{state.downloads}</span>
				</div>
			</TableCell>
		</TableRow>
	);
}
