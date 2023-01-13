import React, { useState, useEffect } from "react";
import {
	Logo,
	HeaderItem,
	LogOut,
	Profile,
	Wrap,
	HeaderItems,
	RightComp,
	AuthImg,
} from "./styled";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Id from "../../../assets/header/avatar.png";
import logo from "../../../assets/header/logo.png";

const Header = () => {
	const navigate = useNavigate();
	const goHome = () => {
		navigate("/");
	};
	const goDiary = () => {
		// if (sessionStorage.getItem("token")) {
		navigate("plant/0");
		// } else {
		// 	alert("로그인을 해주세요");
		// 	navigate("/login");
		// }
	};
	const goCommu = () => {
		// if (sessionStorage.getItem("token")) {
		navigate("plant/community");
		// } else {
		// 	alert("로그인을 해주세요");
		// 	navigate("/login");
		// }
	};
	const goRecm = () => {
		navigate("/recommend");
	};
	const goLogin = () => {
		navigate("/login");
	};
	const goMy = () => {
		navigate("/mypage");
	};
	const goSignup = () => {
		navigate("/signup");
	};

	const [isLogin, setIsLogin] = useState(false);
	const handleLogout = () => {
		sessionStorage.clear();
		setIsLogin(false);
		navigate("/");
	};

	useEffect(() => {
		if (sessionStorage.getItem("token")) {
			setIsLogin(true);
		}
	});

	return (
		<>
			<Wrap>
				<Logo>
					<img src={logo} />
				</Logo>
				<HeaderItems>
					<HeaderItem onClick={() => goHome()}>홈</HeaderItem>
					<HeaderItem onClick={() => goDiary()}>일지</HeaderItem>
					<HeaderItem onClick={() => goCommu()}>게시판</HeaderItem>
					<HeaderItem onClick={() => goRecm()}>식물 추천받기</HeaderItem>
				</HeaderItems>
				<RightComp>
					<>
						{isLogin ? (
							<>
								<LogOut onClick={handleLogout}>LOGOUT</LogOut>
								<AuthImg onClick={goMy}>
									{sessionStorage.getItem("profile") == "null" ? (
										<img src={Id} />
									) : (
										<img src={sessionStorage.getItem("profile")} />
									)}
								</AuthImg>
							</>
						) : (
							<>
								<LogOut onClick={goLogin}>LOGIN</LogOut>
								<LogOut onClick={goSignup}>SIGNUP</LogOut>
							</>
						)}
					</>
				</RightComp>
			</Wrap>
			<Outlet />
		</>
	);
};

export default Header;
