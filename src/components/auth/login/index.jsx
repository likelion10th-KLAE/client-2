import React from "react";
import {
  LoginSection,
  LoginLeft,
  LeftTitle,
  LeftLogo,
  LoginRight,
  RightTitle,
  RightSubTitle,
  LoginInputDiv,
  LoginButton,
  LoginLink,
  // KakaoLogo,
  IdIcon,
  LoginInput,
  PwIcon,
} from "./styled";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/header/logo.png";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const goSignup = () => {
    navigate("/signup");
  };

  const handleLoginButton = () => {
    axios
      .post(
        "http://ec2-3-39-207-4.ap-northeast-2.compute.amazonaws.com/account/login/",
        {
          email: id,
          password: password,
        }
      )
      .then((response) => {
        if (response.status === 200) {
          sessionStorage.setItem("userID", id);
          sessionStorage.setItem("token", response.data.token.access);
          sessionStorage.setItem("username", response.data.username);
          sessionStorage.setItem("profile", response.data.profile);
          sessionStorage.setItem("userid", response.data.userid);
          sessionStorage.setItem("password", response.data.password);
          console.log(response.data.user_id);
          alert("환영합니다!");
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error.response);
        alert("존재하지 않는 아이디거나 비밀번호가 틀렸습니다.");
      });
  };

  return (
    <LoginSection>
      <LoginLeft>
        <LeftTitle>
          The Best Fit <br />
          for My Plant
        </LeftTitle>
        <LeftLogo>
          <img src={logo} />
        </LeftLogo>
      </LoginLeft>
      <LoginRight>
        <RightTitle>KLAE 에 오신 것을 환영합니다!</RightTitle>
        <RightSubTitle>지금 로그인하고 반려식물을 확인해보세요.</RightSubTitle>
        <LoginInputDiv>
          <IdIcon />
          <LoginInput
            placeholder="ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </LoginInputDiv>
        <LoginInputDiv>
          <PwIcon />
          <LoginInput
            placeholder="PW"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </LoginInputDiv>
        <LoginButton onClick={handleLoginButton}>LOGIN</LoginButton>
        <LoginLink onClick={goSignup}>
          계정이 없으신가요? 지금 회원가입하세요!
        </LoginLink>
      </LoginRight>
    </LoginSection>
  );
};

export default Login;
