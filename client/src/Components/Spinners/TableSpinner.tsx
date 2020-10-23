import React from "react";
import { BeatLoader, DotLoader, SyncLoader } from "react-spinners";

export default function TableSpinner() {
	return (
		<div className="table-spinner">
			<SyncLoader size={15} />
		</div>
	);
}
