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
import { useNavigate } from "react-router-dom";

const Initial = () => {
  const userID = sessionStorage.getItem("userID"); //없으면 null
  const navigate = useNavigate();
  const goSignup = () => {
    navigate("/signup");
  };
  const goLogin = () => {
    navigate("/login");
  };
  const goRecm = () => {
    navigate("/recommend");
  };
  const goAdd = () => {
    navigate("plant/addplant/createplant");
  };

  return (
    <>
      <InitialTop>
        <InitialTopTitle>반려식물 일지를 기록하세요</InitialTopTitle>
        <InitialTopSubTitle>식물과 함께하는 삶</InitialTopSubTitle>
        <InitialTopBanner />
        <ButtonContainer>
          <>
            {Boolean(userID) ? (
              <>
                <InitialTopButton
                  onClick={() => goRecm()}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  식물추천
                </InitialTopButton>

                <InitialTopButton
                  onClick={() => goAdd()}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  식물등록
                </InitialTopButton>
              </>
            ) : (
              <>
                <InitialTopButton
                  onClick={() => goSignup()}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  회원가입
                </InitialTopButton>
                <InitialTopButton
                  onClick={() => goLogin()}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  로그인
                </InitialTopButton>
              </>
            )}
          </>
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
    </>
  );
};

export default Initial;
