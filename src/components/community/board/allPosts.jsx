import React, { useState, useCallback, useEffect } from "react";
import axios from "axios";
import {
	Title,
	TitleText,
	Text,
	Wrap,
	PagenumberDiv,
	PagingSection,
	PageArrowDiv,
	PostSection,
} from "./styled";
import plant from "../../../assets/community/plant.png";
import Post from "./post";

const AllPosts = () => {
	const [page, setPage] = useState(1);
	const [pages, setPages] = useState([]);
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(false);

	const getPostList = useCallback(async () => {
		setLoading(true);
		await axios({
			method: "get",
			url: `http://ec2-3-39-207-4.ap-northeast-2.compute.amazonaws.com/account/post/page=${page}`,
		}).then((response) => {
			setPosts(response.data);
			const lastPage = response.data[0].page_range;
			const tempPages = [];
			for (let i = 1; i <= lastPage; i++) {
				tempPages.push(i);
			}
			setPages(tempPages);
			setLoading(false);
		});
	});

	useEffect(() => {
		getPostList();
	}, [page]);

	// 대기 중일 때
	if (loading) {
		return <div>로딩 중 ...</div>;
	}

	// newPosts 값이 설정되지 않았을 때
	if (!posts) {
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
				<Text>게시물 전체</Text>
				<PostSection>
					{posts.map((post) => (
						<Post
							id={post.id}
							title={post.title}
							body={post.body}
							key={post.id}
							photo={post.photo}
						/>
					))}
				</PostSection>
				<PagingSection>
					<PageArrowDiv>
						<button
							onClick={() => {
								if (page > 1) {
									setPage(page - 1);
								}
							}}
						>
							〈 Prev
						</button>
					</PageArrowDiv>
					{pages.map((pageNum) =>
						pageNum === page ? (
							<PagenumberDiv
								flag={true}
								key={pageNum}
								onClick={() => setPage(pageNum)}
							>
								{pageNum}
							</PagenumberDiv>
						) : (
							<PagenumberDiv
								flag={false}
								key={pageNum}
								onClick={() => setPage(pageNum)}
							>
								{pageNum}
							</PagenumberDiv>
						)
					)}
					<PageArrowDiv>
						<button
							onClick={() => {
								if (pages.length > page) {
									setPage(page + 1);
								}
							}}
						>
							Next 〉
						</button>
					</PageArrowDiv>
				</PagingSection>
			</Wrap>
		</>
	);
};

export default AllPosts;
