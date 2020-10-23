import React, { useState } from "react";
import firebase from "firebase";
import firebaseConfig from "./FirebaseConfig";
import { ToastContainer } from "react-toastify";
import { AppContext } from "./Context/AppContext";
import useAuth from "./Services/AuthorisationService";
import PageSpinner from "./Components/Spinners/PageSpinner";
import Routes from "./Components/Routing/Routes";

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

interface IAppState {
	navOpen: boolean;
	search: string;
	reFetch: () => void;
}

function App() {
	const [appState, setAppState] = useState<IAppState>({
		navOpen: true,
		search: "",
		reFetch: () => {},
	});

	return useAuth() ? (
		<AppContext.Provider value={{ appState, setAppState }}>
			<ToastContainer />
			<Routes />
		</AppContext.Provider>
	) : (
		<PageSpinner />
	);
}

export default App;
