import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useParams, useLocation } from "react-router-dom";
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
	let { plantid } = useParams();
	const [isHovering, setIsHovering] = useState(0);

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
							<Sideplantnameclicked>{plant.name}</Sideplantnameclicked>
						</Sideplantpicclicked>
					</Listcompoclicked>
				) : (
					<Listcompo>
						<Sideplantpic>
							<Sideplantname>{plant.name}</Sideplantname>
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
	const navigate = useNavigate();

	const [userimageSrc, setUserimageSrc] = useState(Usericon);
	const [plantname, setPlantname] = useState("");

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

	const [plants, setPlants] = useState([]);
	const [diaries, setDiaries] = useState([]);

	const getPlants = useCallback(async () => {
		await axios({
			method: "get",
			url: `http://ec2-3-39-207-4.ap-northeast-2.compute.amazonaws.com/plants/get_user_plants/`,
			headers: { Authorization: sessionStorage.getItem("token") },
		}).then((response) => {
			setPlants(response.data);
			setPlantname(response.data[0].name);
		});
	});

	useEffect(() => {
		getPlants();
	}, []);

	const getDiary = async (id) => {
		await axios({
			method: "get",
			url: `http://ec2-3-39-207-4.ap-northeast-2.compute.amazonaws.com/account/get_userplant_post/${id}`,
			headers: { Authorization: sessionStorage.getItem("token") },
		}).then((response) => {
			console.log(response.data);
			setDiaries(response.data);
		});
	};

	return (
		<Page>
			<Sidebar>
				{sessionStorage.getItem("profile") == "null" ? (
					<img src={userimageSrc} alt="preview-img" style={userimagestyle} />
				) : (
					<img src={sessionStorage.getItem("profile")} style={userimagestyle} />
				)}

				<Usernick>{sessionStorage.getItem("username")} 님</Usernick>
				<AddBtn onClick={navigateToCreateplant}>식물 추가</AddBtn>
				<Sidelist>
					{plants.map((p) => (
						<div
							onClick={() => getDiary(p.id)}
							onChange={() => {
								setPlantname(p.name);
								navigate(`/plant/${p.id}`);
							}}
						>
							<Plant plant={p} />
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
						{diaries.lenght >= 1 ? (
							<Plantdday>키운지 D+{diaries[0].ndate}일 째</Plantdday>
						) : (
							""
						)}
					</Link>
				) : (
					<Link to="addplant">
						<Plantname>
							{plantname}
							<Plantset>⚙️</Plantset>
						</Plantname>
						{diaries.lenght >= 1 ? (
							<Plantdday>키운지 D+{diaries[0].ndate}일 째</Plantdday>
						) : (
							""
						)}
					</Link>
				)}
			</label>

			<Infoeditbtn onClick={navigateToCreate}>
				<EditImg />
				<EditTxt>식물 일지 추가하기</EditTxt>
			</Infoeditbtn>
			<LogPage />
			<LogListsec>
				{diaries.map((diary) => (
					<Link to={`diary/${diary.id - 1}`}>
						<LogList key={diary.id}>
							{" "}
							<Logplantimg>
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
