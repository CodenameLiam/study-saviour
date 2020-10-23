import React from "react";

interface IChart {
	title: string;
	children: any;
}

export default function Chart(props: IChart) {
	return (
		<div className="chart-container">
			<div className="title">{props.title}</div>
			<div className="chart">{props.children}</div>
		</div>
	);
}
