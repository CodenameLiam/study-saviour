import React from "react";
import { Route, Redirect, useHistory } from "react-router";
import firebase from "firebase";

export default function PrivateRoute({ component: Component, ...rest }) {
	const history = useHistory();
	const user = firebase.auth().currentUser;

	return (
		<Route
			{...rest}
			render={(props) => {
				return user ? (
					<Component {...props} />
				) : (
					<Redirect to={`/login?redirect=${history.location.pathname}`} />
				);
			}}
		/>
	);
}
