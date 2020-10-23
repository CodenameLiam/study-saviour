import { Button, Paper, withStyles } from "@material-ui/core";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import firebase from "firebase";
import Page from "../Components/Navigation/Page";
import moment from "moment";
import Chart from "../Components/Charts/Chart";
import { CourseButton } from "../Styles/MaterialUI/MaterialComponents";
import Icon from "@mdi/react";
import { mdiAccountCircle, mdiNotebookMultiple } from "@mdi/js";

interface IHomeState {
	likes: [];
	totalLikes: number;
	downloads: [];
	totalDownloads: number;
}

export default function Home() {
	const history = useHistory();
	const location = useLocation();

	const user = firebase.auth().currentUser;

	const [state, setState] = useState<IHomeState>({
		likes: [],
		totalLikes: 0,
		downloads: [],
		totalDownloads: 0,
	});

	const [userInfo, setUserInfo] = useState<any>({ courses: [] });

	useEffect(() => {
		Axios.post("/api/user", { user: user?.email }).then((d) => {
			setUserInfo(d.data);
		});
		// Axios.post(?/api/dashboard", {user: user?.email}).then((d) => {
		// 	const { likes, totalLikes, downloads, totalDownloads } = d.data;
		// 	const likeDates = likes.map((like: { _seconds: number; _nanoseconds: number }) => {
		// 		return new firebase.firestore.Timestamp(like._seconds, like._nanoseconds).toDate();
		// 	});
		// 	const downloadDates = downloads.map(
		// 		(download: { _seconds: number; _nanoseconds: number }) => {
		// 			return new firebase.firestore.Timestamp(
		// 				download._seconds,
		// 				download._nanoseconds
		// 			).toDate();
		// 		}
		// 	);
		// 	setState({
		// 		...state,
		// 		likes: likeDates,
		// 		totalLikes: totalLikes,
		// 		downloads: downloadDates,
		// 		totalDownloads: totalDownloads,
		// 	});
		// });
	}, []);

	return (
		<Page>
			<div className="home">
				<div className="graphing">
					<Chart title="Weekly Points">
						<div>Recent</div>
					</Chart>
					<Chart title="Overall Points">
						<div>Recent</div>
					</Chart>
					<Chart title="Progress Until Next Level">
						<div>Recent</div>
					</Chart>
					{/* <div className="chart"></div>
					<div className="chart"></div>
					<div className="chart"></div> */}
				</div>
				<div className="courses-container">
					<div className="title">My Courses</div>
					<div className="courses">{renderCourses()}</div>
				</div>
			</div>
		</Page>
	);

	function renderCourses() {
		if (userInfo) {
			return userInfo.courses.map((course: string) => {
				return (
					<CourseButton
						startIcon={<Icon path={mdiNotebookMultiple} size={1} />}
						onClick={() => history.push(`/courses/${course}`)}>
						{course}
					</CourseButton>
				);
			});
		}
		return <></>;
	}
}
