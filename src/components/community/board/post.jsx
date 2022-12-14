import React from "react";
import { PostItem, PostTitle, PostCont, PostImg } from "./styled";
import temp from "../../../assets/community/temp-image.png";
import { useNavigate } from "react-router-dom";

const Post = ({ id, title, body, photo }) => {
	const navigate = useNavigate();
	const goDetail = (id) => {
		navigate(`/plant/community/${id}`);
	};
	return (
		<PostItem key={id} onClick={() => goDetail(id)}>
			<PostImg>
				{photo ? <img src={photo} alt="alt" /> : <img src={temp} />}
			</PostImg>
			<PostTitle>{title}</PostTitle>
			<PostCont>{body}</PostCont>
		</PostItem>
	);
	return;
};

export default Post;
