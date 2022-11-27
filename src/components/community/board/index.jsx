import React from "react";
import {
	Title,
	TitleText,
	Text,
	Text2,
	PostSection,
	PostItem,
	PostTitle,
	PostCont,
	Wrap,
} from "./styled";
import temp from "../../../assets/community/temp-image.png";
import plant from "../../../assets/community/plant.png";
import { useNavigate } from "react-router-dom";

const Posts = [
	{
		id: 0,
		title: "Ad eos saepe lucilius",
		contents:
			"At eripuit signiferumque sea, vel ad mucius molestie, cu labitur.",
	},
	{
		id: 1,
		title: "Ad eos saepe lucilius",
		contents:
			"At eripuit signiferumque sea, vel ad mucius molestie, cu labitur.",
	},
	{
		id: 2,
		title: "Ad eos saepe lucilius",
		contents:
			"At eripuit signiferumque sea, vel ad mucius molestie, cu labitur.",
	},
	{
		id: 3,
		title: "Ad eos saepe lucilius",
		contents:
			"At eripuit signiferumque sea, vel ad mucius molestie, cu labitur.",
	},
];

const Community = () => {
	const navigate = useNavigate();
	const goAll = () => {
		navigate("/plant/community/all");
	};

	return (
		<>
			<Title>
				<img src={plant} />
				<TitleText>일지 공유 게시판</TitleText>
				<hr />
			</Title>
			<Wrap>
				<Text>지금 막 올라온 일상이에요!</Text>
				<Text2 onClick={() => goAll()}>게시물 전체 보기 &#62;</Text2>
				<PostSection>
					{Posts.map((p) => (
						<PostItem key={p.id}>
							<img src={temp} />
							<PostTitle>{p.title}</PostTitle>
							<PostCont>{p.contents}</PostCont>
						</PostItem>
					))}
				</PostSection>

				<Text>가장 많은 공감을 얻은 게시물이에요.</Text>
				<PostSection>
					{Posts.map((p) => (
						<PostItem key={p.id}>
							<img src={temp} />
							<PostTitle>{p.title}</PostTitle>
							<PostCont>{p.contents}</PostCont>
						</PostItem>
					))}
				</PostSection>
			</Wrap>
		</>
	);
};

export default Community;
