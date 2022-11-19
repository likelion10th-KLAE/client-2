import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
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
	Page
} from "./styled";

function Plant({plant}){
	const [isHovering, setIsHovering] = useState(1);
	
	return(
		<div
		onMouseOver={()=> setIsHovering(0)}
		onMouseOut={()=> setIsHovering(1)}
		>
			{isHovering ? (	
					<Listcompo>
						<Sideplantpic>
						<Sideplantname>{plant.name}</Sideplantname>
						</Sideplantpic>
					</Listcompo>	
			):(
					<Listcompoclicked>
						<Sideplantpicclicked>
						<Sideplantnameclicked>{plant.name}</Sideplantnameclicked>
					</Sideplantpicclicked>
					</Listcompoclicked>
			)}
		</div>
	)
};

function Diary({diary}) {
	return(
		<Logplantimg>
		<Logtitle>{diary.title}</Logtitle>
		<Logdate>{diary.date}</Logdate>
		</Logplantimg>
	);
	}

function Main() {
	const plants = [
		{ 	
			id: 0,
			name: "식물 1",
			dday: 333,
			diary: [{
				id: 0,
				title: "식물을 처음 키워본다,,,",
				date: "2022.02.26",
				path: "diary/0"
			},
			{
				id: 1,
				title: "익숙하지 않은 식물,,, 설마 내가 죽이지는",
				date: "2022.03.01",
				path: "diary/1"
			},
			{
				id: 2,
				title: "오이오이 물주는걸 깜빡할 뻔",
				date: "2022.03.10",
				path: "diary/2"
			},
			{
				id: 3,
				title: "식물 ㄱㅇㅇ >_<",
				date: "2022.03.15",
				path: "diary/3"
			},
			{
				id: 3,
				title: "식물 ㄱㅇㅇ >_<",
				date: "2022.03.15",
				path: "diary/3"
			},
			{
				id: 3,
				title: "식물 ㄱㅇㅇ >_<",
				date: "2022.03.15",
				path: "diary/3"
			}
		]	
		},
		{ 
			id: 1,
			name: "식물 2",
			dday: 22,
			diary: [{
				id: 0,
				title: "두번째 식물 도전!",
				date: "2022.03.28",
				path: "diary/0"
			},
			{
				id: 1,
				title: "역시 난 식물 천재야",
				date: "2022.04.04",
				path: "diary/1"
			},
			{
				id: 2,
				title: "이정도면 다육대학교 식물학 박사 아니냐",
				date: "2022.04.15",
				path: "diary/2"
			}]
		}
	];

	const navigate = useNavigate();

	const navigateToCreate =()=>{
		navigate("/plant/:plantid/diary/create");
	};

	const [iid, setIid] = useState(0);
	const [diarylist, setDiarylist] = useState([
		plants[0].diary[0],
		plants[0].diary[1],
		plants[0].diary[2],
		plants[0].diary[3],
		plants[0].diary[4],
		plants[0].diary[5]  // 렌더링 구현해야함,,,
	]);
	
	
	
	return(
		<Page>
			<Sidebar>
				<Userpic/>
				<Usernick>(닉네임) 님</Usernick>
				<Sidelist>
					{plants.map(plant => (
						<label class="radio">
						<input 
							type="radio" 
							name="sidebar"
							id="radio"
							
							onClick={() => {
								
								setIid(plant.id)
								setDiarylist(plants[plant.id].diary)
								console.log(plants[iid].name, diarylist)
							}}
						 />
						<div
						onLoad={()=>{
							setDiarylist(plants[plant.id].diary);
						}} 
						>
						<Plant plant={plant} />
						</div>
					</label>
				))}
				
				</Sidelist>
			</Sidebar>
			<Plantname>{plants[iid].name}</Plantname>	
			<Plantdday>키운지 D+{plants[iid].dday}일 째</Plantdday>
			<Infoeditbtn onClick={navigateToCreate}>
				<EditImg/>
				<EditTxt>식물 일지 추가하기</EditTxt>
			</Infoeditbtn>

		<LogPage/>
		<LogListsec>
			{diarylist.map(diary => (
				<Link to={diary.path}>
					<LogList>
						<Diary diary={diary} key={diary}/>
					</LogList>
				</Link>
				
			))} 
		</LogListsec>
		</Page>
		)
};

export default Main;
