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
import { useNavigate } from "react-router-dom";

const Header = () => {
	const navigate = useNavigate();
	const goHome = () => {
		navigate("/");
	};
	const goDiary = () => {
		navigate("plant/0");
	};
	const goCommu = () => {
		navigate("plant/community");
	};
	const goRecm = () => {
		navigate("/recommend");
	};
	return (
		<>
			<Wrap>
				<Logo>Logo</Logo>
				<HeaderItems>
					<HeaderItem onClick={() => goHome()}>홈</HeaderItem>
					<HeaderItem onClick={() => goDiary()}>일지</HeaderItem>
					<HeaderItem onClick={() => goCommu()}>게시판</HeaderItem>
					<HeaderItem onClick={() => goRecm()}>식물 추천받기</HeaderItem>
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
