import React, { useContext, useEffect, useState } from "react";
import firebase from "firebase";
import Page from "../Components/Navigation/Page";
import PageTitle from "../Components/Navigation/PageTitle";
import { AppContext } from "../Context/AppContext";
import Axios from "axios";
import { toast } from "react-toastify";
import NoteTable from "../Components/Table/NoteTable";

export default function LikedNotes() {
	const user = firebase.auth().currentUser;
	const { appState, setAppState } = useContext(AppContext);
	const [notes, setNotes] = useState<any>(undefined);

	useEffect(() => {
		setAppState({ ...appState, reFetch: () => likedNotesFetch() });
		likedNotesFetch();
	}, []);

	const likedNotesFetch = () => {
		Axios.post("/api/notes/user/liked", { user: user?.email })
			.then((d) => {
				setNotes(d.data);
			})
			.catch((e) => toast.error(e));
	};

	return (
		<Page>
			<div className="liked-notes">
				<PageTitle title="Liked Notes" />
				<NoteTable notes={notes} />
			</div>
		</Page>
	);
}
