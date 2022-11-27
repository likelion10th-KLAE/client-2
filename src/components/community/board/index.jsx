import React from "react";
import { Title, TitleText, Text, Text2, Wrap } from "./styled";
import plant from "../../../assets/community/plant.png";
import { useNavigate } from "react-router-dom";
import Post from "./post";

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
				<Post />
				<Text>가장 많은 공감을 얻은 게시물이에요.</Text>
				<Post />
			</Wrap>
		</>
	);
};

export default Community;
