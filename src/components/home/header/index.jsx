import React from "react";
import { Logo, HeaderItem, LogOut, Profile, Wrap, HeaderItems } from "./styled";
import { Outlet } from "react-router-dom";

const Header = () => {
	return (
		<>
			<Wrap>
				<Logo>Logo</Logo>
				<HeaderItems>
					<HeaderItem>Item one</HeaderItem>
					<HeaderItem>Item two</HeaderItem>
					<HeaderItem>Item three</HeaderItem>
				</HeaderItems>
				<LogOut>LOGOUT</LogOut>
				<Profile>profile</Profile>
			</Wrap>
			<Outlet />
		</>
	);
};

export default Header;
