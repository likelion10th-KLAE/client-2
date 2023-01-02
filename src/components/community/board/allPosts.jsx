import React, { useState } from "react";
import {
	Title,
	TitleText,
	Text,
	Wrap,
	PagenumberDiv,
	PagingSection,
	PageArrowDiv,
} from "./styled";
import plant from "../../../assets/community/plant.png";
import Post from "./post";

const AllPosts = () => {
	const [page, setPage] = useState(1);
	const [pages, setPages] = useState([1, 2, 3, 4, 5, 6, 7]);

	const lastPage = 9;
	const tempPages = [];
	for (let i = 1; i <= lastPage; i++) {
		tempPages.push(i);
	}
	// setPages(tempPages);

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
