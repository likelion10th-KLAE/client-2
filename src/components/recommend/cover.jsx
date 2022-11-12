import React from "react";
import {
	Plant,
	Title,
	Start,
	StartText,
	StartBut,
	CoverWrap,
	StartWrap,
	StartBox,
} from "./styled";
import plant from "../../assets/recommend/my_plant.png";
import { useNavigate } from "react-router-dom";

const Cover = () => {
	const navigate = useNavigate();
	const goTest = () => {
		navigate("/recommend/test");
	};
	return (
		<CoverWrap>
			<Plant>
				<img src={plant} />
			</Plant>
			<Start>
				<Title>식물 추천 받기</Title>
				<StartWrap onClick={() => goTest()}>
					{/* <StartWrap> */}
					<StartText>시작하기</StartText>
					<StartBox>
						<StartBut>→</StartBut>
					</StartBox>
				</StartWrap>
			</Start>
		</CoverWrap>
	);
};

export default Cover;
