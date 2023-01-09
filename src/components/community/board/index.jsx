import React, { useCallback, useState, useEffect } from "react";
import axios from "axios";
import { Title, TitleText, Text, Text2, Wrap, PostSection } from "./styled";
import plant from "../../../assets/community/plant.png";
import { useNavigate } from "react-router-dom";
import Post from "./post";

const Community = () => {
	const navigate = useNavigate();
	const goAll = () => {
		navigate("/plant/community/all");
	};

	const [loading, setLoading] = useState(false);
	const [newPosts, setNewPosts] = useState([]);
	const [bestPosts, setBestPosts] = useState([]);

	const getNewPostList = useCallback(async () => {
		setLoading(true);
		await axios({
			method: "get",
			url: `http://ec2-3-39-207-4.ap-northeast-2.compute.amazonaws.com/account/new_4_posts`,
		}).then((response) => {
			setNewPosts(response.data);
			setLoading(false);
		});
	});

	const getBestPosts = useCallback(async () => {
		setLoading(true);
		await axios({
			method: "get",
			url: `http://ec2-3-39-207-4.ap-northeast-2.compute.amazonaws.com/account/likes_4_posts`,
		}).then((response) => {
			setBestPosts(response.data);
			setLoading(false);
		});
	});

	useEffect(() => {
		getNewPostList();
		getBestPosts();
	}, []);

	// 대기 중일 때
	if (loading) {
		return <div>로딩 중 ...</div>;
	}

	// newPosts 값이 설정되지 않았을 때
	if (!newPosts) {
		return null;
	}

	// bestPosts 값이 설정되지 않았을 때
	if (!bestPosts) {
		return null;
	}

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
					{newPosts.map((post) => (
						<Post
							id={post.id}
							title={post.title}
							body={post.body}
							key={post.id}
							photo={post.photo}
						/>
					))}
				</PostSection>
				<Text>가장 많은 공감을 얻은 게시물이에요.</Text>
				<PostSection>
					{bestPosts.map((post) => (
						<Post
							id={post.id}
							title={post.title}
							body={post.body}
							key={post.id}
							photo={post.photo}
						/>
					))}
				</PostSection>
			</Wrap>
		</>
	);
};

export default Community;
