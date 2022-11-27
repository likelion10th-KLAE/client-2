import React from "react";
import {
	Title,
	TitleText,
	Text,
	PostSection,
	PostItem,
	PostTitle,
	PostCont,
	Wrap,
} from "./styled";
import temp from "../../../assets/community/temp-image.png";
import plant from "../../../assets/community/plant.png";

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
	{
		id: 3,
		title: "Ad eos saepe lucilius",
		contents:
			"At eripuit signiferumque sea, vel ad mucius molestie, cu labitur.",
	},
	{
		id: 4,
		title: "Ad eos saepe lucilius",
		contents:
			"At eripuit signiferumque sea, vel ad mucius molestie, cu labitur.",
	},
	{
		id: 5,
		title: "Ad eos saepe lucilius",
		contents:
			"At eripuit signiferumque sea, vel ad mucius molestie, cu labitur.",
	},
	{
		id: 6,
		title: "Ad eos saepe lucilius",
		contents:
			"At eripuit signiferumque sea, vel ad mucius molestie, cu labitur.",
	},
	{
		id: 7,
		title: "Ad eos saepe lucilius",
		contents:
			"At eripuit signiferumque sea, vel ad mucius molestie, cu labitur.",
	},
	{
		id: 8,
		title: "Ad eos saepe lucilius",
		contents:
			"At eripuit signiferumque sea, vel ad mucius molestie, cu labitur.",
	},
	{
		id: 9,
		title: "Ad eos saepe lucilius",
		contents:
			"At eripuit signiferumque sea, vel ad mucius molestie, cu labitur.",
	},
	{
		id: 10,
		title: "Ad eos saepe lucilius",
		contents:
			"At eripuit signiferumque sea, vel ad mucius molestie, cu labitur.",
	},
];
const AllPosts = () => {
	return (
		<>
			<Title>
				<img src={plant} />
				<TitleText>일지 공유 게시판</TitleText>
				<hr />
			</Title>
			<Wrap>
				<Text>게시물 전체</Text>
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

export default AllPosts;
