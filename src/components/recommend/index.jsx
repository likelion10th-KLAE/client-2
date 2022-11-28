import React, { useState, useEffect } from "react";
import { Question, Answer, QuestionItems, Answers, Wrap, But } from "./styled";
import { useNavigate } from "react-router-dom";

const questions = [
	"Q1. 어디에서 키울 건가요? (생육 장소)",
	"Q2. 선호하는 식물 종류",
	"Q3. 고려해야 할 특수한 환경이 있나요",
	"Q4. 식물에 원하는 효능이나 기능이 있나요?",
];

const answers = [
	[
		"A1. 마당이나 탁 트인 공간에서 키우고 싶어요",
		"A2. 텃밭이나 담장에서 키우고 싶어요",
		"A3. 실내에서 소규모로 키우고 싶어요 (베란다, 건물 內)",
		"A4. 방 안에서 소규모로 키우고 싶어요",
	],
	[
		"A1. 소규모 텃밭용 야채",
		"A2. 관상용 꽃",
		"A3. 열매",
		"A4. 분재 및 플랜테리어 용",
	],
	[
		"A1. 햇볕이 거의 들어오지 않는 환경에 있어요",
		"A2. 외출을 자주 해서 급수 주기가 길었으면 좋겠어요",
	],
	["A1. 공기 정화", "A2. 해충박멸", "A3. 탈취", "A4. 아로마"],
];

const Recommend = () => {
	const [select, setSelect] = useState([1, 2, 0, 3]);
	const [check, setCheck] = useState(false);

	const navigate = useNavigate();
	const goResult = () => {
		navigate("/recommend/result");
	};

	const onSelect = (qidx, aidx) => {
		const temp = select;
		temp[qidx] = aidx;
		setSelect(temp);
		console.log(select);
	};
	// useEffect(onSelect, [select]);

	useEffect(() => {
		if (
			select[0] !== false &&
			select[1] !== false &&
			select[2] !== false &&
			select[3] !== false
		) {
			setCheck(true);
		}
	}, [select]);

	return (
		<>
			<Wrap>
				{questions.map((que, qidx) => (
					<QuestionItems key={qidx}>
						<Question>{que}</Question>
						<Answers>
							{answers[qidx].map((ans, aidx) => (
								<Answer
									style={{
										backgroundColor:
											select[qidx] === aidx ? "#6db178" : "#e4e4e4",
										color: select[qidx] === aidx ? "#FFFFFF" : "",
									}}
									onClick={() => onSelect(qidx, aidx)}
									key={aidx}
								>
									{ans}
								</Answer>
							))}
						</Answers>
					</QuestionItems>
				))}
				{check ? console.log("ok") : console.log("no")}
			</Wrap>
			<But onClick={() => goResult()}>추천 결과 보기</But>
		</>
	);
};

export default Recommend;
