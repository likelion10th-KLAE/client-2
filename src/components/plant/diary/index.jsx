import React, { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import {
	Sidebar,
	Usernick,
	AddBtn,
	Sidelist,
	Listcompo,
	Sideplantpic,
	Sideplantname,
	Listcompoclicked,
	Sideplantpicclicked,
	Sideplantnameclicked,
	Page,
	Plantname,
	Plantdday,
	Back,
	Logtitlediv,
	Sharebtn,
	Editbtn,
	Growinfo,
	Watertxt,
	Drugtxt,
	Newtxt,
	Todaylog,
	Dday,
	ImgSection,
	Waterdiv,
	Drugdiv,
	Newdiv,
	Bin,
	Right,
	Contents,
	SideBack,
} from "./styled";
import Img from "../../../assets/diary/일지 작성 페이지_image.png";
import axios from "axios";
import Usericon from "../../../assets/diary/유저 정보란.png";

function Plant({ plant }) {
	/* 사이드바 식물 리스트 */
	const getUserPlants = [
		{
			id: 0,
			name: "소나무",
		},
		{
			id: 1,
			name: "자작나무",
		},
	];
	/****************** */

	const [isHovering, setIsHovering] = useState(0);
	let { plantid } = useParams();

	return (
		<label class="radio">
			<input
				type="radio"
				name="sidebar"
				id="radio"
				style={{ display: "none" }}
				value={plant.id}
			/>
			<div
				onMouseOver={() => setIsHovering(1)}
				onMouseOut={() => setIsHovering(0)}
			>
				{(plant.id == plantid) | isHovering ? (
					<Listcompoclicked>
						<Sideplantpicclicked>
							<Sideplantnameclicked>
								{getUserPlants[plant.id].name}
							</Sideplantnameclicked>
						</Sideplantpicclicked>
					</Listcompoclicked>
				) : (
					<Listcompo>
						<Sideplantpic>
							<Sideplantname>{getUserPlants[plant.id].name}</Sideplantname>
						</Sideplantpic>
					</Listcompo>
				)}
			</div>
		</label>
	);
}

const Diary = () => {
	let { plantid } = useParams();
	let { diaryid } = useParams();

	/* 사이드바 식물 리스트 */
	const getUserPlants = [
		{
			id: 0,
			name: "소나무",
		},
		{
			id: 1,
			name: "자작나무",
		},
	];
	/****************** */

	/* 사용자가 등록한 식물 일지 */
	const getUserplantPost0 = [
		{
			id: 2,
			title: "소나무 2일차",
			body: "소나무 2일차 글입니다!!",
			photo: null,
			like_num: 0,
			share: false,
			created_at: "2023-01-07 13:39:47",
			ndate: 0,
		},
		{
			id: 3,
			title: "소나무 3일차",
			body: "소나무 3일차 글입니다!!",
			photo: null,
			like_num: 0,
			share: false,
			created_at: "2023-01-07 13:37:22",
			ndate: 0,
		},
		{
			id: 1,
			title: "소나무 1일차",
			body: "소나무 1일차 글입니다!!",
			photo: null,
			like_num: 0,
			share: false,
			created_at: "2023-01-07 13:35:30",
			ndate: 1,
		},
	];

	const getUserplantPost1 = [
		{
			id: 2,
			title: "자작나무 2일차",
			body: "자작나무 2일차 글입니다!!",
			photo: null,
			like_num: 0,
			share: false,
			created_at: "2023-01-07 13:39:47",
			ndate: 0,
		},
		{
			id: 3,
			title: "자작나무 3일차",
			body: "자작나무 3일차 글입니다!!",
			photo: null,
			like_num: 0,
			share: false,
			created_at: "2023-01-07 13:37:22",
			ndate: 0,
		},
		{
			id: 1,
			title: "자작나무 1일차",
			body: "자작나무 1일차 글입니다!!",
			photo: null,
			like_num: 0,
			share: false,
			created_at: "2023-01-07 13:35:30",
			ndate: 1,
		},
	];
	/*********************/

	/****************일지 내용**********/
	const accountPost = {
		id: 1,
		title: "자작나무 1일차",
		body: "자작나무 1일차 글입니다!!",
		give_water: "급수",
		change_record: "식물 상태 변화",
		growing_tonic: "O",
		like_num: 0,
		share: false,
		photo: null,
		comment_cnt: 2,
		ndate: 1,
		user_plant_name: "자작나무",
	};
	/*********************************/

	/* 공유 취소, 공유하기 버튼 구현 */
	const [shared, setShared] = useState(false);

	/* 이미지 미리보기 구현 */
	const [imageSrc, setImageSrc] = useState(Img);

	const encodeFileToBase64 = (fileBlob) => {
		const reader = new FileReader();
		reader.readAsDataURL(fileBlob);
		return new Promise((resolve) => {
			reader.onload = () => {
				setImageSrc(reader.result);
				resolve();
			};
		});
	};

	const imagestyle = {
		width: "37.083vw",
		height: "45.204vh",
	};
	/* */

	/* 일지 수정하기*/
	const navigate = useNavigate();
	const navigateToEdit = () => {
		/* 해당 식물 아이디 값으로 이동 */
		navigate(`/plant/${plantid}/diary/${diaryid}/edit`);
	};

	const navigateToShare = () => {
		setShared(false);
		navigate(`community`);
	};

	const cancelShare = () => {
		setShared(true);
	};

	/* 사이드바 유저 정보 */
	const accountMypage = {
		email: "klae@gmail.com",
		password:
			"pbkdf2_sha256$390000$m9CtGlBmyIvkCL341Yhfjo$9aCy0HzvKhde8lGZQHv6uxfLCyKhr78hY4O2L8gkS5w=",
		username: "klae",
		profile_image: null,
	};

	const [userimageSrc, setUserimageSrc] = useState(Usericon);

	const userimagestyle = {
		position: "absolute",
		width: "2.57vw",
		height: "4.22vh",
		left: "2.85vw",
		top: "4vh",
		"background-repeat": "no-repeat",
		"background-size": "contain",
	};
	/***********************/

	/* 식물 추가 */
	const navigateToCreateplant = () => {
		navigate(`/plant/addplant/createplant`);
	};

	console.log(sessionStorage.getItem("username"));

	return (
		<div>
			<Page>
				<Sidebar>
					<img src={userimageSrc} alt="preview-img" style={userimagestyle} />
					<Usernick>{sessionStorage.getItem("username")} 님</Usernick>
					<AddBtn onClick={navigateToCreateplant}>식물 추가</AddBtn>
					<Sidelist>
						{getUserPlants.map((plant) => (
							<div
								onClick={() => {
									/* 해당 식물의 일지들 맵핑 */
									navigate(`/plant/${plant.id}`);
								}}
							>
								<Plant plant={plant} />
							</div>
						))}
					</Sidelist>
				</Sidebar>

				<Plantname>{getUserPlants[plantid].name}</Plantname>
				<Plantdday>키운지 D+{getUserplantPost1.ndate}일 째</Plantdday>

				<Back>
					<Logtitlediv>{getUserplantPost0[diaryid].title}</Logtitlediv>
					{getUserplantPost0[diaryid].share ? (
						<Sharebtn onClick={cancelShare}>공유취소</Sharebtn>
					) : (
						<Sharebtn onClick={navigateToShare}>공유하기</Sharebtn>
					)}

					<Editbtn onClick={navigateToEdit}>수정하기</Editbtn>

					<Growinfo>생육 정보</Growinfo>

					<Watertxt>급수 여부 / 급수량</Watertxt>
					<Waterdiv>{accountPost.give_water}</Waterdiv>

					<Drugtxt>생육 보조제 투약 여부</Drugtxt>
					<Drugdiv>{accountPost.growing_tonic}</Drugdiv>

					<Newtxt>새로운 생장 변화</Newtxt>
					<Newdiv>{accountPost.change_record}</Newdiv>

					<Todaylog>오늘의 일지:</Todaylog>
					<Dday>키운지 {getUserplantPost0[diaryid].ndate}일차</Dday>

					<ImgSection>
						<img src={imageSrc} style={imagestyle} alt="preview-img" />
					</ImgSection>
					{/* 일기 쓰는 부분*/}
					<Right>
						<Bin>?</Bin>
						<Contents>{accountPost.body}</Contents>
						<Contents></Contents>
						<Contents></Contents>
						<Contents></Contents>
						<Contents></Contents>
					</Right>
				</Back>
			</Page>
		</div>
	);
};

export default Diary;
