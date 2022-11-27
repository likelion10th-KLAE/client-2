import React, { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
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
	Sharebtn,
	Editbtn,
	Growinfo,
	Watertxt,
	Drugtxt,
	Newtxt,
	Waterinput,
	Druginput,
	Newinput,
	Todaylog,
	Dday,
	Imageadd,
	Logwrite
} from "./styled";
import Img from "../../../assets/diary/일지 작성 페이지_image.png";

const Diary = () => {
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
	let { diaryid } = useParams();
	
	const [ diarytitle, setDiarytitle ] = useState(user1[plantid].diary[diaryid].title);
  
	const [imgFile, setImgFile] = useState("");
	const imgRef = useRef();


	const saveImgFile = () => {
		const file = imgRef.current.files[0];
		const reader = new FileReader();			
		reader.readAsDataURL(file);
		reader.onloadend = () => {
			setImgFile(reader.result);
		   };
}

	return <div>
	<Page>
		<Sidebar>
		<Userpic/>
			<Usernick>(닉네임) 님</Usernick>
			<Sidelist>
				<Listcompo>
					<Sideplantpic/><Sideplantname>식물 1</Sideplantname>
					</Listcompo>
				<Listcompoclicked>
					<Sideplantpicclicked/>
					<Sideplantnameclicked>식물 2</Sideplantnameclicked>
				</Listcompoclicked>
			</Sidelist>
		</Sidebar>

		<Plantname>{user1[plantid].name}</Plantname>
		<Plantdday>키운지 D+{user1[plantid].dday}일 째</Plantdday>

		<Back>
			<Logtitle placeholder={diarytitle}></Logtitle>
			<Link to="community">
				<Sharebtn>공유하기</Sharebtn>
			</Link>
			<Editbtn>수정하기</Editbtn>

			<Growinfo>생육 정보</Growinfo>

			<Watertxt>급수 여부 / 급수량</Watertxt>
			<Waterinput placeholder={user1[plantid].diary[diaryid].water}/>

			<Drugtxt>생육 보조제 투약 여부</Drugtxt>
			<Druginput placeholder={user1[plantid].diary[diaryid].drug}/>

			<Newtxt>새로운 생장 변화</Newtxt>
			<Newinput placeholder={user1[plantid].diary[diaryid].new}/>

			<Todaylog>오늘의 일지:</Todaylog>
			<Dday>키운지 {user1[plantid].dday}일차</Dday>
			<label>
				<Imageadd />
				<img
				src={imgFile ? imgFile :`/images/icon/user.png`}
				alt="프로필 이미지"
				/>

				<input
					type="file"
					accept="image/*"
					id="profileImg"
					onChange={saveImgFile}
					ref={imgRef}/>
			</label>
			{/* 수정 예정!*/}
			{/*<Logwrite type="textarea" placeholder="일지 내용을 입력하세요."></Logwrite>*/}
		</Back>
	</Page>
	</div>;
};

export default Diary;
