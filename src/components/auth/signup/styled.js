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

export const SignRight = styled.div`
  //background-color: green;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50vw;
  height: 100vh;
  margin: -8px;
`;

export const SignRightTitle = styled.div`
  //background-color: red;
  font-size: 2.5vw;
  font-weight: 900;
  hite-space: pre-line; //공백처리
  color: rgba(36, 36, 36, 1);
  text-align: center;
  padding-bottom: 4vh;
`;

export const SignRightForm = styled.div`
  //background-color: blue;
  width: 30vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SignRigntFormTitle = styled.div`
  //background-color: pink;
  color: rgba(117, 117, 117, 1);
  font-size: 1vw;
  font-weight: 500;
  width: 30vw;
`;

export const SignRigntFormInput = styled.input`
  all: unset;
  //background-color: red;
  border-bottom: 1px solid rgba(117, 117, 117, 1);
  width: 30vw;
  height: 4vh;
  margin-bottom: 4vh;
`;

export const SignRigntFormbutton = styled.button`
  all: unset;
  background-color: rgba(109, 177, 120, 1);
  width: 18vw;
  height: 8vh;
  color: white;
  margin-bottom: 3vh;
  cursor: pointer;
  text-align: center;
  border-radius: 50px;
  box-shadow: 0 4px 4px 1px rgba(0, 0, 0, 0.25); //X Y 흐릿 크기 색
`;

export const SignLoginLink = styled.div`
  text-decoration: underline;
  font-size: 1vw;
  font-weight: 800;
  margin-bottom: 2.5vh;
  cursor: pointer;
`;
