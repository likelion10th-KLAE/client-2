import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
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
	Input,
	ImgWrap,
	AuthUserName,
	But,
} from "./styled";
import Id from "../../../assets/community/avatar.png";
import temp from "../../../assets/community/temp-image.png";
import heart from "../../../assets/community/heart-icon.png";
import commentImg from "../../../assets/community/comment.png";
import { useParams } from "react-router-dom";

const Detail = () => {
	const [loading, setLoading] = useState(false);
	const [post, setPost] = useState([]);
	const [comments, setComments] = useState([]);
	const [comment, setComment] = useState("");

	const params = useParams();
	const postId = params.postId;

	const getPost = useCallback(async () => {
		setLoading(true);
		await axios({
			method: "get",
			url: `http://127.0.0.1:8000/account/post/${postId}`,
		}).then((response) => {
			setPost(response.data);
			setLoading(false);
		});
	});

	const getComments = useCallback(async () => {
		setLoading(true);
		await axios({
			method: "get",
			url: `http://127.0.0.1:8000/account/comment/${postId}`,
		}).then((response) => {
			setComments(response.data);
			setLoading(false);
		});
	});

	const saveComment = async () => {
		setLoading(true);
		await axios({
			method: "post",
			url: `http://127.0.0.1:8000/account/comment/post/${postId}/`,
			data: { content: comment },
		}).then(() => {
			console.log("성공");
			// setLoading(false);
		});
	};

	const handelKeyPress = (e) => {
		if (e.key === "Enter") {
			saveComment();
		}
	};

	useEffect(() => {
		getPost();
		getComments();
	}, []);

	// 대기 중일 때
	if (loading) {
		return <div>로딩 중 ...</div>;
	}

	return (
		<Wrap>
			<InWrap>
				<Title>{post.title}</Title>
				<Auth>
					<AuthImg>
						{/* 수정 필요 */}
						{post.photo ? <img src={post.photo} alt="alt" /> : <img src={Id} />}
					</AuthImg>
					<Username>tisx2glee</Username>
					<Plant>파초일엽 밍밍이 키운지 {post.ndate}일차</Plant>
				</Auth>
				<Inner>
					<Text>생육 정보</Text>
					<InforItem>
						<InforText>급수 여부 / 급수량</InforText>
						<InforCon style={{ backgroundColor: "#fcfcfc" }}>
							{post.give_water}
						</InforCon>
					</InforItem>
					<InforItem>
						<InforText>생육 보조제 투약 여부</InforText>
						<InforCon style={{ backgroundColor: "#F4F5F4" }}>
							{post.growing_tonic}
						</InforCon>
					</InforItem>
					<InforItem>
						<InforText>새로운 생장 변화</InforText>
						<InforCon style={{ backgroundColor: "#EBF7F4" }}>
							{post.change_record}
						</InforCon>
					</InforItem>
					<Diary>
						<Text>오늘의 일지</Text>
						<InforText>키운지 {post.ndate}일차</InforText>
						<DiaryDetail>
							<ImgSection>
								{post.photo ? (
									<img src={post.photo} alt="alt" />
								) : (
									<img src={temp} />
								)}
							</ImgSection>

							<Right>
								<Bin>?</Bin>
								<Contents>{post.body}</Contents>
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
						<Num>{post.like_num}</Num>
						<img src={commentImg} />
						<Num>{post.comment_cnt}</Num>
					</Icon>
					<Comments>
						{comments.map((cmt) => (
							<ComtItem>
								<ImgWrap>
									<img src={Id} />
								</ImgWrap>
								<ComWrap>
									<UserName>{cmt.user}</UserName>
									<Date>{cmt.created_at}</Date>
									<Cont>{cmt.content}</Cont>
								</ComWrap>
							</ComtItem>
						))}
						<Input>
							<ImgWrap>
								<img src={Id} />
							</ImgWrap>
							<AuthUserName>shsh</AuthUserName>
							<input
								onKeyDown={(e) => {
									handelKeyPress(e);
								}}
								onChange={(e) => {
									setComment(e.target.value);
								}}
							/>
							<But onClick={saveComment}>입력</But>
						</Input>
					</Comments>
				</ComtSection>
			</InWrap>
		</Wrap>
	);
};

export default Detail;
