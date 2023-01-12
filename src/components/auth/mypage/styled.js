import styled from "styled-components";
//import LeafImg from "../../../assets/auth/Mypage/leaf_image.png";
import PushImg from "../../../assets/auth/Mypage/push_image.png";
import LeafBg from "../../../assets/auth/Mypage/leaf_image_bg.png";
import Xp from "../../../assets/add_plant/사진 추가.png";

export const MypageSection = styled.div`
	background: url(${LeafBg});
	background-repeat: no-repeat;
	background-size: cover;
	width: 100vw;
	height: 100vh;
	margin: -8px;
`;

export const Hide = styled.div`
	display: none;
`;

export const MypageLeft = styled.div`
<<<<<<< HEAD
	// background-color: red;
	width: 50vw;
	height: 90vh;
	margin: -8px;
	float: left;
=======
  //background-color: red;
  width: 50vw;
  height: 90vh;
  margin: -8px;
  float: left;
>>>>>>> 4602afd54089d9439fafa9ec80a94e52c9723575
`;

export const MypageLeftImg = styled.div`
	//background-color: blue;
	border-radius: 50%;
	width: 20vw;
	height: 20vw;
	position: absolute;
	margin: 0 auto;
	top: 30vh;
	left: 20vh;
`;

/* X 표시 */
export const Xback = styled.div`
	position: absolute;
	left: 30vw;
	top: 30vh;
	width: 2vw;
	height: 2vw;
	line-height: 2vw;
	border-radius: 50%;
	background-color: #e8e8e8;
	//border: 0.1vw solid black;
	font-size: 1vw;
	color: black;
	text-align: center;
	cursor: pointer;
`;

export const MypageRight = styled.div`
	// background-color: pink;
	width: 50vw;
	height: 100vh;
	margin: -8px;
	//position: relative;
	float: right;
`;

export const MypageForm = styled.div`
	//background-color: brown;
	width: 40vw;
	height: 60vh;
	display: flex;
	flex-direction: column;
	margin-top: 20vh;
`;

export const MypageFormTitle = styled.div`
	//background-color: green;
	color: black;
	font-size: 1.3vw;
	font-weight: 500;
	width: 10vw;
`;

export const FormItem = styled.div`
	margin-bottom: 3vh;
`;

export const MypageFormInput = styled.input`
	all: unset;
	border-bottom: 1px solid rgba(189, 189, 189, 1);
	width: 30vw;
	height: 4vh;
	margin-bottom: 3vh;
`;

export const MypageFormbutton = styled.button`
	all: unset;
	background-color: rgba(60, 177, 114, 1);
	width: 13vw;
	height: 5vh;
	color: white;
	cursor: pointer;
	text-align: center;
	margin-left: 26vw;
`;

export const MypageFooter = styled.div`
	//background-color: blue;
	width: 100vw;
	height: 10vh;
	position: absolute;
	top: 90vh;
	margin-left: -8px;
`;

export const MypageFooterText1 = styled.div`
	//background-color: white;
	font-size: 0.8vw;
	height: 3vh;
	margin: 0 auto;
	color: rgba(44, 44, 44, 1);
	text-align: center;
	padding-top: 10vh;
`;
export const MypageFooterText2 = styled.div`
	//background-color: white;
	font-size: 0.8vw;
	height: 3vh;
	margin: 0 auto;
	color: rgba(44, 44, 44, 1);
	text-align: center;
`;

export const MypageFooterSpan = styled.span`
	color: rgba(154, 199, 91, 1);
`;
