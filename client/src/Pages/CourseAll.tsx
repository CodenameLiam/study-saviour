import { mdiNotebookMultiple } from "@mdi/js";
import Icon from "@mdi/react";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import Page from "../Components/Navigation/Page";
import { CourseButton } from "../Styles/MaterialUI/MaterialComponents";

export default function CourseAll() {
	const history = useHistory();
	const [courses, setCourses] = useState<string[]>([]);

	useEffect(() => {
		Axios.get("/api/courses").then((d) => {
			setCourses(d.data);
		});
	}, []);

	return (
		<Page>
			<div className="course-all">
				<div className="course-title">All Courses</div>
				<CSSTransition in={true} appear={true} timeout={1500} classNames="grow">
					<div className="title-underline" />
				</CSSTransition>
				<div className="course-all-container">
					{courses.map((course: string) => (
						<CourseButton
							key={course}
							startIcon={<Icon path={mdiNotebookMultiple} size={1} />}
							onClick={() => history.push(`/courses/${course}`)}>
							{course}
						</CourseButton>
					))}
				</div>
			</div>
		</Page>
	);
}
