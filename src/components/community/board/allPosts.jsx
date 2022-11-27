import React from "react";
import { Title, TitleText, Text, Wrap } from "./styled";
import plant from "../../../assets/community/plant.png";
import Post from "./post";

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
				<Post />
				<Post />
				<Post />
				<Post />
			</Wrap>
		</>
	);
};

export default AllPosts;
