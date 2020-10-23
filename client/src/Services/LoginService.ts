import firebase from "firebase";

export const register = (
	email: string,
	password: string,
	// username: string,
	handleSuccess: (user: firebase.auth.UserCredential) => void,
	handleError: (e: Error) => void
): void => {
	firebase
		.auth()
		.createUserWithEmailAndPassword(email, password)
		.then((user) => handleSuccess(user))
		// .then(() => {
		// 	const user = firebase.auth().currentUser;
		// 	// user?.updateProfile({
		// 	// 	displayName: username,
		// 	// });
		// })
		.catch((e) => handleError(e));
};

export const login = (
	email: string,
	password: string,
	handleSuccess: (user: firebase.auth.UserCredential) => void,
	handleError: (e: Error) => void
): void => {
	firebase
		.auth()
		.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
		.then(() => {
			firebase
				.auth()
				.signInWithEmailAndPassword(email, password)
				.then((user) => handleSuccess(user))
				.catch((e) => handleError(e));
		})
		.catch((e) => handleError(e));
};

export const logout = (handleSuccess: () => void, handleError: (e: Error) => void): void => {
	firebase
		.auth()
		.signOut()
		.then(() => {
			// Sign-out successful.
			handleSuccess();
		})
		.catch((e) => {
			// An error happened.
			handleError(e);
		});
};