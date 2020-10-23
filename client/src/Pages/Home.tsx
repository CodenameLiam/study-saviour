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
import { mdiAccountCircle, mdiNotebookMultiple, mdiTrophyAward } from "@mdi/js";
import { Bar, Line, Doughnut } from "react-chartjs-2";
import CountUp from "react-countup";

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
		Axios.post("/api/dashboard", { user: user?.email }).then((d) => {
			const { likes, totalLikes, downloads, totalDownloads } = d.data;
			setState({
				...state,
				likes: likes,
				totalLikes: totalLikes,
				downloads: downloads,
				totalDownloads: totalDownloads,
			});
		});
	}, []);

	return (
		<Page>
			<div className="home">
				<div className="dashboard">
					<Chart title="Weekly Points">
						<Weekly likes={state.likes} downloads={state.downloads} />
					</Chart>
					<Chart title="Overall Points">
						<Overall totalDownloads={state.totalDownloads} totalLikes={state.totalLikes} />
					</Chart>
					<Chart title="Progress Until Next Level">
						<Progress totalScore={state.totalDownloads + state.totalLikes} />
					</Chart>
					<div className="courses-container">
						<div className="title">My Courses</div>
						<div className="courses">{renderCourses()}</div>
					</div>
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

function Progress(props: { totalScore: number }) {
	const inComplete = 100 - props.totalScore;

	const data = {
		labels: ["Score", "Remaining"],
		datasets: [
			{
				label: "Rainfall",
				backgroundColor: ["#fab795", "rgba(250, 183, 149, 0.4)"],
				// hoverBackgroundColor: ["#501800", "#4B5000", "#175000", "#003350", "#35014F"],
				data: [props.totalScore, inComplete],
			},
		],
	};

	const options = {
		maintainAspectRatio: false,
	};
	return (
		<div className="progress">
			<div className="stats">
				<CountUp start={0} end={props.totalScore} delay={0}>
					{({ countUpRef }) => (
						<div className="counter">
							<span ref={countUpRef} />%
						</div>
					)}
				</CountUp>
				<div className="stat-text">
					<p>Next Level:</p>
					<b>Note Hero</b>
				</div>
				<Icon path={mdiTrophyAward} size={4} />
			</div>
			<div className="doughtnut">
				<Doughnut data={data} options={options} />
			</div>
		</div>
	);
}

interface IOverallProps {
	totalLikes: number;
	totalDownloads: number;
}
function Overall(props: IOverallProps) {
	const { totalLikes, totalDownloads } = props;
	const suggestedMax = Math.max(totalLikes, totalDownloads) + 2;
	const data = {
		labels: ["Score"],
		datasets: [
			{
				label: "Likes",
				data: [totalLikes],
				borderColor: "#fab795",
				borderWidth: 3,
				backgroundColor: "rgba(250, 183, 149, 0.4)",
			},
			{
				label: "Downloads",
				data: [totalDownloads],
				borderColor: "#fc7c89",
				borderWidth: 3,
				backgroundColor: "rgba(252, 124, 137, 0.4)",
			},
		],
	};

	const options = {
		maintainAspectRatio: false,
		scales: {
			yAxes: [
				{
					ticks: {
						stepSize: 1,
						beginAtZero: true,
						suggestedMax: suggestedMax,
					},
				},
			],
		},
	};
	return (
		<div className="overall">
			<Bar data={data} options={options} />
		</div>
	);
}

interface IWeeklyProps {
	likes: any[];
	downloads: any[];
}
function Weekly(props: IWeeklyProps) {
	const { likes, downloads } = props;
	// const suggestedMax =  Math.max(totalLikes, totalDownloads) + 2;

	const likeCounts = likes.reduce(function (result, order) {
		var day = moment(order).format("YYYY-MM-DD");
		if (!result[day]) {
			result[day] = 0;
		}
		result[day]++;
		return result;
	}, {});

	const downloadCounts = downloads.reduce(function (result, order) {
		var day = moment(order).format("YYYY-MM-DD");
		if (!result[day]) {
			result[day] = 0;
		}
		result[day]++;
		return result;
	}, {});

	const labels: any[] = [];
	const likeValues: any[] = [];
	const downloadValues: any[] = [];

	for (let i = 6; i >= 0; i--) {
		const date = moment().subtract(i, "days").format("YYYY-MM-DD");
		const likeCount = likeCounts[date] ? likeCounts[date] : 0;
		const downloadCount = downloadCounts[date] ? downloadCounts[date] : 0;
		labels.push(moment().subtract(i, "days").format("D/M"));
		likeValues.push(likeCount);
		downloadValues.push(downloadCount);
	}

	const data = {
		labels: labels,
		datasets: [
			{
				label: "Likes",
				data: likeValues,
				borderColor: "#fab795",
				backgroundColor: "rgba(250, 183, 149, 0.4)",
			},
			{
				label: "Downloads",
				data: downloadValues,
				borderColor: "#fc7c89",
				backgroundColor: "rgba(252, 124, 137, 0.4)",
			},
		],
	};

	const options = {
		maintainAspectRatio: false,
	};
	return (
		<div className="weekly">
			<Line data={data} options={options} />
		</div>
	);
}
