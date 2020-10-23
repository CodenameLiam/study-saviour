import React from "react";
import Icon from "@mdi/react";
import { mdiBookOpenVariant } from "@mdi/js";

export default function LogoPanel() {
	return (
		<div className="logo-panel">
			<div className="logo">
				<Icon path={mdiBookOpenVariant} size={10} />
				<div className="logo-text">
					Study <span className="saviour">Saviour</span>
				</div>
			</div>
		</div>
	);
}
