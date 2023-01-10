import styled, { css } from "styled-components";

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
	line-height: 3.5vw;
	text-align: center;
	color: #ffffff;
	aspect-ratio: auto 1/1;
	margin-left: 1vw;
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
	padding-bottom: 8vh;
`;

export const QuestionItems = styled.div`
	margin: 3vw;
	margin-top: 13vh;
`;

export const Question = styled.div`
	font-size: 1.5vw;
	font-weight: bold;
	height: 10vh;
	line-height: 10vh;
	width: 69vw;
	margin: 0 auto;
`;

export const Answers = styled.div`
	display: flex;
	justify-content: space-between;
	flex-flow: wrap;
	width: 69vw;
	margin: 0 auto;
`;

export const Answer = styled.div`
	margin-top: 0.5vw;
	width: 34vw;
	height: 13vh;
	font-size: 1.2vw;
	border-radius: 2vw;
	line-height: 13vh;
	text-align: center;
	&:hover {
		opacity: 50%;
		cursor: pointer;
	}
	${({ flag }) =>
		flag === true
			? css`
					background-color: #6db178;
					color: #ffffff;
			  `
			: css`
					background-color: #e4e4e4;
			  `}
`;

export const But = styled.div`
	background-color: #3cb172;
	color: #ffffff;
	width: 20vw;
	height: 7vh;
	text-align: center;
	line-height: 7vh;
	margin: 0 auto;
	margin-bottom: 5vh;
	border: 0.1vw solid #3cb172;
	&:hover {
		color: #3cb172;
		background: #ffffff;
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
	padding-top: 13vh;
`;
export const Text = styled.div`
	font-size: 3vw;
`;
export const KorName = styled.div`
	font-size: 2.5vw;
	font-weight: bold;
	margin-top: 1vh;
`;
export const DownResult = styled.div`
	margin-top: 10vh;
	height: 60vh;
	display: flex;
	justify-content: center;
`;

export const ResultPlant = styled.div`
	background-color: #e4e4e4;
	margin-right: 4vw;
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

export const Kor = styled.div`
	font-size: 1.6vw;
`;

export const Button = styled.div`
	background-color: #86a174;
	margin: 0 auto;
	margin-top: 2vh;
	color: #ffffff;
	font-size: 1.2vw;
	width: 11vw;
	height: 7vh;
	line-height: 7vh;
	border-radius: 0.3vw;
	box-shadow: 0vw 0.5vw 1vw 0vw #555555;
	&: hover {
		cursor: pointer;
	}
`;

export const RigntInfo = styled.div`
	float: left;
	margin-left: 5vw;
`;

export const Atr1 = styled.div`
	display: flex;
	flex-direction: row;
`;

export const AtrTitle = styled.div`
	font-size: 1.5vw;
	padding-bottom: 1vh;
	padding-left: 0.5vw;
	border-bottom: 0.1vw solid #7e7e7e;
	width: 30vw;
`;
export const Item = styled.div`
	display: flex;
	flex-direction: row;
	margin-top: 1.5vh;
	font-size: 1.2vw;
`;
export const ItemTitle = styled.div`
	width: 7.5vw;
	text-align: center;
`;
export const ItemConts = styled.div`
	font-weight: bold;
	margin-left: 0.5vw;
	display: flex;
	flex-direction: row;
	div {
		margin-right: 1vw;
	}
	${({ atr }) =>
		atr === "difficulty"
			? css`
					color: #83f38e;
			  `
			: atr === "function"
			? css`
					color: #8388f3;
			  `
			: css`
					color: #f38383;
			  `}
`;

export const Atr2 = styled.div`
	margin-top: 10vh;
`;

export const AtrTitle2 = styled.div`
	font-size: 1.5vw;
	padding-bottom: 1vh;
	padding-left: 0.5vw;
	border-bottom: 0.1vw solid #7e7e7e;
	width: 45vw;
`;
export const Item2 = styled.div`
	display: flex;
	flex-direction: row;
	margin-top: 1.5vh;
	font-size: 1.2vw;
`;
export const ItemConts2 = styled.div`
	margin-left: 0.5vw;
	width: 35vw;
`;

export const AddButton = styled.div`
	background-color: #0e6b5e;
	opacity: 60%;
	color: white;
	text-align: center;
	margin-left: 3vw;
	width: 12vw;
	height: 4.5vh;
	line-height: 4.5vh;
	margin-top: 2vh;
	&: hover {
		cursor: pointer;
		background-color: white;
		color: #0e6b5e;
		border: 0.1vw solid #0e6b5e;
	}
`;

export const AtrLeft = styled.div``;
