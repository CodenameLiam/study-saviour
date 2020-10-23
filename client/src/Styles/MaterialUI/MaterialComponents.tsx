import { Button, Paper, TextField, withStyles } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

export const InputField = withStyles({
	root: {
		fontFamily: "'Poppins', sans-serif",
		marginBottom: "2rem",
		"& .MuiOutlinedInput-root": {
			borderRadius: 100,
			boxShadow: "2px 2px 5px #dddddd",
			"& fieldset": {
				transition: "all 0.3s",
				borderColor: "#dddddd",
				borderWidth: "3px",
			},
			"&:hover fieldset": {
				borderColor: "#fab795",
				boxShadow: "2px 2px 10px #dddddd",
			},
			"&.Mui-focused fieldset": {
				borderColor: "#fab795",
				boxShadow: "2px 2px 10px #dddddd",
				borderWidth: "3px",
			},
		},
	},
})(TextField);

export const UploadField = withStyles({
	root: {
		marginBottom: "0.75rem",
		"& .MuiOutlinedInput-root": {
			fontFamily: "'Poppins', sans-serif",
			borderRadius: "1rem",
			boxShadow: "2px 2px 5px #dddddd",
			"& fieldset": {
				transition: "all 0.3s",
				borderColor: "#dddddd",
				borderWidth: "3px",
			},
			"&:hover fieldset": {
				borderColor: "#fab795",
				boxShadow: "2px 2px 10px #dddddd",
			},
			"&.Mui-focused fieldset": {
				borderColor: "#fab795",
				boxShadow: "2px 2px 10px #dddddd",
				borderWidth: "3px",
			},
		},
	},
})(TextField);

export const LoginButton = withStyles({
	root: {
		background:
			"linear-gradient(90deg, rgba(252, 124, 137, 1) 0%, rgba(255, 164, 146, 1) 50%, rgba(250, 183, 149, 1) 100%)",
		borderRadius: 100,
		height: "48px",
		marginTop: "1rem",
		color: "white",
		fontSize: "1rem",
		fontFamily: "'Poppins', sans-serif",
		boxShadow: "2px 4px 4px -2px #dddddd",
		"&:hover": {
			boxShadow: "2px 5px 8px -1px #dddddd",
		},
	},
})(Button);

export const CourseButton = withStyles({
	root: {
		background:
			"linear-gradient(90deg, rgba(252, 124, 137, 1) 0%, rgba(255, 164, 146, 1) 50%, rgba(250, 183, 149, 1) 100%)",
		borderRadius: "1rem",
		height: "10rem",
		width: "15rem",
		marginRight: "1.5rem",
		marginBottom: "1.5rem",
		color: "white",
		fontSize: "1rem",
		fontFamily: "'Poppins', sans-serif",
		boxShadow: "2px 4px 4px -2px #dddddd",
		transition: "all 0.3s",
		"&:hover": {
			boxShadow: "2px 5px 8px -1px #dddddd",
			transform: "scale(1.05)",
		},
	},
})(Button);

export const UploadButton = withStyles({
	root: {
		marginBottom: "1rem",
		background:
			"linear-gradient(90deg, rgba(252, 124, 137, 1) 0%, rgba(255, 164, 146, 1) 50%, rgba(250, 183, 149, 1) 100%)",
		borderRadius: 100,
		width: "50%",
		height: "48px",
		marginTop: "1rem",
		color: "white",
		fontSize: "1rem",
		fontFamily: "'Poppins', sans-serif",
		boxShadow: "2px 4px 4px -2px #fab795",
		"&:hover": {
			boxShadow: "2px 5px 8px -1px #fab795",
		},
	},
})(Button);

export const SubmitButton = withStyles({
	root: {
		background:
			"linear-gradient(90deg, rgba(252, 124, 137, 1) 0%, rgba(255, 164, 146, 1) 50%, rgba(250, 183, 149, 1) 100%)",
		borderRadius: 100,
		height: "42px",
		width: "50%",
		marginBottom: "0.5rem",
		marginTop: "1rem",
		color: "white",
		fontSize: "1rem",
		fontFamily: "'Poppins', sans-serif",
		boxShadow: "2px 2px 5px #fab795",
		"&:hover": {
			boxShadow: "2px 2px 10px #fc7c89",
		},
	},
})(Button);

export const CancelButton = withStyles({
	root: {
		background: "#c5c5c5",
		borderRadius: 100,
		height: "42px",
		width: "50%",
		marginBottom: "0.5rem",
		marginTop: "1rem",
		color: "white",
		fontSize: "1rem",
		fontFamily: "'Poppins', sans-serif",
		boxShadow: "2px 2px 5px #c5c5c5",
		"&:hover": {
			background: "#c5c5c5",
			boxShadow: "2px 2px 10px #989898",
		},
	},
})(Button);

export const AutoCompletePaper = withStyles({
	root: {
		border: "3px solid rgba(0, 0, 0, 0.12)",
		boxShadow: "none",
		fontFamily: "'Poppins', sans-serif",
		borderRadius: "1rem",
	},
})(Paper);

export const InputAutocomplete = withStyles({
	tag: {
		fontFamily: "'Poppins', sans-serif !important",
	},
})(Autocomplete);
