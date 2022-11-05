import React from "react";
import {
  LoginSection,
  LoginLeft,
  LeftTitle,
  LeftLogo,
  LoginRight,
  RightTitle,
  RightSubTitle,
  LoginInput,
  LoginButton,
  LoginLink,
} from "./styled";

const Login = () => {
  return (
    <LoginSection>
      <LoginLeft>
        <LeftTitle>
          The Best Fit <br />
          for My Plant
        </LeftTitle>
        <LeftLogo>Logo</LeftLogo>
      </LoginLeft>
      <LoginRight>
        <RightTitle>KLAE 에 오신 것을 환영합니다!</RightTitle>
        <RightSubTitle>지금 로그인하고 반려식물을 확인해보세요.</RightSubTitle>
        <LoginInput />
        <LoginInput />
        <LoginButton>LOGIN</LoginButton>
        <LoginLink>계정이 없으신가요? 지금 회원가입하세요!</LoginLink>
      </LoginRight>
    </LoginSection>
  );
};

export default Login;
