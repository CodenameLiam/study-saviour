import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Course, CourseAll, Home, LikedNotes, Login, MyNotes, PageNotFound } from "../../Pages";
import Register from "../../Pages/Register";
import PrivateRoute from "./PrivateRoute";

export default function Routes() {
	return (
		<Router>
			<Switch>
				<PrivateRoute exact path="/" component={Home} />
				<PrivateRoute exact path="/courses" component={CourseAll} />
				<PrivateRoute exact path="/courses/:name" component={Course} />
				<PrivateRoute exact path="/my-notes" component={MyNotes} />
				<PrivateRoute exact path="/liked-notes" component={LikedNotes} />
				<Route path="/login" component={Login} />
				<Route path="/register" component={Register} />
				<Route path="/404" component={PageNotFound} />
				<Redirect to="/404" />
			</Switch>
		</Router>
	);
}
