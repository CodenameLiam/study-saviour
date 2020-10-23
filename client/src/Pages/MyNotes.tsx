import React, { useContext, useEffect, useState } from "react";
import firebase from "firebase";
import Page from "../Components/Navigation/Page";
import PageTitle from "../Components/Navigation/PageTitle";
import { AppContext } from "../Context/AppContext";
import Axios from "axios";
import { toast } from "react-toastify";
import NoteTable from "../Components/Table/NoteTable";

export default function MyNotes() {
	const user = firebase.auth().currentUser;
	const { appState, setAppState } = useContext(AppContext);
	const [notes, setNotes] = useState<any>(undefined);

	useEffect(() => {
		setAppState({ ...appState, reFetch: () => myNotesFetch() });
		myNotesFetch();
	}, []);

	const myNotesFetch = () => {
		Axios.post("/api/notes/user", { user: user?.email })
			.then((d) => {
				setNotes(d.data);
			})
			.catch((e) => toast.error(e));
	};

	return (
		<Page>
			<div className="my-notes">
				<PageTitle title="My Notes" />
				<NoteTable notes={notes} />
			</div>
		</Page>
	);
}
