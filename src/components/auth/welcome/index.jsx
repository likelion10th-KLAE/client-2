import React from "react";
import {
  WelcomeLeft,
  WelcomeRight,
  WelcomeSection,
  WelcomeSubTitle,
  WelcomeTitle,
  WelcomeRightBox,
  WelcomeCircle,
  WelcomeLink,
} from "./styled";

const Welcome = () => {
  return (
    <WelcomeSection>
      <WelcomeLeft />
      <WelcomeRight>
        <WelcomeRightBox>
          <WelcomeTitle>
            회원가입이
            <br />
            완료되었습니다.
            <br />
            지금 바로 KLAE를 이용해보세요!
          </WelcomeTitle>
          <WelcomeSubTitle>The Best Fit for My Plant, KLAE</WelcomeSubTitle>
          <WelcomeCircle />
          <WelcomeLink>메인페이지로 이동하기 →</WelcomeLink>
        </WelcomeRightBox>
      </WelcomeRight>
    </WelcomeSection>
  );
};

export default Welcome;
