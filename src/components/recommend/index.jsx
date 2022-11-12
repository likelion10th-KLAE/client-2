import React, { useState } from "react";
import { Question, Answer, QuestionItems, Answers, Wrap } from "./styled";

const questions = [
	{
		que: "Q1. 어디에서 키울 건가요? (생육 장소)",
		asw: [
			"A1. 마당이나 탁 트인 공간에서 키우고 싶어요",
			"A2. 텃밭이나 담장에서 키우고 싶어요",
			"A3. 실내에서 소규모로 키우고 싶어요 (베란다, 건물 內)",
			"A4. 방 안에서 소규모로 키우고 싶어요",
		],
	},
	{
		que: "Q2. 선호하는 식물 종류",
		asw: [
			"A1. 소규모 텃밭용 야채",
			"A2. 관상용 꽃",
			"A3. 열매",
			"A4. 분재 및 플랜테리어 용",
		],
	},
	{
		que: "Q3. 고려해야 할 특수한 환경이 있나요",
		asw: [
			"A1. 햇볕이 거의 들어오지 않는 환경에 있어요",
			"A2. 외출을 자주 해서 급수 주기가 길었으면 좋겠어요",
		],
	},
	{
		que: "Q4. 식물에 원하는 효능이나 기능이 있나요?",
		asw: ["A1. 공기 정화", "A2. 해충박멸", "A3. 탈취", "A4. 아로마"],
	},
];

// const [select, setSelect] = useState([
// 	{ id: 1, num: 0 },
// 	{ id: 2, num: 0 },
// 	{ id: 3, num: 0 },
// 	{ id: 4, num: 0 },
// ]);

const onselect = (queNum, aswNum) => {
	console.log(queNum);
};

const Recommend = () => {
	return (
		<>
			<Wrap>
				{questions.map((q, idx) => (
					<QuestionItems key={idx}>
						<Question>{q.que}</Question>
						<Answers>
							{q.asw.map((asw, idx) => (
								<Answer
									key={idx}
									onClick={() => {
										onselect(idx, asw);
									}}
								>
									{asw}
								</Answer>
							))}
						</Answers>
					</QuestionItems>
				))}
			</Wrap>
		</>
	);
};

export default Recommend;
