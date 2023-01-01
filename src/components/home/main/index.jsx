import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
// import axios from 'axios';
import {
	Sidebar,
	Userpic,
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

function Plant({ plant }) {
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

function Diary({ diary }) {
	return (
		<Logplantimg>
			<Logtitle>{diary.title}</Logtitle>
			<Logdate>{diary.date}</Logdate>
		</Logplantimg>
	);
}

const Main = () => {
	let { plantid } = useParams();
	const [isHovering, setIsHovering] = useState(0)

	const user1 = [
		{
			id: 0,
			name: "식물 1",
			dday: 333,
			diary: [
				{
					id: 0,
					title: "식물을 처음 키워본다,,,",
					date: "2022.02.26",
					path: "diary/0",
				},
				{
					id: 1,
					title: "익숙하지 않은 식물,,, 설마 내가 죽이지는",
					date: "2022.03.01",
					path: "diary/1",
				},
				{
					id: 2,
					title: "오이오이 물주는걸 깜빡할 뻔",
					date: "2022.03.10",
					path: "diary/2",
				},
				{
					id: 3,
					title: "식물 ㄱㅇㅇ >_<",
					date: "2022.03.15",
					path: "diary/3",
				},
				{
					id: 4,
					title: "식물 ㄱㅇㅇ >_<",
					date: "2022.03.15",
					path: "diary/4",
				},
				{
					id: 5,
					title: "식물 ㄱㅇㅇ >_<",
					date: "2022.03.15",
					path: "diary/5",
				},
			],
		},
		{
			id: 1,
			name: "식물 2",
			dday: 22,
			diary: [
				{
					id: 0,
					title: "두번째 식물 도전!",
					date: "2022.03.28",
					path: "diary/0",
				},
				{
					id: 1,
					title: "역시 난 식물 천재야",
					date: "2022.04.04",
					path: "diary/1",
				},
				{
					id: 2,
					title: "이정도면 다육대학교 식물학 박사 아니냐",
					date: "2022.04.15",
					path: "diary/2",
				},
			],
		},
	];

	/* 일지 추가하기*/
	const navigate = useNavigate();
	const navigateToCreate = () => {
		/* 식물일지 추가하기 버튼 누를때 새로운 일지를 추가하는 페이지로*/
		navigate(`/plant/${plantid}/diary/create`);
	};

	/* 정보 보여주기 */
	const [iid, setIid] = useState(plantid);
	const [diary, setDiary] = useState(
		user1.map((plant) => user1[plantid].diary)
	);
	const [diarylist, setDiarylist] = useState(diary.shift());
	const [plantname, setPlantname] = useState([user1[plantid].name]);
	const [plantdate, setPlantdate] = useState([
		"키운지 D+" + user1[plantid].dday + "일 째",
	]);

	return (
		<Page>
			<Sidebar>
				<Userpic />
				<Usernick>(닉네임) 님</Usernick>
				<Sidelist>
					{user1.map((plant) => (
						<div
							onChange={() => {
								setIid(plant.id);
								setDiarylist(user1[plant.id].diary);
								setPlantname(user1[plant.id].name);
								setPlantdate("키운지 D+" + user1[plant.id].dday + "일 째");
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
					<Plantname>{plantname}</Plantname>
					<PlantsetH>⚙️</PlantsetH>
					<Plantdday>{plantdate}</Plantdday>
				</Link>
				):(
				<Link to="addplant">
					<Plantname>{plantname}</Plantname>
					<Plantset>⚙️</Plantset>
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
				{diarylist.map((diary) => (
					<Link to={diary.path}>
						<LogList>
							<Diary diary={diary} key={diary} />
						</LogList>
					</Link>
				))}
			</LogListsec>
		</Page>
	);
};

export default Main;
