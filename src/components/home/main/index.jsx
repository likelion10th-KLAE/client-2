import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
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
	const [loading, setLoading] = useState(false);
	const [plants, setPlants] = useState([]);
	let { plantid } = useParams();

	const getPlants = useCallback(async () => {
		setLoading(true);
		await axios({
			method: "get",
			url: `http://ec2-3-39-207-4.ap-northeast-2.compute.amazonaws.com/plants/get_user_plants/`,
			headers: { Authorization: sessionStorage.getItem("token") },
		}).then((response) => {
			setPlants(response.data);
			setLoading(false);
		});	
	});
	useEffect(() => {
		getPlants();
	}, []);

	const [isHovering, setIsHovering] = useState(0);
	
	
// 지금 plants[plant.id].name이 떴다 안떴다 하는게 문제인거 같아요 
// 근데 plants[plant.id].name을 78, 86줄에 넣으면 에러 떠서 흰 창이 나옵니다,,,
	console.log(plants[plant.id].name);


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
								{plants[plant.id].name}
							</Sideplantnameclicked>
						</Sideplantpicclicked>
					</Listcompoclicked>
				) : (
					<Listcompo>
						<Sideplantpic>
							<Sideplantname>
							{plants[plant.id].name}
							</Sideplantname>
						</Sideplantpic>
					</Listcompo>
				)}
			</div>
		</label>
	);
}

const Main = () => {
	let { plantid } = useParams();
	const [isHovering, setIsHovering] = useState(0);
	const [loading, setLoading] = useState(false);
	const [plants, setPlants] = useState([]);
	const navigate = useNavigate();

	/* 정보 보여주기 */
	const [iid, setIid] = useState(plantid);

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
	const [plantdate, setPlantdate] = useState([
		"키운지 D+" + getUserplantPost1[1].ndate + "일 째",
	]);
	const [diary, setDiary] = useState(
		getUserplantPost1.map((plant) => getUserplantPost0)
	);
	const [userimageSrc, setUserimageSrc] = useState(Usericon);
	const [plantname, setPlantname] = useState("");
	const [error, setError] = useState(null);
  
	useEffect(() => {
	  const fetchPlants = async () => {
		try {
		  setError(null);
		  setPlants(null);
		  setLoading(true);
		  const response = await axios.get(
			"http://ec2-3-39-207-4.ap-northeast-2.compute.amazonaws.com/plants/get_user_plants/",{
				headers: {
					Authorization: sessionStorage.getItem("token")},
			});
		  setPlants(response.data);
		} catch (e) {
		  setError(e);
		}
		setLoading(false);
	  };
	  fetchPlants();
	}, []);
	
	if (loading) return <div>로딩중..</div>;
	if (error) return <div>에러가 발생했습니다</div>;

	/* 일지 추가하기*/
	const navigateToCreate = () => {
		/* 식물일지 추가하기 버튼 누를때 새로운 일지를 추가하는 페이지로*/
		navigate(`/plant/${plantid}/diary/create`);
	};

	/* 식물 추가 */
	const navigateToCreateplant = () => {
		navigate(`/plant/addplant/createplant`);
	};

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

	return (
		<Page>
			<Sidebar>
				<img 
				src={userimageSrc} 
				alt="preview-img" 
				style={userimagestyle} 
				/>
				<Usernick> 
					{sessionStorage.getItem("username")} 님
					</Usernick>
				<AddBtn onClick={navigateToCreateplant}>
					식물 추가
				</AddBtn>
				<Sidelist>
						{plants.map((plant) => (
							<div
							onChange={() => {
								setIid(plant.id);
								setPlantname(plants[plant.id].name);
								setPlantdate("키운지 D+" + getUserplantPost1.ndate + "일 째");
								navigate(`/plant/${plant.id}`);
							}}>	
	 						<Plant plant={plant} />
							</div>
						))}
				</Sidelist>
			</Sidebar>
			<label
				onMouseOver={() => setIsHovering(1)}
				onMouseOut={() => setIsHovering(0)}
			>
				{isHovering ? (
					<Link to="addplant">
						<Plantname>
							{plantname}
							<PlantsetH>⚙️</PlantsetH>
						</Plantname>

						<Plantdday>{plantdate}</Plantdday>
					</Link>
				) : (
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
				{getUserplantPost1.map((diary) => (
					<Link to={`diary/${diary.id - 1}`}>
						<LogList key={diary.id}>									<Logplantimg>
							<Logtitle>{diary.title}</Logtitle>
							<Logdate>{diary.created_at}</Logdate>
							</Logplantimg>
						</LogList>
					</Link>
				))}

			</LogListsec>
		</Page>
	);
};

export default Main;
