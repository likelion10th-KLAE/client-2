import styled from "styled-components";
import Img from "../../../assets/auth/SignUp/flower_signup.jpg";

export const SignUpSection = styled.div`
  background-color: E5E5E5;
  display: flex;
`;

export const SignUpLeft = styled.div`
  background-image: url(${Img});
  background-repeat: no-repeat;
  background-size: cover;
  width: 50vw;
  height: 100vh;
  color: white;
  margin: -8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SignLeftTitle = styled.div`
  //background-color: black;
  font-size: 2vw;
  font-weight: 800;
  color: white;
  white-space: pre-line; //공백처리
  position: relative;
  top: 66vh;
  text-align: center;
`;

export const SignLeftSubTitle = styled.div`
  //background-color: black;
  font-size: 1.5vw;
  font-weight: 300;
  color: white;
  white-space: pre-line; //공백처리
  position: relative;
  top: 70vh;
  text-align: center;
`;
