import React, { useContext, useEffect } from "react";
import firebase from "firebase";
import { useState } from "react";
import Dropzone from "react-dropzone";
import Icon from "@mdi/react";
import { mdiCloseCircle, mdiFilePdf } from "@mdi/js";
import { IconButton, withStyles } from "@material-ui/core";
import {
	AutoCompletePaper,
	CancelButton,
	InputAutocomplete,
	SubmitButton,
	UploadButton,
	UploadField,
} from "../../Styles/MaterialUI/MaterialComponents";
import { Autocomplete, createFilterOptions } from "@material-ui/lab";
import moment from "moment";
import Axios from "axios";
import { toast } from "react-toastify";
import { upload } from "../../Services/FileService";
import { AppContext } from "../../Context/AppContext";

interface IModalState {
	file: File | undefined;
	author: string | undefined | null;
	name: string;
	courseCode: string;
	description: string;
	hashtags: string[] | null;
	faculty: string;
	semester: string | undefined | null;
	nameError: boolean;
	authorError: boolean;
	courseCodeError: boolean;
	descriptionError: boolean;
	facultyError: boolean;
	hashtagError: boolean;
	semesterError: boolean;
}

interface IModalProps {
	onClose: () => void;
	// onSubmit: () => void;
}

export default function Modal(props: IModalProps) {
	const user = firebase.auth().currentUser;
	const { appState, setAppState } = useContext(AppContext);

	const [state, setState] = useState<IModalState>({
		file: undefined,
		name: "",
		author: user?.email,
		courseCode: "",
		description: "",
		hashtags: [],
		faculty: "",
		semester: "",
		nameError: false,
		authorError: false,
		courseCodeError: false,
		descriptionError: false,
		facultyError: false,
		hashtagError: false,
		semesterError: false,
	});

	const [hastagOptions, setHashtagOptions] = useState([]);

	useEffect(() => {
		(async () => {
			const response = await Axios.get("/api/hashtags");
			setHashtagOptions(response.data);
		})();
	}, []);

	const handleSubmit = (e: any) => {
		e.preventDefault();
		if (validateForm()) {
			Axios.post("/api/hashtags", { hashtags: state.hashtags });
			Axios.post("/api/note", {
				name: state.name,
				author: state.author,
				courseCode: state.courseCode,
				description: state.description,
				hashtags: state.hashtags,
				faculty: state.faculty,
				semester: state.semester,
			})
				.then((d) => {
					upload(state.file!, d.data.id, state.name, handleSuccess);
				})
				.catch((e) => {
					toast.error(e);
				});
		}
	};

	const handleSuccess = () => {
		toast.success("Succesfully uploaded note!");
		props.onClose();
		appState.reFetch();
		// props.onSubmit();
	};

	const validateForm = (): boolean => {
		const fileError = state.file == undefined;
		const nameError = state.name.length > 0 ? false : true;
		const authorError = (state.author as string).length > 0 ? false : true;
		const courseCodeError = state.courseCode.length > 0 ? false : true;
		const descriptionError = state.description.length > 0 ? false : true;
		const facultyError = state.faculty.length > 0 ? false : true;
		const semesterError = (state.semester as string).length > 0 ? false : true;
		const hashtagError = (state.hashtags as []).length > 0 ? false : true;

		setState({
			...state,
			nameError: nameError,
			authorError: authorError,
			courseCodeError: courseCodeError,
			descriptionError: descriptionError,
			facultyError: facultyError,
			semesterError: semesterError,
			hashtagError: hashtagError,
		});

		if (fileError) {
			toast.error("Please upload a file");
		}

		return (
			!fileError &&
			!nameError &&
			!authorError &&
			!courseCodeError &&
			!descriptionError &&
			!facultyError &&
			!semesterError &&
			!hashtagError
		);
	};
	return (
		<div className="modal">
			<form onSubmit={handleSubmit}>
				<div className="upper">
					<Dropzone
						onDrop={(acceptedFiles) => setState({ ...state, file: acceptedFiles[0] })}
						accept={"application/pdf"}
						maxFiles={1}>
						{({ getRootProps, getInputProps }) => (
							<section className="dropzone">
								<div className="area" {...getRootProps()}>
									<input {...getInputProps()} />
									{state.file ? (
										<>
											<div className="file-icon">
												<Icon path={mdiFilePdf} size={1} />
											</div>

											<div className="file-name">{state.file.name}</div>
											<div className="delete-file">
												<IconButton
													onClick={(e) => {
														e.stopPropagation();
														setState({ ...state, file: undefined });
													}}>
													<Icon path={mdiCloseCircle} size={1} />
												</IconButton>
											</div>
										</>
									) : (
										<>
											<div className="button">
												<UploadButton>Upload Note</UploadButton>
											</div>

											<div className="drop">Or drop one here</div>
										</>
									)}
								</div>
							</section>
						)}
					</Dropzone>
					<div className="input">
						<UploadField
							className="input-field"
							id="course"
							placeholder="Name"
							variant="outlined"
							fullWidth
							onChange={(e) => setState({ ...state, name: e.target.value, nameError: false })}
							error={state.nameError}
							helperText={state.nameError ? "Please enter a valid note name" : ""}
						/>
						<UploadField
							className="input-field"
							id="course"
							placeholder="Course Code"
							variant="outlined"
							fullWidth
							onChange={(e) =>
								setState({ ...state, courseCode: e.target.value, courseCodeError: false })
							}
							error={state.courseCodeError}
							helperText={state.courseCodeError ? "Please enter a valid coursecode" : ""}
						/>
						<UploadField
							className="input-field"
							id="faculty"
							placeholder="Faculty"
							variant="outlined"
							fullWidth
							onChange={(e) => setState({ ...state, faculty: e.target.value, facultyError: false })}
							error={state.facultyError}
							helperText={state.facultyError ? "Please enter a valid faculty" : ""}
						/>
						<Autocomplete
							id="combo-box-demo"
							options={getSemesterOptions()}
							getOptionLabel={(option) => option}
							fullWidth
							onChange={(event: any, newValue: string | null) => {
								setState({ ...state, semester: newValue, semesterError: false });
							}}
							PaperComponent={AutoCompletePaper}
							renderInput={(params) => (
								<UploadField
									{...params}
									placeholder="Semester"
									variant="outlined"
									error={state.semesterError}
									helperText={state.semesterError ? "Please enter a valid semester" : ""}
								/>
							)}
						/>
					</div>
				</div>
				<div className="lower">
					<InputAutocomplete
						className="hashtags"
						multiple
						id="tags-outlined"
						options={hastagOptions}
						getOptionLabel={(option: any) => option}
						filterOptions={(options: any, params) => {
							const filtered = filter(options, params);
							// Suggest the creation of a new value
							if (params.inputValue !== "") {
								filtered.push(params.inputValue);
							}
							return filtered;
						}}
						disableCloseOnSelect
						filterSelectedOptions
						onChange={(event: any, newValue: string[] | null | any) => {
							setState({ ...state, hashtags: newValue, hashtagError: false });
						}}
						PaperComponent={AutoCompletePaper}
						renderInput={(params) => (
							<UploadField
								{...params}
								variant="outlined"
								placeholder="#Hashtags"
								error={state.hashtagError}
								helperText={state.hashtagError ? "Please select at least one hashtag" : ""}
							/>
						)}
					/>
					<UploadField
						id="outlined-basic"
						placeholder="Description"
						variant="outlined"
						fullWidth
						multiline
						rows={3}
						onChange={(e) =>
							setState({ ...state, description: e.target.value, descriptionError: false })
						}
						error={state.descriptionError}
						helperText={state.descriptionError ? "Please enter a valid description" : ""}
					/>
				</div>
				<div className="submit">
					<CancelButton fullWidth onClick={props.onClose}>
						Cancel
					</CancelButton>
					<SubmitButton type="submit" fullWidth>
						Submit
					</SubmitButton>
				</div>
			</form>
		</div>
	);
}

const filter = createFilterOptions<string>();

function getSemesterOptions() {
	const mid = moment().quarter();
	let semester = mid <= 2 ? 1 : 2;
	let year = moment().year();
	let smesterOptions: string[] = [];
	for (let i = 0; i <= 5; i++) {
		if (semester == 2) {
			smesterOptions.push(`Semester 2, ${year}`);
			semester--;
		} else {
			smesterOptions.push(`Semester 1, ${year}`);
			semester++;
			year--;
		}
	}
	return smesterOptions;
}

const hashtags: string[] = [
	"Space Science",
	"abstract algebra",
	"accelerators",
	"accounting",
	"acoustics",
	"addication",
	"aerobiology",
	"aeronautics",
	"aerospace",
	"agriculture",
	"agrochemistry",
	"agronomy",
	"algebra",
	"algebraic geometry",
	"algebraic topology",
	"algorithms",
	"allergy",
];
