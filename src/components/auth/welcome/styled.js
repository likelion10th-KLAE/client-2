import styled from "styled-components";
import BgImg from "../../../assets/auth/Welcome/flower_done.jpg";
import CcImg from "../../../assets/auth/Welcome/flower_circle.jpg";

export const WelcomeSection = styled.div`
  background-color: E5E5E5;
  display: flex;
`;

export const WelcomeLeft = styled.div`
  background-image: url(${BgImg});
  background-repeat: no-repeat;
  background-size: cover;
  width: 32vw;
  height: 100vh;
  color: white;
  margin: -8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WelcomeRight = styled.div`
  //background-color: green;
  width: 68vw;
  margin: -8px;
`;

export const WelcomeRightBox = styled.div`
  //background-color: green;
  position: relative;
  left: 17vw;
  width: 38vw;
  height: 80vh;
  margin-top: 10vh;
  margin-left: 10vh;
`;

export const WelcomeTitle = styled.div`
  //background-color: red;
  font-size: 2.5vw;
  font-weight: 900;
  hite-space: pre-line; //공백처리
  margin-bottom: 2vh;
`;

export const WelcomeSubTitle = styled.div`
  background-color: white;
  font-size: 1vw;
  width: 14.5vw;
  opacity: 0.6;
  margin-left: 22vw;
`;

export const WelcomeCircle = styled.div`
  background-image: url(${CcImg});
  background-repeat: no-repeat;
  background-size: cover;
  width: 11.1vw;
  height: 18vh;
  margin-top: 30vh;
  margin-left: 22vw;
  margin-bottom: 2.5vh;
`;

export const WelcomeLink = styled.div`
  text-decoration: underline;
  font-size: 1vw;
  opacity: 0.6;
  font-weight: 800;
  cursor: pointer;
  margin-left: 22vw;
`;
