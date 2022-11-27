import React from "react";
import {
	Wrap,
	Title,
	InWrap,
	Auth,
	Username,
	Plant,
	AuthImg,
	Inner,
	Text,
	InforItem,
	InforText,
	InforCon,
	Diary,
	DiaryDetail,
	Bin,
	Contents,
	Right,
	ImgSection,
	ComtSection,
	Icon,
	Num,
	Comments,
	UserName,
	Date,
	ComtItem,
	Cont,
	ComWrap,
	AuthImg2,
	Input,
	ImgWrap,
	AuthUserName,
	But,
} from "./styled";
import Id from "../../../assets/auth/ID.png";
import temp from "../../../assets/community/temp-image.png";
import heart from "../../../assets/community/heart-icon.png";
import comment from "../../../assets/community/comment.png";

const sample = {
	title: "드디어 분갈이! 화분 산 날",
	days: 33,
	inform: {
		check: "Y",
		water: 50,
		food: "Y",
		change: "N",
	},
	diary: {
		img: "",
		contents: "드디어 분갈이 했어용",
	},
};

const commetSample = [
	{
		id: 0,
		username: "ddalgijoa",
		date: "2022.10.31 13:59",
		contents:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
	},
	{
		id: 1,
		username: "podosarang",
		date: "2022.11.05 15:26",
		contents:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
	},
	{
		id: 2,
		username: "gwaillover",
		date: "2022.11.13 13:06",
		contents:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
	},
];

const Detail = () => {
	return (
		<Wrap>
			<InWrap>
				<Title>{sample.title}</Title>
				<Auth>
					<AuthImg>
						<img src={Id} />
					</AuthImg>
					<Username>tisx2glee</Username>
					<Plant>파초일엽 밍밍이 키운지 40일차</Plant>
				</Auth>
				<Inner>
					<Text>생육 정보</Text>
					<InforItem>
						<InforText>급수 여부 / 급수량</InforText>
						<InforCon style={{ backgroundColor: "#fcfcfc" }}>
							{sample.inform.check} / {sample.inform.water}
						</InforCon>
					</InforItem>
					<InforItem>
						<InforText>생육 보조제 투약 여부</InforText>
						<InforCon style={{ backgroundColor: "#F4F5F4" }}>
							{sample.inform.food}
						</InforCon>
					</InforItem>
					<InforItem>
						<InforText>새로운 생장 변화</InforText>
						<InforCon style={{ backgroundColor: "#EBF7F4" }}>
							{sample.inform.change}
						</InforCon>
					</InforItem>
					<Diary>
						<Text>오늘의 일지</Text>
						<InforText>키운지 {sample.days}일차</InforText>
						<DiaryDetail>
							<ImgSection>
								<img src={temp} />
							</ImgSection>

							<Right>
								<Bin>?</Bin>
								<Contents>{sample.diary.contents}</Contents>
								<Contents></Contents>
								<Contents></Contents>
								<Contents></Contents>
								<Contents></Contents>
							</Right>
						</DiaryDetail>
					</Diary>
				</Inner>
				<ComtSection>
					<Icon>
						<img src={heart} />
						<Num>30</Num>
						<img src={comment} />
						<Num>3</Num>
					</Icon>
					<Comments>
						{commetSample.map((cmt) => (
							<ComtItem>
								<ImgWrap>
									<AuthImg2>
										<img src={Id} />
									</AuthImg2>
								</ImgWrap>
								<ComWrap>
									<UserName>{cmt.username}</UserName>
									<Date>{cmt.date}</Date>
									<Cont>{cmt.contents}</Cont>
								</ComWrap>
							</ComtItem>
						))}
						<Input>
							<AuthImg2>
								<img src={Id} />
							</AuthImg2>
							<AuthUserName>shsh</AuthUserName>
							<input />
							<But>입력</But>
						</Input>
					</Comments>
				</ComtSection>
			</InWrap>
		</Wrap>
	);
};

export default Detail;
