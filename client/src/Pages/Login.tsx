import React from "react";
import Icon from "@mdi/react";
import { mdiAccountCircle, mdiEye, mdiEyeOff, mdiLock } from "@mdi/js";
import LogoPanel from "../Components/Panels/LogoPanel";
import { IconButton, InputAdornment } from "@material-ui/core";
import InputPanel from "../Components/Panels/InputPanel";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { useHistory, useLocation } from "react-router-dom";
import { InputField, LoginButton } from "../Styles/MaterialUI/MaterialComponents";
import { login } from "../Services/LoginService";
import { toast } from "react-toastify";

interface ILoginState {
	username: string;
	password: string;
	showPassword: boolean;
	usernameError: boolean;
	passwordError: boolean;
	errorStatus: boolean;
	errorMessage: string;
}

export default function Login() {
	const history = useHistory();
	const location = useLocation();

	const [state, setState] = useState<ILoginState>({
		username: "",
		password: "",
		showPassword: false,
		usernameError: false,
		passwordError: false,
		errorStatus: false,
		errorMessage: "",
	});

	const handleUsernameChange = (e: any) => {
		setState({
			...state,
			username: e.target.value,
			usernameError: false,
			errorStatus: false,
		});
	};

	const handlePasswordChange = (e: any) => {
		setState({
			...state,
			password: e.target.value,
			passwordError: false,
			errorStatus: false,
		});
	};

	const validateForm = (e: any) => {
		e.preventDefault();

		const usernameError = state.username.length > 0 ? false : true;
		const passwordError = state.username.length > 0 ? false : true;

		setState({
			...state,
			usernameError: usernameError,
			passwordError: passwordError,
		});

		if (state.username.length > 0 && state.password.length > 0) {
			login(state.username, state.password, handleSuccess, handleError);
		}
	};

	const handleSuccess = () => {
		let path = new URLSearchParams(location.search);
		const redirect = path.get("redirect") ? path.get("redirect") : "/";
		history.push(redirect!);
	};

	const handleError = (e: any) => {
		toast.error(e.message);
		console.log(e);
	};

	return (
		<div className="login">
			<LogoPanel />
			<InputPanel>
				<form className="input-form" onSubmit={validateForm}>
					<div className="input-header">Login</div>
					<CSSTransition in={true} appear={true} timeout={1000} classNames="grow">
						<div className="input-underline" />
					</CSSTransition>
					<InputField
						variant="outlined"
						placeholder="Email"
						fullWidth
						onChange={handleUsernameChange}
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<Icon path={mdiAccountCircle} size={1} color={"#dddddd"} />
								</InputAdornment>
							),
						}}
						error={state.usernameError}
						helperText={state.usernameError ? "Please enter a valid username" : ""}
					/>
					<InputField
						variant="outlined"
						placeholder="Password"
						fullWidth
						type={state.showPassword ? "text" : "password"}
						onChange={handlePasswordChange}
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<Icon path={mdiLock} size={1} color={"#dddddd"} />
								</InputAdornment>
							),
							endAdornment: (
								<InputAdornment position="end">
									<IconButton
										aria-label="toggle password visibility"
										onClick={() => setState({ ...state, showPassword: !state.showPassword })}
										onMouseDown={(e) => e.preventDefault()}>
										{state.showPassword ? (
											<Icon path={mdiEye} size={1} color={"#dddddd"} />
										) : (
											<Icon path={mdiEyeOff} size={1} color={"#dddddd"} />
										)}
									</IconButton>
								</InputAdornment>
							),
						}}
						error={state.passwordError}
						helperText={state.passwordError ? "Please enter a valid password" : ""}
					/>
					<LoginButton className="login-button" type="submit" variant="contained" fullWidth>
						Submit
					</LoginButton>
					<div className="form-footer">
						<div className="footer-text" onClick={() => history.push("/register")}>
							Create an account
						</div>
						<div className="footer-text" onClick={() => history.push("/register")}>
							Forgot password
						</div>
					</div>
				</form>
			</InputPanel>
		</div>
	);
}
