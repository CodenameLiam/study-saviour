import { Button, IconButton, InputAdornment, TextField, withStyles } from "@material-ui/core";
import { mdiBookOpenVariant, mdiCloudUpload, mdiMagnify } from "@mdi/js";
import Icon from "@mdi/react";
import React, { useContext, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Popup from "reactjs-popup";
import { AppContext } from "../../Context/AppContext";
import { InputField } from "../../Styles/MaterialUI/MaterialComponents";
import Modal from "../Modal/Modal";

export default function Header() {
	const { appState, setAppState } = useContext(AppContext);
	const [search, setSearch] = useState("");
	const history = useHistory();
	const location = useLocation();

	const handleSearch = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();
		setAppState({ ...appState, search: search });
	};

	const handleEnterSearch = (e: React.KeyboardEvent<HTMLDivElement>) => {
		if (e.key === "Enter") {
			e.preventDefault();
			setAppState({ ...appState, search: search });
			//   if (location.pathname == "/search-notes") {
			//     location.state = { search: search };
			//     props.request();
			//   } else {
			//     history.push("/search-notes", { search: search });
			//   }
		}
	};

	return (
		<div className="header">
			<div className="left">
				<div className="logo">
					<Icon path={mdiBookOpenVariant} size={1.8} />
					<div className="logo-text">
						Study <span className="saviour">Saviour</span>
					</div>
				</div>
			</div>
			<div className="right">
				<HeaderSearchTextField
					className="search"
					placeholder="Search..."
					variant="outlined"
					fullWidth
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<IconButton
									aria-label="search"
									// style={{ color: "#51247a" }}
									onClick={(e) => handleSearch(e)}
									// onClick={handleClickShowPassword}
									// onMouseDown={handleMouseDownPassword}
								>
									<Icon path={mdiMagnify} size={1} />
								</IconButton>
							</InputAdornment>
						),
					}}
					onChange={(e) => setSearch(e.target.value)}
					onKeyDown={(e) => handleEnterSearch(e)}
				/>
				<Popup
					contentStyle={{ borderRadius: "1rem" }}
					trigger={
						<Button
							style={{ background: "transparent" }}
							className="upload"
							color="primary"
							startIcon={<Icon path={mdiCloudUpload} size={1} />}>
							<span className="upload-text">Upload Notes</span>
						</Button>
					}
					modal
					closeOnDocumentClick={false}>
					{(close) => <Modal onClose={() => close()} />}
				</Popup>
			</div>
		</div>
	);
}

const HeaderSearchTextField = withStyles({
	root: {
		"& .MuiOutlinedInput-root": {
			borderRadius: 100,
			background: "#ffffff",
			"& input": {
				padding: "12px 14px;",
			},
			"& fieldset": {
				transition: "box-shadow 0.3s",
				borderColor: "#dddddd",
				borderWidth: "0px",
			},
			"&:hover fieldset": {
				borderColor: "#dddddd",
				borderWidth: "0px",
			},
			"&.Mui-focused fieldset": {
				borderColor: "#dddddd",
				borderWidth: "0px",
			},
		},
	},
})(TextField);
