import React from "react";
import { BeatLoader, DotLoader, SyncLoader } from "react-spinners";

export default function PageSpinner() {
	return (
		<div className="page-spinner">
			<SyncLoader size={30} />
		</div>
	);
}
