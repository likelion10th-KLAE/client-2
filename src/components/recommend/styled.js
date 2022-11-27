import styled from "styled-components";

// cover
export const Plant = styled.div`
	background-color: #e4e4e4;
	border-radius: 10vw;
	width: 20vw;
	aspect-ratio: auto 1/1;
	margin-right: 4vw;
	img {
		width: 16vw;
		margin-top: 2vh;
		margin-left: 2vw;
}
	}
`;

export const Title = styled.div`
	// background-color: red;
	font-size: 3vw;
	font-weight: bold;
	margin-bottom: 2vh;
	opacity: 40%;
`;
export const Start = styled.div`
	// background-color: blue;
	margin: auto 0;
	// margin-left: 3vw;
`;

export const StartText = styled.div`
	// background-color: orange;
	font-size: 2vw;
	font-weight: bold;
	float: left;
	display: flex;
	// height: 6vh;
	// line-height: 6vh;
	padding-top: 1vh;
`;

export const StartBut = styled.div`
	background-color: #3cb172;
	font-size: 2vw;
	width: 3.5vw;
	text-align: center;
	color: #ffffff;
	aspect-ratio: auto 1/1;
	margin-left: 1vw;
	// padding-top: 2vh;
`;

export const StartWrap = styled.div`
	float: left;
	display: flex;
	cursor: pointer;
`;

export const CoverWrap = styled.div`
	// background-color: yellow;
	float: left;
	display: flex;
	position: absolute;
	left: 40%;
	top: 50%;
	transform: translate(-50%, -50%);
`;

export const StartBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

// index
export const Wrap = styled.div`
	// background-color: yellow;
`;

export const QuestionItems = styled.div`
	margin: 3vw;
	width: 91vw;
	margin-top: 13vh;
`;

export const Question = styled.div`
	// background-color: orange;
	font-size: 2vw;
	font-weight: bold;
	height: 10vh;
	line-height: 10vh;
`;

export const Answers = styled.div`
	// background-color: red;
	display: flex;
	justify-content: space-between;
	flex-flow: wrap;
	width: 91vw;
`;

export const Answer = styled.div`
	margin-top: 0.5vw;
	width: 45vw;
	height: 15vh;
	font-size: 1.2vw;
	border-radius: 2vw;
	line-height: 15vh;
	text-align: center;
	&:hover {
		opacity: 50%;
		cursor: pointer;
	}
`;

export const But = styled.div`
	background-color: #3cb172;
	color: #ffffff;
	width: 15vw;
	height: 7vh;
	text-align: center;
	line-height: 7vh;
	margin-top: 14vh;
	margin-bottom: 8vh;
	float: right;
	margin-right: 5vw;
	&:hover {
		opacity: 80%;
		cursor: pointer;
	}
`;

// result

export const UpResult = styled.div`
	background-color: #e4e4e4;
	opacity: 80%;
	margin-left: -7px;
	text-align: center;
	height: 31vh;
	// line-height: 6vh;
	padding-top: 15vh;
`;
export const Text = styled.div`
	font-size: 3vw;
`;
export const KorName = styled.div`
	font-size: 2.5vw;
	font-weight: bold;
`;
export const EngName = styled.div`
	font-size: 2.5vw;
`;
export const DownResult = styled.div`
	margin-top: 8vh;
	height: 60vh;
`;
export const LikeInfo = styled.div`
	float: left;
	// background-color: red;
	width: 34vw;
	padding-top: 10vh;
`;
export const LikeText = styled.div`
	font-size: 1.7vw;
	border-bottom: 1px solid black;
	margin-left: 5vw;
	margin-right: 2vw;
	padding-bottom: 1vh;
	padding-left: 1vw;
`;
export const Sun = styled.div`
	margin-left: 7vw;
	margin-top: 2vh;
`;
export const Water = styled.div`
	margin-left: 7vw;
	margin-top: 2vh;
`;
export const DetailText = styled.div`
	// background-color: blue;
	width: 2vw;
	float: left;
	line-height: 4vh;
	text-align: center;
`;
export const Temp = styled.div`
	margin-left: 7vw;
	margin-top: 2vh;
`;

export const Infor = styled.div`
	// background-color: blue;
	float: left;
	width: 34vw;
	padding-top: 10vh;
`;

export const InforText = styled.div`
	font-size: 1.7vw;
	border-bottom: 1px solid black;
	margin-left: 2vw;
	margin-right: 5vw;
	padding-bottom: 1vh;
	padding-left: 1vw;
`;
export const InforCon = styled.div`
	margin-left: 5vw;
	margin-right: 8vw;
	margin-top: 2vh;
`;

export const ResultPlant = styled.div`
	background-color: #e4e4e4;
	margin-right: 5vw;
	border-radius: 10vw;
	width: 20vw;
	aspect-ratio: auto 1/1;
	img {
		width: 16vw;
		margin-top: 2vh;
	}
`;

export const PlantItem = styled.div`
	text-align: center;
	float: left;
	margin-left: 5vw;
`;

export const PlantName = styled.div`
	// background-color: red;
	margin-top: 3.5vh;
	width: 20vw;
`;

export const Eng = styled.div`
	font-size: 1.3vw;
`;
export const Kor = styled.div`
	font-size: 1.6vw;
`;

export const Icon = styled.div`
	margin-left: 6vw;
	img {
		width: 2vw;
		margin-right: 1vw;
	}
`;

export const Volume = styled.div`
	margin-left: 6vw;
	hr {
		width: 9.3vw;
		height: 1vh;
		float: left;
		margin-left: 0.5vw;
		margin-right: 0.5vw;
		background-color: #d9d9d9;
		border: 0;
		margin-top: 1.3vh;
	}
`;
export const VolText = styled.div`
	// background-color: blue;
	width: 2vw;
	float: left;
	line-height: 4vh;
	text-align: center;
`;

export const Circle = styled.div`
	background-color: #828282;
	width; 4vw;
	// height: 2vh;
	aspect-ratio: auto 1/1;
	border-radius: 50vw;
	position: absolute;
	font-size: 0.9vw;
	color: rgba(0, 0, 255, 0);
	left: 20vw;
	top: 92.1vh;
`;
