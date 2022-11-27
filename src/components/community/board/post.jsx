import React from "react";
import { PostSection, PostItem, PostTitle, PostCont } from "./styled";
import temp from "../../../assets/community/temp-image.png";
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

const Post = () => {
	const navigate = useNavigate();
	const goDetail = () => {
		navigate("/plant/community/detail");
	};
	return (
		<PostSection onClick={() => goDetail()}>
			{Posts.map((p) => (
				<PostItem key={p.id}>
					<img src={temp} />
					<PostTitle>{p.title}</PostTitle>
					<PostCont>{p.contents}</PostCont>
				</PostItem>
			))}
		</PostSection>
	);
};

export default Post;
