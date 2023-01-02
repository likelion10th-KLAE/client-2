import React from "react";
import {
  MypageFooter,
  MypageFooterSpan,
  MypageFooterText1,
  MypageFooterText2,
  MypageForm,
  MypageFormbutton,
  MypageFormInput,
  MypageFormTitle,
  MypageLeft,
  MypageLeftImg,
  MypageRight,
  MypageRightImg,
  MypageSection,
} from "./styled";

const Mypage = () => {
  return (
    <MypageSection>
      <MypageLeft>
        <MypageLeftImg />
      </MypageLeft>
      <MypageRight>
        <MypageRightImg />
        <MypageForm>
          <MypageFormTitle>사용자 이름</MypageFormTitle>
          <MypageFormInput />
          <MypageFormTitle>이메일</MypageFormTitle>
          <MypageFormInput />
          <MypageFormTitle>비밀번호</MypageFormTitle>
          <MypageFormInput />
          <MypageFormTitle>비밀번호 확인</MypageFormTitle>
          <MypageFormInput />
          <MypageFormbutton>저장하기</MypageFormbutton>
        </MypageForm>
      </MypageRight>
      <MypageFooter>
        <MypageFooterText1>(c)2022 All right reserved.</MypageFooterText1>
        <MypageFooterText2>
          Questions? Email us at
          <MypageFooterSpan> office@product.com</MypageFooterSpan>
        </MypageFooterText2>
      </MypageFooter>
    </MypageSection>
  );
};

export default Mypage;
