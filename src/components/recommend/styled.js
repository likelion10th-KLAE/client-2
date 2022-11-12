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
	left: 50%;
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
	background-color: #e4e4e4;
	margin-top: 0.5vw;
	width: 45vw;
	height: 15vh;
	font-size: 1.2vw;
	border-radius: 2vw;
	line-height: 15vh;
	text-align: center;
`;
