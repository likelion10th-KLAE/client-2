import React from "react";
import {
  PersonIcon,
  ButtonContainer,
  InitialBottom,
  InitialBottomContainer,
  InitialItemCircle,
  InitialItemBox,
  InitialSection,
  InitialTop,
  InitialTopBanner,
  InitialTopButton,
  InitialTopSubTitle,
  InitialTopTitle,
  InitialItemTitle,
  InitialItemText,
  ListIcon,
  StarIcon,
} from "./styled";
import { Link } from "react-router-dom";

const Initial = () => {
  return (
    <InitialSection>
      <InitialTop>
        <InitialTopTitle>반려식물 일지를 기록하세요</InitialTopTitle>
        <InitialTopSubTitle>식물과 함께하는 삶</InitialTopSubTitle>
        <InitialTopBanner />
        <ButtonContainer>
          <Link
            to="/signup"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <InitialTopButton>회원가입</InitialTopButton>
          </Link>
          <Link
            to="/login"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <InitialTopButton>로그인</InitialTopButton>
          </Link>
        </ButtonContainer>
      </InitialTop>
      <InitialBottom>
        <InitialBottomContainer>
          <InitialItemBox>
            <InitialItemCircle>
              <PersonIcon />
            </InitialItemCircle>
            <InitialItemTitle>사람들과 소통하세요.</InitialItemTitle>
            <InitialItemText>
              Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
              ullamco cillum dolor. Voluptate exercitation incididunt aliquip
              deserunt reprehenderit elit laborum.Voluptate exercitation
              incididunt aliquip
            </InitialItemText>
          </InitialItemBox>
          <InitialItemBox>
            <InitialItemCircle>
              <ListIcon />
            </InitialItemCircle>
            <InitialItemTitle>식물일지를 작성하세요.</InitialItemTitle>
            <InitialItemText>
              Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
              ullamco cillum dolor. Voluptate exercitation incididunt aliquip
              deserunt reprehenderit elit laborum.Voluptate exercitation
              incididunt aliquip
            </InitialItemText>
          </InitialItemBox>
          <InitialItemBox>
            <InitialItemCircle>
              <StarIcon />
            </InitialItemCircle>
            <InitialItemTitle>식물을 추천받으세요.</InitialItemTitle>
            <InitialItemText>
              Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
              ullamco cillum dolor. Voluptate exercitation incididunt aliquip
              deserunt reprehenderit elit laborum.Voluptate exercitation
              incididunt aliquip
            </InitialItemText>
          </InitialItemBox>
        </InitialBottomContainer>
      </InitialBottom>
    </InitialSection>
  );
};

export default Initial;
