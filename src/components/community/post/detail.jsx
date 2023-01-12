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
	NoComments,
	Cancle,
	CancleWrap,
} from "./styled";
import Id from "../../../assets/community/avatar.png";
import temp from "../../../assets/community/temp-image.png";
import heart from "../../../assets/community/heart-icon.png";
import colorHeart from "../../../assets/community/colored-heart-icon.png";
import commentImg from "../../../assets/community/comment.png";
import { useParams } from "react-router-dom";

const Detail = () => {
	const [loading, setLoading] = useState(false);
	const [post, setPost] = useState([]);
	const [comments, setComments] = useState([]);
	const [comment, setComment] = useState("");
	const [likeNum, setLikeNum] = useState(0);
	const [like, setLike] = useState(false);

	const params = useParams();
	const postId = params.postId;

	const getPost = useCallback(async () => {
		setLoading(true);
		await axios({
			method: "get",
			url: `http://ec2-3-39-207-4.ap-northeast-2.compute.amazonaws.com/account/post/${postId}`,
			headers: { Authorization: sessionStorage.getItem("token") },
		}).then((response) => {
			setPost(response.data);
			setLike(response.data.bool_like_users);
			setLikeNum(response.data.like_num);
			setLoading(false);
		});
	});

	const getComments = useCallback(async () => {
		setLoading(true);
		await axios({
			method: "get",
			url: `http://ec2-3-39-207-4.ap-northeast-2.compute.amazonaws.com/account/comment/${postId}`,
			headers: { Authorization: sessionStorage.getItem("token") },
		}).then((response) => {
			// console.log(response);
			setComments(response.data);
			setLoading(false);
		});
	});

	const saveComment = async () => {
		setLoading(true);
		await axios({
			method: "post",
			url: `http://ec2-3-39-207-4.ap-northeast-2.compute.amazonaws.com/account/comment/post/${postId}/`,
			headers: { Authorization: sessionStorage.getItem("token") },
			data: { content: comment },
		}).then(() => {
			getComments();
			getPost();
			setLoading(false);
		});
	};

	const deleteComment = async (id) => {
		setLoading(true);
		await axios({
			method: "delete",
			url: `http://ec2-3-39-207-4.ap-northeast-2.compute.amazonaws.com/account/comment/delete/${id}`,
			headers: { Authorization: sessionStorage.getItem("token") },
		}).then(() => {
			getComments();
			getPost();
			setLoading(false);
		});
	};

	const clickLike = async () => {
		await axios({
			method: "get",
			url: `http://ec2-3-39-207-4.ap-northeast-2.compute.amazonaws.com/account/post/${postId}/likes/`,
			headers: { Authorization: sessionStorage.getItem("token") },
		}).then((response) => {
			// console.log(response.data);
			setLikeNum(response.data.like_num);
			setLike(response.data.bool_like_users);
			setLoading(false);
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
						{post.profile_image === "null" ? (
							<img src={Id} />
						) : (
							<img src={post.profile_image} alt="alt" />
						)}
					</AuthImg>
					<Username>{post.writer}</Username>
					<Plant>
						{post.user_plant_name} 키운지 {post.ndate}일차
					</Plant>
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
						{like ? (
							<img
								src={colorHeart}
								onClick={clickLike}
								style={{ cursor: "pointer" }}
							/>
						) : (
							<img
								src={heart}
								onClick={clickLike}
								style={{ cursor: "pointer" }}
							/>
						)}
						<Num>{likeNum}</Num>
						<img src={commentImg} />
						<Num>{post.comment_cnt}</Num>
					</Icon>
					<Comments>
						{post.comment_cnt === 0 ? (
							<NoComments>입력된 댓글이 없습니다.</NoComments>
						) : (
							<>
								{comments.map((cmt) => (
									<ComtItem>
										<ImgWrap>
											<img src={Id} />
										</ImgWrap>
										<ComWrap>
											<CancleWrap>
												<UserName>{cmt.username_comment}</UserName>
												{sessionStorage.getItem("userid") ===
												String(cmt.user) ? (
													<Cancle onClick={() => deleteComment(cmt.id)}>
														&#x2717;
													</Cancle>
												) : (
													""
												)}
											</CancleWrap>
											<Date>{cmt.created_at}</Date>
											<Cont>{cmt.content}</Cont>
										</ComWrap>
									</ComtItem>
								))}
							</>
						)}

						<Input>
							<ImgWrap>
								{sessionStorage.getItem("profile") == "null" ? (
									<img src={Id} />
								) : (
									<img src={sessionStorage.getItem("profile")} />
								)}
							</ImgWrap>
							<AuthUserName>{sessionStorage.getItem("username")}</AuthUserName>
							<input
								placeholder="댓글을 입력해주세요"
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
