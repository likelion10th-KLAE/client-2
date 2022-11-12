import React from "react";
import {
  SignUpLeft,
  SignUpSection,
  SignLeftTitle,
  SignLeftSubTitle,
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
    </SignUpSection>
  );
};

export default Signup;
