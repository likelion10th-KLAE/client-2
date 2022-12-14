import React, { useState, useEffect } from "react";
import { Question, Answer, QuestionItems, Answers, Wrap, But } from "./styled";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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

	const [select, setSelect] = useState([false, false, false, false]);
	const [check, setCheck] = useState(false);

	const goResult = async () => {
		if (check) {
			await axios({
				method: "post",
				url: `http://ec2-3-39-207-4.ap-northeast-2.compute.amazonaws.com/plants/recommend/`,
				data: { result: select.join("") },
			}).then((res) => {
				navigate("/recommend/result", { state: res.data });
			});
		} else {
			alert("모든 선택지를 골라주세요.");
		}
	};

	const clickButton = (ques_idx, ans_idx) => {
		let newArr = select.map((item, index) => {
			if (index === ques_idx) {
				return ans_idx;
			} else {
				return item;
			}
		});

		setSelect(newArr);
	};

	useEffect(() => {
		console.log(check);
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
							{answers[qidx].map((ans, aidx) =>
								select[qidx] === aidx ? (
									<Answer
										flag={true}
										// onClick={() => onSelect(qidx, aidx)}
										onClick={() => {
											clickButton(qidx, aidx);
										}}
										key={aidx}
									>
										{ans}
									</Answer>
								) : (
									<Answer
										flag={false}
										// onClick={() => onSelect(qidx, aidx)}
										onClick={() => {
											clickButton(qidx, aidx);
										}}
										key={aidx}
									>
										{ans}
									</Answer>
								)
							)}
						</Answers>
					</QuestionItems>
				))}
			</Wrap>
			{check ? (
				<But activate={true} onClick={() => goResult()}>
					추천 결과 보기
				</But>
			) : (
				<But activate={false} onClick={() => goResult()}>
					추천 결과 보기
				</But>
			)}
		</>
	);
};

export default Recommend;
