import React, { useEffect, useState } from "react";
import firebase from "firebase";

export const useAuth = () => {
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		const authListener = firebase.auth().onAuthStateChanged((user) => {
			setLoading(true);
		});
		return authListener;
	}, []);

	return loading;
};

export default useAuth;
