import styled from "styled-components";
import Img from "../../../assets/auth/flower_login.jpg";
// import KakaoImg from "../../../assets/auth/kakao-Logo.png";
import IdImg from "../../../assets/auth/ID.png";
import passwordImg from "../../../assets/auth/password.png";

export const LoginSection = styled.div`
	background-color: E5E5E5;
	display: flex;
`;

export const LoginLeft = styled.div`
	background-image: url(${Img});
	background-repeat: no-repeat;
	background-size: cover;
	width: 40vw;
	height: 100vh;
	color: white;
	margin: -8px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const LeftTitle = styled.div`
	//background-color: black;
	font-size: 2.5vw;
	font-weight: 800;
	color: white;
	opacity: 0.7;
	//width: 17vw;
	//height: 4vh;
	white-space: pre-line; //공백처리
	position: relative;
	top: 70vh;
`;

export const LeftLogo = styled.div`
	//background-color: black;
	position: relative;
	top: 10vh;
	color: white;
	font-size: 2.5vw;
	text-align: center;
`;

export const LoginRight = styled.div`
	//background-color: green;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100vw;
	margin: -8px;
`;

export const RightTitle = styled.div`
	//background-color: red;
	color: rgba(33, 33, 33, 1);
	font-size: 2vw;
	width: 29vw;
	hegiht: 4.5vh;
	padding-bottom: 2.5vh;
	text-align: center;
`;

export const RightSubTitle = styled.div`
	//background-color: blue;
	color: rgba(66, 66, 66, 1);
	font-size: 1.3vw;
	padding-bottom: 2.5vh;
	text-align: center;
`;

export const LoginInputDiv = styled.div`
	//background-color: yellow;
	width: 38vw;
	height: 9vh;
	border: 1px solid rgba(117, 117, 117, 1);
	margin-bottom: 2.5vh;
	display: flex;
	align-items: center;
`;

export const LoginInput = styled.input`
	all: unset;
	//background-color: yellow;
	width: 28vw;
	height: 4vh;
	margin-left: 1.5vw;
`;

export const IdIcon = styled.div`
	//background-color: yellow;
	background-image: url(${IdImg});
	background-repeat: no-repeat;
	background-position: center;
	width: 1.5vw;
	height: 2.5vh;
	margin-left: 1.5vw;
`;

export const PwIcon = styled.div`
	//background-color: yellow;
	background-image: url(${passwordImg});
	background-repeat: no-repeat;
	background-position: center;
	width: 1.5vw;
	height: 2.5vh;
	margin-left: 1.5vw;
`;

export const LoginButton = styled.button`
	background-color: rgba(36, 62, 51, 1);
	width: 38vw;
	height: 9vh;
	color: white;
	margin-bottom: 2.5vh;
	cursor: pointer;
`;

export const LoginLink = styled.div`
	text-decoration: underline;
	font-size: 1vw;
	margin-bottom: 2.5vh;
	cursor: pointer;
`;

// export const KakaoLogo = styled.div`
//   //background-color: blue;
//   background-image: url(${KakaoImg});
//   background-repeat: no-repeat;
//   background-position: center;
//   width: 4vw;
//   height: 6vh;
//   cursor: pointer;
// `;
