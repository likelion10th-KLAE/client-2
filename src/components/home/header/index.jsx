import React from "react";
import {
	Logo,
	HeaderItem,
	LogOut,
	Profile,
	Wrap,
	HeaderItems,
	RightComp,
} from "./styled";
import { Outlet } from "react-router-dom";

const Header = () => {
	return (
		<>
			<Wrap>
				<Logo>Logo</Logo>
				<HeaderItems>
					<HeaderItem>홈</HeaderItem>
					<HeaderItem>일지</HeaderItem>
					<HeaderItem>게시판</HeaderItem>
					<HeaderItem>식물 추천받기</HeaderItem>
				</HeaderItems>
				<RightComp>
					<LogOut>LOGOUT</LogOut>
					<Profile>profile</Profile>
				</RightComp>
			</Wrap>
			<Outlet />
		</>
	);
};

export default Header;
