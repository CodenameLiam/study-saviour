import {
	createStyles,
	Drawer,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	makeStyles,
	Theme,
} from "@material-ui/core";
import {
	mdiExitToApp,
	mdiFolderHeart,
	mdiHome,
	mdiMenu,
	mdiNotebook,
	mdiNoteMultiple,
	mdiSchool,
} from "@mdi/js";
import Icon from "@mdi/react";
import React, { useContext } from "react";
import clsx from "clsx";
import { useHistory, useLocation } from "react-router-dom";
import { useState } from "react";
import { logout } from "../../Services/LoginService";
import { toast } from "react-toastify";
import { AppContext } from "../../Context/AppContext";

interface INavigationState {
	navigationOpen: boolean;
	navigationVisible: boolean;
}

export default function Navigation() {
	const history = useHistory();
	const location = useLocation();
	const { appState, setAppState } = useContext(AppContext);

	const [state, setState] = useState<INavigationState>({
		navigationOpen: true,
		navigationVisible: true,
	});

	// Close the drawer if open, open the drawer if closed
	const handleDrawer = () => {
		setAppState({ navOpen: !appState.navOpen });
	};

	// Checks if the navigation link matches the current route (will be rendered as active)
	const checkActive = (locationPath: string, linkPath: string) => {
		return locationPath.split("/")[1] === linkPath.split("/")[1];
	};

	const handleLogOut = () => logout(handleLogOutSuccess, handleLogOutError);
	const handleLogOutSuccess = () => history.push("/login");
	const handleLogOutError = (e: any) => toast.error(e.message);

	const classes = useStyles();
	const navigationLinks = NavigationLinks();

	return (
		<div className="navigation">
			<Drawer
				variant="permanent"
				className={clsx(classes.drawer, {
					[classes.drawerOpen]: appState.navOpen,
					[classes.drawerClose]: !appState.navOpen,
					[classes.drawerNotVisible]: !state.navigationVisible,
				})}
				classes={{
					paper: clsx({
						[classes.drawerOpen]: appState.navOpen,
						[classes.drawerClose]: !appState.navOpen,
						[classes.drawerNotVisible]: !state.navigationVisible,
					}),
				}}>
				<List classes={{ root: classes.list }}>
					{navigationLinks.map((link, index) => {
						const active = checkActive(location.pathname, link.path);
						return (
							<ListItem
								key={index}
								onClick={() => {
									history.push(link.path);
								}}
								button
								className={clsx(classes.menuButton, {
									[classes.menuButtonActive]: active,
									[classes.menuButtonInactive]: !active,
									[classes.menuButtonClose]: !appState.navOpen,
								})}
								classes={{
									root: clsx({
										[classes.menuButtonActive]: active,
										[classes.menuButtonInactive]: !active,
									}),
								}}>
								<ListItemIcon
									classes={{
										root: clsx({
											[classes.menuIconActive]: active,
											[classes.menuIconInactive]: !active,
										}),
									}}>
									{link.icon}
								</ListItemIcon>
								<ListItemText primary={link.label} />
							</ListItem>
						);
					})}
				</List>
				<List classes={{ root: classes.listBottom }}>
					<ListItem
						button
						onClick={handleLogOut}
						classes={{
							root: clsx(classes.menuButton, classes.menuButtonExpand),
						}}>
						<ListItemIcon>
							<Icon path={mdiExitToApp} size={1} />
						</ListItemIcon>
						<ListItemText primary="Logout" />
					</ListItem>
					<ListItem
						button
						onClick={handleDrawer}
						classes={{
							root: clsx(classes.menuButton, classes.menuButtonExpand),
						}}>
						<ListItemIcon>
							<Icon path={mdiMenu} size={1} />
						</ListItemIcon>
					</ListItem>
				</List>
			</Drawer>
		</div>
	);
}

interface LinkInterface {
	path: string;
	label: React.ReactNode;
	icon: React.ReactNode;
}

function NavigationLinks(): LinkInterface[] {
	return [
		{ label: "Dashboard", path: "/", icon: <Icon path={mdiHome} size={1} /> },
		{ label: "Courses", path: "/courses", icon: <Icon path={mdiSchool} size={1} /> },
		{ label: "My Notes", path: "/my-notes", icon: <Icon path={mdiNotebook} size={1} /> },
		{ label: "Liked Notes", path: "/liked-notes", icon: <Icon path={mdiFolderHeart} size={1} /> },
		// { label: "Liked Notes", path: "/liked-notes", icon: <NoteAdd /> },
		// { label: "Search", path: "/search-notes", icon: <Search /> },
	];
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: "flex",
		},
		drawer: {
			width: "15rem",
			flexShrink: 0,
			whiteSpace: "nowrap",
			overflow: "hidden",
			position: "relative",
		},
		drawerOpen: {
			width: "20rem",
			position: "relative",
			height: "100%",
			boxShadow: "0px 4px 50px -2px #dddddd",
			background: "#f4f4f4",
			borderRight: "none",
			transition: theme.transitions.create("width", {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.enteringScreen,
			}),
			overflow: "hidden",
		},
		drawerClose: {
			position: "relative",
			height: "100%",
			background: "#f4f4f4",
			transition: theme.transitions.create("width", {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen,
			}),
			boxShadow:
				"0px 4px 50px -2px rgba(200, 230, 255, 0.3), -1px 2px 10px 0px rgba(200,200,200, 0.14), 0px 1px 5px 0px rgba(200,200,200,0.12) !important",
			borderRight: "none",
			overflowX: "hidden",
			width: "80px",
			overflow: "hidden",
		},
		drawerNotVisible: {
			width: "0rem",
		},
		list: { margin: "0.5rem 1rem", height: "100%", overflow: "hidden", paddingTop: "4rem" },
		listBottom: {
			margin: "0.5rem 1rem",
			position: "absolute",
			bottom: "10px",
			width: "90%",
		},
		menuButton: {
			borderRadius: "1rem",
			marginBottom: "0.5rem",
			"& span": { fontFamily: "'Poppins', sans-serif" },
		},
		menuButtonClose: {
			borderRadius: "100rem",
			paddingLeft: "13px",
			transition: "border-radius 0.3s",
		},
		menuButtonActive: {
			background:
				"linear-gradient(90deg, rgba(252, 124, 137, 1) 0%, rgba(255, 164, 146, 1) 50%, rgba(250, 183, 149, 1) 100%)",
			color: "white",
		},
		menuButtonInactive: {
			transition: "background-color 0.3s",
			"&:hover": { backgroundColor: "rgb(235, 235, 235)" },
		},
		menuButtonExpand: { height: "48px" },
		menuIconActive: { color: "white" },
		menuIconInactive: {},
	})
);
