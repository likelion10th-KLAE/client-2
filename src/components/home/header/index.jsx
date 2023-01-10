import React from "react";
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
    navigate("plant/0");
  };
  const goCommu = () => {
    navigate("plant/community");
  };
  const goRecm = () => {
    navigate("/recommend");
  };
  const goLogin = () => {
    navigate("/login");
  };
  const isLogin = Boolean(sessionStorage.getItem("userID"));
  const handleLogout = () => {
    sessionStorage.clear();
  };

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
              <LogOut onClick={() => handleLogout()}>LOGOUT</LogOut>
            ) : (
              <LogOut onClick={() => goLogin()}>LOGIN</LogOut>
            )}
          </>
          <AuthImg>
            <img src={Id} />
          </AuthImg>
        </RightComp>
      </Wrap>
      <Outlet />
    </>
  );
};

export default Header;
