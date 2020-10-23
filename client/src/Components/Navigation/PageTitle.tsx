import React from "react";
import { CSSTransition } from "react-transition-group";

interface IPageTitleProps {
	title: string;
}

export default function PageTitle(props: IPageTitleProps) {
	return (
		<div className="page-title">
			<div className="title">{props.title}</div>
			<CSSTransition in={true} appear={true} timeout={1500} classNames="grow">
				<div className="title-underline" />
			</CSSTransition>
		</div>
	);
}
