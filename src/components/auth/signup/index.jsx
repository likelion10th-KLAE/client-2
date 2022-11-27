import React from "react";
import {
  SignUpLeft,
  SignUpSection,
  SignLeftTitle,
  SignLeftSubTitle,
  SignRight,
  SignRightTitle,
  SignRightForm,
  SignRigntFormTitle,
  SignRigntFormInput,
  SignRigntFormbutton,
  SignLoginLink,
} from "./styled";

const Signup = () => {
  return (
    <SignUpSection>
      <SignUpLeft>
        <SignLeftTitle>
          The Best Fit for Your Plant.
          <br />
          Open Community Platform
          <br /> for Plant Butlers.
        </SignLeftTitle>
        <SignLeftSubTitle>
          식물 초심자를 위한 식물 추천부터 일지 작성 및 공유까지.
          <br />
          식물 집사들을 위한 서비스, KLAE.
        </SignLeftSubTitle>
      </SignUpLeft>
      <SignRight>
        <SignRightTitle>
          지금 KLAE 에 가입하고 <br />
          맞춤형 식물을 추천받으세요!
        </SignRightTitle>
        <SignRightForm>
          <SignRigntFormTitle>Username</SignRigntFormTitle>
          <SignRigntFormInput />
          <SignRigntFormTitle>Email</SignRigntFormTitle>
          <SignRigntFormInput />
          <SignRigntFormTitle>Password</SignRigntFormTitle>
          <SignRigntFormInput type="password" />
          <SignRigntFormbutton>SIGN UP</SignRigntFormbutton>
        </SignRightForm>
        <SignLoginLink>
          계정이 있으신가요? 지금 바로 로그인 하세요.
        </SignLoginLink>
      </SignRight>
    </SignUpSection>
  );
};

export default Signup;
