import React from "react";
import { Logo, HeaderItem, LogOut, Profile } from "./styled";

const Header = () => {
	return (
		<>
			<Logo>Logo</Logo>
			<HeaderItem>Item one</HeaderItem>
			<HeaderItem>Item two</HeaderItem>
			<HeaderItem>Item three</HeaderItem>
			<LogOut>LOGOUT</LogOut>
			<Profile>profile</Profile>
		</>
	);
};

export default Header;
