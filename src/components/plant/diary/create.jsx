import React, { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
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

const Create = () => {
	const user1=[{
		id: 0,
		name: "식물 1",
		dday: 333,
		diary:
		[
			{
				id: 0,
				title: "식물을 처음 키워본다,,,",
				date: "2022.02.26",
				path: "diary/0",
				water: "1",
				drug: "2",
				new: "3",
				imagepath:"",
				text:"일지 쓰기 귀찮지ㅏㅁㄴ 열심히 써보자구 오이오이오이",
			},
			{
				id: 1,  
				title: "익숙하지 않은 식물,,, 설마 내가 죽이지는",
				date: "2022.03.01",
				path: "diary/1",
				water: "11",
				drug: "22",
				new: "33",
				imagepath:"",
				text:"않겠지.....",
			},
			{
				id: 2,
				title: "오이오이 물주는걸 깜빡할 뻔",
				date: "2022.03.10",
				path: "diary/2",
				water: "111",
				drug: "222",
				new: "333",
				imagepath:"",
				text:"하지만 물은 줬지",
			},
			{
				id: 3,
				title: "식물 ㄱㅇㅇ >_<",
				date: "2022.03.15",
				path: "diary/0/3",
				water: "1111",
				drug: "2222",
				new: "3333",
				imagepath:"",
				text:"내가 ㄱ키워서 더 귀엽나벼 >-<",
			},
			{
				id: 4,
				title: "식물 ㄱㅇㅇ >_<",
				date: "2022.03.15",
				path: "diary/4",
				water: "11111",
				drug: "22222",
				new: "33333",
				imagepath:"",
				text:"내가 키워서 더 귀엽나벼 아이좋아>-<",
			},
			{
				id: 5,
				title: "식물 ㄱㅇㅇ >_<",
				date: "2022.03.15",
				path: "diary/5",
				water: "111111",
				drug: "222222",
				new: "333333",
				imagepath:"",
				text:"내가 키워서 더 귀엽나벼 아이좋아 좋아좋아>-<",
			}
		]
	},
	{ 
		id: 1,
		name: "식물 2",
		dday: 22,
		diary: 
			[
				{
					id: 0,
					title: "두번째 식물 도전!",
					date: "2022.03.28",
					path: "diary/0",
					water: "4",
					drug: "5",
					new: "6",
					imagepath:"",
					text:"두번째는 잘 할 수 있지렁",
				},
				{
					id: 1,
					title: "역시 난 식물 천재야",
					date: "2022.04.04",
					path: "diary/1",
					water: "44",
					drug: "55",
					new: "66",
					imagepath:"",
					text:"난,,,너무 멋져,,,",
				},
				{
					id: 2,
					title: "이정도면 다육대학교 식물학 박사 아니냐",
					date: "2022.04.15",
					path: "diary/2",
					water: "444",
					drug: "555",
					new: "666",
					imagepath:"",
					text:"이중전공 바꿔봐?",
				}]
		}] 

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
	}

	return <div>
	<Page>
		<Sidebar>
				<Userpic />
				<Usernick>(닉네임) 님</Usernick>
				<Sidelist>
				{user1.map((plant)=>(
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
			

		<Plantname>{user1[plantid].name}</Plantname>
		<Plantdday>키운지 D+{user1[plantid].dday}일 째</Plantdday>

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
