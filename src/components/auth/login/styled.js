import styled from "styled-components";
import Img from "../../../assets/Login/flower_login.jpg";
import KakaoImg from "../../../assets/Login/kakao-Logo.png";
import IdImg from "../../../assets/Login/ID.png";
import passwordImg from "../../../assets/Login/password.png";

export const LoginSection = styled.div`
  background-color: E5E5E5;
  display: flex;
`;

export const LoginLeft = styled.div`
  background-image: url(${Img});
  width: 470px;
  height: 900px;
  color: white;
`;

export const LeftTitle = styled.div`
  // background-color: black;
  font-size: 22pt;
  font-weight: 800;
  color: white;
  width: 180px;
  height: 40px;
  margin: 0 auto;
  white-space: pre-line;
  position: relative;
  top: 600px;
`;

export const LeftLogo = styled.div`
  width: 100px;
  hegith: 100px;
  margin: 0 auto;
  position: relative;
  top: 150px;
  color: white;
  font-size: 20pt;
`;

export const LoginRight = styled.div`
  //background-color: green;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const RightTitle = styled.div`
  //background-color: red;
  color: rgba(33, 33, 33, 1);
  font-size: 15pt;
  width: 290px;
  hegiht: 45px;
  padding-bottom: 20px;
  text-align: center;
`;

export const RightSubTitle = styled.div`
  //background-color: blue;
  color: rgba(66, 66, 66, 1);
  font-size: 10pt;
  padding-bottom: 25px;
  text-align: center;
`;

export const LoginInputDiv = styled.div`
  width: 420px;
  height: 70px;
  border: 1px solid rgba(117, 117, 117, 1);
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

export const LoginInput = styled.input`
  all: unset;
  //background-color: yellow;
  width: 300px;
  height: 33px;
  margin-left: 10px;
`;

export const IdIcon = styled.div`
  background-image: url(${IdImg});
  width: 18px;
  height: 20px;
  margin-left: 20px;
`;

export const PwIcon = styled.div`
  background-image: url(${passwordImg});
  width: 13px;
  height: 18px;
  margin-left: 20px;
`;

export const LoginButton = styled.button`
  background-color: rgba(36, 62, 51, 1);
  width: 420px;
  height: 70px;
  color: white;
  margin-bottom: 20px;
  cursor: pointer;
`;

export const LoginLink = styled.div`
  text-decoration: underline;
  font-size: 8pt;
  margin-bottom: 20px;
  cursor: pointer;
`;

export const KakaoLogo = styled.div`
  background-image: url(${KakaoImg});
  width: 40px;
  height: 40px;
  cursor: pointer;
`;
