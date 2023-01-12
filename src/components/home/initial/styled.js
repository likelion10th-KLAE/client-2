import styled from "styled-components";
import BannerImg from "../../../assets/initial/initial_banner.png";
import PersonIcn from "../../../assets/initial/person.png";
import ListIcn from "../../../assets/initial/list.png";
import StarIcn from "../../../assets/initial/star.png";

export const InitialSection = styled.div`
	// width: 100vw;
	// height: 100vh;
`;

export const InitialTop = styled.div`
	background-color: rgba(228, 228, 228, 1);
	width: 100vw;
	height: 81vh;
	margin: -0.6vw;
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
`;

export const InitialTopBanner = styled.div`
	background-image: url(${BannerImg});
	background-repeat: no-repeat;
	background-size: cover;
	width: 92vw;
	height: 38vh;
	position: absolute;
	bottom: 0px;
`;

export const InitialTopTitle = styled.div`
	font-size: 50px;
	color: rgba(87, 103, 91, 1);
	margin-top: 8vh; //50px;
`;

export const InitialTopSubTitle = styled.div`
	color: white;
	font-size: 32px;
	margin-top: 4vh; //30px;
`;

export const ButtonContainer = styled.div`
	//background-color: pink;
	width: 17vw; //210px;
	display: flex;
	justify-content: space-between;
`;

export const InitialTopButton = styled.button`
	all: unset;
	background-color: rgba(134, 161, 116, 1);
	color: white;
	font-size: 14px;
	cursor: pointer;
	width: 8vw; //100px;
	height: 7vh; //54px;
	border-radius: 4px;
	text-align: center;
	margin-top: 5.2vh; //40px;
`;

export const InitialBottom = styled.div`
	//background-color: blue;
	width: 100vw;
	height: 90vh; //786px;
	margin: -8px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const InitialBottomContainer = styled.div`
	// background-color: black;
	width: 85vw;
	height: 50vh;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const InitialItemBox = styled.div`
	// background-color: pink;
	width: 25vw;
	height: 40vh; //297px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;

export const InitialItemTitle = styled.div`
	font-size: 24px;
	color: rgba(44, 44, 44, 1);
`;

export const InitialItemText = styled.div`
	font-size: 16px;
	color: rgba(44, 44, 44, 1);
	text-align: center;
`;

export const InitialItemCircle = styled.div`
	border-radius: 70px;
	border: 1px solid rgba(148, 195, 147, 1);
	aspect-ratio: auto 1/1;
	width: 108px; // 10vw;
	height: 108px; //18vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const PersonIcon = styled.div`
	background-image: url(${PersonIcn});
	background-repeat: no-repeat;
	background-size: cover;
	width: 32px; //3vw;
	height: 32px; //5vh;
`;

export const ListIcon = styled.div`
	background-image: url(${ListIcn});
	background-repeat: no-repeat;
	background-size: cover;
	width: 32px; //3vw;
	height: 32px; //5vh;
`;
export const StarIcon = styled.div`
	background-image: url(${StarIcn});
	background-repeat: no-repeat;
	background-size: cover;
	width: 32px; //3vw;
	height: 32px; //5vh;
`;
