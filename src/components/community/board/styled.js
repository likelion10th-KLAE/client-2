// index
import styled, { css } from "styled-components";

export const Title = styled.div`
	text-align: center;
	height: 40vh;
	padding-top: 15vh;
	img {
		width: 5vw;
	}
	hr {
		width: 18vw;
		height: 0.3vh;
		background-color: #439c52;
		border: 0;
	}
`;
export const TitleText = styled.div`
	font-size: 2.5vw;
	font-weight: 500;
	margin-top: 1vh;
`;
export const Text = styled.div`
	font-size: 1.8vw;
	font-weight: 500;
`;

export const PostSection = styled.div`
	margin-top: 3vw;
	margin-bottom: 7vw;
`;
export const PostItem = styled.div`
	float: left;
	margin-right: 2vw;
	margin-bottom: 10vw;
	cursor: pointer;
`;

export const PostImg = styled.div`
	img {
		width: 18vw;
		height: 38vh;
	}
`;

export const PostTitle = styled.div`
	font-size: 1.4vw;
	text-align: center;
	margin-top: 2vh;
`;
export const PostCont = styled.div`
	width: 18vw;
	font-size: 1vw;
	text-align: center;
	margin-top: 1.3vh;
`;
export const Wrap = styled.div`
	width: 80vw;
	margin: 0 auto;
`;

export const Text2 = styled.div`
	float: right;
	margin-right: 3vw;
	cursor: pointer;
`;

export const PagingSection = styled.div`
	padding-bottom: 3vh;
	display: table;
	margin-left: auto;
	margin-right: auto;
	button {
		background-color: transparent;
		border: none;
	}
`;

export const PagenumberDiv = styled.div`
	float: left;
	font-size: 0.8vw;
	margin-bottom: 5vh;
	margin-left: 0.5vw;
	margin-right: 0.5vw;
	width: 2vw;
	height: 3.5vh;
	text-align: center;
	line-height: 3.6vh;
	cursor: pointer;
	&:hover {
		opacity: 0.6;
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

export const PageArrowDiv = styled.div`
	float: left;
	cursor: pointer;
	height: 3vh;
	line-height: 3vh;
	&:hover {
		opacity: 0.6;
	}
`;
