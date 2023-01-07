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
	["A. 마당이나 텃밭에서 키우고 싶어요", "B. 실내에서 소규모로 키우고 싶어요 "],
	[
		"A. 소규모 텃밭용 야채",
		"B. 관상용 꽃",
		"C. 열매",
		"D. 분재 및 플랜테리어 용",
	],
	[
		"A. 집이 어두워요 (햇볕이 잘 들지 않아요)",
		"B. 반려동물이 있어요 (독성식물 피하기)",
		"C. 외출을 자주 해서 급수 주기가 길었으면 좋겠어요",
		"D. 없어요",
	],
	["A. 공기정화/가습효과", "B. 탈취/아로마"],
];

const Recommend = () => {
	const navigate = useNavigate();
	const goResult = () => {
		navigate("/recommend/result");
	};

	const [select, setSelect] = useState([false, false, false, false]);
	const [check, setCheck] = useState(false);

	const onSelect = (qidx, aidx) => {
		const temp = select;
		temp[qidx] = aidx;
		setSelect(temp);
		console.log(select);
	};

	useEffect(() => {
		if (
			select[0] !== false &&
			select[1] !== false &&
			select[2] !== false &&
			select[3] !== false
		) {
			setCheck(true);
		}
	});

	return (
		<>
			<Wrap>
				{questions.map((que, qidx) => (
					<QuestionItems key={qidx}>
						<Question>{que}</Question>
						<Answers>
							{answers[qidx].map((ans, aidx) =>
								select[qidx] === aidx ? (
									<Answer
										flag={true}
										onClick={() => onSelect(qidx, aidx)}
										key={aidx}
									>
										{ans}
									</Answer>
								) : (
									<Answer
										flag={false}
										onClick={() => onSelect(qidx, aidx)}
										key={aidx}
									>
										{ans}
									</Answer>
								)
							)}
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
