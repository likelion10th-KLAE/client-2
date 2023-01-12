import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
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
	Infoeditbtn,
	EditImg,
	EditTxt,
	Plantname,
	Plantdday,
	LogPage,
	LogListsec,
	LogList,
	Logplantimg,
	Logtitle,
	Logdate,
	Page,
	Plantset,
	PlantsetH,
} from "./styled";
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

const Main = () => {
	let { plantid } = useParams();
	const [isHovering, setIsHovering] = useState(0) 

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

	/* 사용자가 등록한 식물 일지 */
	const getUserplantPost0 =[
		{
			"id": 2,
			"title": "소나무 2일차",
			"body": "소나무 2일차 글입니다!!",
			"photo": null,
			"like_num": 0,
			"share": false,
			"created_at": "2023-01-07 13:39:47",
			"ndate": 0
		},
		{
			"id": 3,
			"title": "소나무 3일차",
			"body": "소나무 3일차 글입니다!!",
			"photo": null,
			"like_num": 0,
			"share": false,
			"created_at": "2023-01-07 13:37:22",
			"ndate": 0
		},
		{
			"id": 1,
			"title": "소나무 1일차",
			"body": "소나무 1일차 글입니다!!",
			"photo": null,
			"like_num": 0,
			"share": false,
			"created_at": "2023-01-07 13:35:30",
			"ndate": 1
		}
	]

	const getUserplantPost1 =[
		{
			"id": 2,
			"title": "자작나무 2일차",
			"body": "자작나무 2일차 글입니다!!",
			"photo": null,
			"like_num": 0,
			"share": false,
			"created_at": "2023-01-07 13:39:47",
			"ndate": 0
		},
		{
			"id": 3,
			"title": "자작나무 3일차",
			"body": "자작나무 3일차 글입니다!!",
			"photo": null,
			"like_num": 0,
			"share": false,
			"created_at": "2023-01-07 13:37:22",
			"ndate": 0
		},
		{
			"id": 1,
			"title": "자작나무 1일차",
			"body": "자작나무 1일차 글입니다!!",
			"photo": null,
			"like_num": 0,
			"share": false,
			"created_at": "2023-01-07 13:35:30",
			"ndate": 1
		}
	]
	/*********************/

	/* 일지 추가하기*/
	const navigate = useNavigate();
	const navigateToCreate = () => {
		/* 식물일지 추가하기 버튼 누를때 새로운 일지를 추가하는 페이지로*/
		navigate(`/plant/${plantid}/diary/create`);
	};

	/* 식물 추가 */
	const navigateToCreateplant = () => {
		navigate(`/plant/addplant/createplant`);
	};

	/* 정보 보여주기 */
	const [iid, setIid] = useState(plantid);
	const [diary, setDiary] = useState(
		getUserplantPost1.map((plant) => getUserplantPost0)
	);

	const [plantname, setPlantname] = useState(getUserPlants[plantid].name);
	const [plantdate, setPlantdate] = useState([
		"키운지 D+" + getUserplantPost1[1].ndate + "일 째",
	]);

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


	return (
		<Page>
			<Sidebar>
				<img 
					src={userimageSrc} 
					alt="preview-img" 
					style={userimagestyle} 
				/>
				<Usernick> {accountMypage.username} 님</Usernick>
				<AddBtn
					onClick={navigateToCreateplant}
				>
					식물 추가
				</AddBtn>
				<Sidelist>
					{getUserPlants.map((plant) => (
						<div
							onChange={() => {
								setIid(plant.id);
								setPlantname(getUserPlants[plant.id].name);
								setPlantdate("키운지 D+" + getUserplantPost1.ndate + "일 째");
								navigate(`/plant/${plant.id}`);
							}}
						>
							<Plant plant={plant} />
						</div>
					))}
				</Sidelist>
			</Sidebar>
			<label
			onMouseOver={() => setIsHovering(1)}
			onMouseOut={() => setIsHovering(0)}>
				{isHovering?(
				<Link to="addplant">
					<Plantname>
						{plantname}
						<PlantsetH>⚙️</PlantsetH>
					</Plantname>
					
					<Plantdday>{plantdate}</Plantdday>
				</Link>
				):(
				<Link to="addplant">
					<Plantname>
						{plantname}
						<Plantset>⚙️</Plantset>
					</Plantname>
					
					<Plantdday>{plantdate}</Plantdday>
				</Link>
				)}
			
			</label>
			

			<Infoeditbtn onClick={navigateToCreate}>
				<EditImg />
				<EditTxt>식물 일지 추가하기</EditTxt>
			</Infoeditbtn>

			<LogPage />
			<LogListsec>
				{/* api 연동 될시 로직 변경!*/}
				{getUserPlants[plantid].id === 1?(
					<>
						{getUserplantPost1.map((diary) => (
							<Link to={`diary/${diary.id-1}`}>
								<LogList key={diary.id}>
									<Logplantimg>
										<Logtitle>{diary.title}</Logtitle>
										<Logdate>{diary.created_at}</Logdate>
									</Logplantimg>
								</LogList>
							</Link>
						))}
					</>
			):(
				<>
					{getUserplantPost0.map((diary) => (
						<Link to={`diary/${diary.id-1}`}>
							<LogList key={diary.id}>
								<Logplantimg>
									<Logtitle>{diary.title}</Logtitle>
									<Logdate>{diary.created_at}</Logdate>
								</Logplantimg>
							</LogList>
						</Link>		
					))}
				</>
			)}
				
			</LogListsec>
		</Page>
	);
};

export default Main;
