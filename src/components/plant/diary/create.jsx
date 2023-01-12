import React, { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import {
	Sidebar,
	AddBtn,
	Usernick,
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
	Logtitle,
	Savebtn,
	Growinfo,
	Watertxt,
	Drugtxt,
	Newtxt,
	Waterinput,
	Druginput,
	Newinput,
	Todaylog,
	Dday,
	ImgSection,
	Hide,
	Right,
	Bin,
	Contents,
	TxtInput
} from "./styled";
import Img from "../../../assets/diary/일지 작성 페이지_image.png";
import axios from 'axios';
import Usericon from "../../../assets/diary/유저 정보란.png";

function Plant({ plant }) {
	/* 사이드바 식물 리스트 */
	const getUserPlants =[
		{
			"id": 0,
			"name": "소나무"
		},
		{
			"id": 1,
			"name": "자작나무"
		}
	]
	/****************** */

	const [isHovering, setIsHovering] = useState(0);
	let { plantid } = useParams();
	
	return (
		<label class="radio">
			<input
				type="radio"
				name="sidebar"
				id="radio"
				style={{display: "none"}}
				value={plant.id}
			/>
			<div
				onMouseOver={() => setIsHovering(1)}
				onMouseOut={() => setIsHovering(0)}
			>
				{ (plant.id == plantid)|(isHovering)  ? (
					<Listcompoclicked>
						<Sideplantpicclicked>
							<Sideplantnameclicked>{getUserPlants[plant.id].name}</Sideplantnameclicked>
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

const Create = () => {
	let { plantid } = useParams();
	
  
	/* 이미지 미리보기 구현 */
	const [imageSrc, setImageSrc] = useState(Img);

	const encodeFileToBase64 = (fileBlob) => {
		const reader = new FileReader();
		reader.readAsDataURL(fileBlob);
		
		return new Promise((resolve) => {
		  reader.onload = () => {
			setImageSrc(reader.result);
			resolve();
			console.log(reader);
		  };
		});
	  };

	const imagestyle ={
		width: "37.083vw",
    	height: "45.204vh"
	}
	/* */
	const navigate = useNavigate();

	/************ 입력 데이터 받아오기 *****************/
	const [info, setInfo] = useState({
		title: "",
		water: "",
		drug: "",
		new: "",
		pic: "",
		content: ""
	});

	const onChangeInfo = (e) =>{
		setInfo({
			...info,
			[e.target.name]:e.target.value,
		});
	}

	/************ 입력 데이터 넘기기 *****************/
	const onClickSave =(e) =>{
		console.log(info);
		console.log(imageSrc.name);
		// 아이디 추가 로직
		//navigate(`/plant/${plantid}/diary/${diaryid}`);
	}

	/* 사이드바 식물 리스트 */
	const getUserPlants =[
		{
			"id": 0,
			"name": "소나무"
		},
		{
			"id": 1,
			"name": "자작나무"
		}
	]
	/****************** */

	/* 사이드바 유저 정보 */
	const accountMypage = 
	{
		"email":"klae@gmail.com",
		"password":"pbkdf2_sha256$390000$m9CtGlBmyIvkCL341Yhfjo$9aCy0HzvKhde8lGZQHv6uxfLCyKhr78hY4O2L8gkS5w=",
		"username":"klae",
		"profile_image":null
	}

	const [userimageSrc, setUserimageSrc] = useState(Usericon);
	
	const userimagestyle ={
		position: 'absolute',
		width: '2.57vw',
	    height: '4.22vh',
	    left: '2.85vw',
    	top: '4vh',
    	'background-repeat': 'no-repeat',
    	'background-size': 'contain'
	}
	/***********************/
	
	/* 식물 추가 */
		const navigateToCreateplant = () => {
			navigate(`/plant/addplant/createplant`);
		};

	return <div>
	<Page>
		<Sidebar>
				<img 
					src={userimageSrc} 
					alt="preview-img" 
					style={userimagestyle} 
				/>
				<Usernick>{accountMypage.username} 님</Usernick>
				<AddBtn
					onClick={navigateToCreateplant}
				>
					식물 추가
				</AddBtn>
				<Sidelist>
				{getUserPlants.map((plant)=>(
                    <div onClick={() =>{
                        /* 해당 식물의 일지들 맵핑 */
                        navigate(`/plant/${plant.id}`)
                    }}>
                        <Plant 
                        plant={plant}/>
                    </div>
					))}
				</Sidelist>
		</Sidebar>
			

		<Plantname>{getUserPlants[plantid].name}</Plantname>
		<Plantdday>키운지 D+nnn일 째</Plantdday>

		<Back>
			<Logtitle 
            type="text"
            placeholder="제목을 입력하세요."
			id="title"
			name="title"
			onChange={onChangeInfo}
			>
			</Logtitle>
			<Savebtn
			onClick={onClickSave}
			>저장하기</Savebtn>

			<Growinfo>생육 정보</Growinfo>

			<Watertxt>급수 여부 / 급수량</Watertxt>
			<Waterinput
			id="water"
			name="water"
			onChange={onChangeInfo}
			/>

			<Drugtxt>생육 보조제 투약 여부</Drugtxt>
			<Druginput
			id="drug"
			name="drug"
			onChange={onChangeInfo}
			/>

			<Newtxt>새로운 생장 변화</Newtxt>
			<Newinput
			id="new"
			name="new"
			onChange={onChangeInfo}
			/>

			<Todaylog>오늘의 일지:</Todaylog>
			<Dday>키운지 nnn일차</Dday>

			{/* 이미지 미리보기 업로드 구현 */}
			<label>
				<Hide>
					<input 
						type="file"
						id="pic"
						name="pic"
						onChange={(e)=>{
							encodeFileToBase64(e.target.files[0]);
							onChangeInfo(e);
						}}
					/>
				</Hide>
				<ImgSection>
        			{imageSrc && 
					<img src={imageSrc} 
					alt="preview-img" 
					style={imagestyle} 
					/>	}      			
    			</ImgSection>
			</label>
			
			{/*일기 쓰는 부분*/}
			<Right>
				<Bin>?</Bin>
				<Contents></Contents>
				<Contents></Contents>
				<Contents></Contents>
				<Contents></Contents>
				<Contents></Contents>
				<Contents></Contents>
				<Contents></Contents>
			</Right>
			
			<TxtInput
			id="content"
			name="content"
			onChange={onChangeInfo}
			placeholder="일지 내용을 입력하세요"
			/>
		</Back>
	</Page>
	</div>;
};

export default Create;
