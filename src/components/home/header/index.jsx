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
import axios from "axios";
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
      getProfile(); //이거 추가한거
    }
  });

  /*프로필 이미지 불러오기*/
  const [profile, setProfile] = useState(null);
  const getProfile = async () => {
    await axios({
      method: "get",
      url: `http://ec2-3-39-207-4.ap-northeast-2.compute.amazonaws.com/account/mypage/`,
      headers: { Authorization: sessionStorage.getItem("token") },
    }).then((response) => {
      // setMypage(response.data);
      setProfile(response.data.profile_image);
      console.log("get_response.data: ", response.data.profile_image);
    });
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
              <>
                <LogOut onClick={handleLogout}>LOGOUT</LogOut>
                <AuthImg onClick={goMy}>
                  {profile === null ? <img src={Id} /> : <img src={profile} />}
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
