import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
	Editbtn,
	Infoback,
	PageBack, 
	PageTitle, 
	SpecTxt, 
	BasicInfo, 
	Plantpic, 
	Plantpicback, 
	Plantname, 
	Growtmp,
	Sunshine,
	Water,
	Detail,
	TodoandA,
	Clickandinput,
	WaterCB,
	NutriCB,
	RepotCB,
	FirstdayCB,
	ClickCB,
	Watericon,
	Nutriicon,
	Repoticon,
	Firstdayicon,
	Clickicon,
	Watertxt,
	Nutritxtb,
	Repottxt,
	Firstdaytxtb,
	Clicktxtdiv,
	Waterdivunder,
	Nutridivunder,
	Repotdivunder,
	Firstdaydivunder,
	Clickdivunder,
	SpecDiv,
	Plantnamediv,
	Growtmpdiv,
	Sunshinediv,
	Waterdiv,

} from "./styled";
import Img from  "../../../assets/add_plant/my_plant.png";

const Addplant = () => {

/* 정보 받아오기 */
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
			text:"cccccccc않겠지.....",
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
	  };
	});
  };
/* 수정하기 누르면 edit으로 이동*/
const navigate = useNavigate();
const navigateToEdit = () => {
		/* 해당 식물 아이디 값으로 이동 */
		navigate(`/plant/${plantid}/addplant/editplant`);
	};

/* 식물 사진 스타일 조정 */
const plantstyle ={
	width: "18.75vw",
    height: "30vh"
}


	return <div>
		<PageBack>
			<PageTitle>식물 등록 및 정보 수정</PageTitle>
			{/*<Savebtn>저장하기</Savebtn>*/}
			<Editbtn onClick={navigateToEdit}>수정하기</Editbtn>
			<Infoback>
				<SpecTxt>식물 종</SpecTxt>
				<SpecDiv>
					식물 종명
				</SpecDiv>


				{/* 식물 이미지 미리보기 */}
				<Plantpicback>
					<Plantpic>
						{imageSrc && 
						<img src={imageSrc} 
						alt="preview-img" 
    					style={plantstyle}
						/>	}  
					</Plantpic>    			
				</Plantpicback>

				<BasicInfo>기본 정보 및 생육 환경</BasicInfo>

				<Plantname>식물 이름</Plantname>
				<Plantnamediv>
				{user1[plantid].name}
				</Plantnamediv>

				<Growtmp>생육 온도(℃)</Growtmp>
				<Growtmpdiv>
					{user1[plantid].name}
				</Growtmpdiv>

				<Sunshine>일조량(lux)</Sunshine>
				<Sunshinediv>
					{user1[plantid].name}
				</Sunshinediv>

				<Water>1회 급수량(ml)</Water>
				<Waterdiv>
					{user1[plantid].name}
				</Waterdiv>

				<Detail>추가 세부 정보 입력</Detail>
				<TodoandA>Todos and Anniversary</TodoandA>
				<Clickandinput>클릭 후 입력하세요.</Clickandinput>

				<WaterCB 
				type="checkbox"
				></WaterCB>
				<Watericon/>
				<Watertxt>마지막 급수 날짜</Watertxt>
				<Waterdivunder type="text">
				{user1[plantid].name}
				</Waterdivunder>

				<NutriCB 
				checked
				disabled
				type="checkbox"
				></NutriCB>
				<Nutriicon/>
				<Nutritxtb>영양제 투여 주기</Nutritxtb>
				<Nutridivunder type="text">
				{user1[plantid].name}
				</Nutridivunder>

				<RepotCB 
				type="checkbox"
				></RepotCB>
				<Repoticon/>
				<Repottxt>분갈이 주기</Repottxt>
				<Repotdivunder type="text">
				{user1[plantid].name}
				</Repotdivunder>

				<FirstdayCB 
				type="checkbox"
				checked
				disabled
				></FirstdayCB>
				<Firstdayicon/>
				<Firstdaytxtb>식물과 처음 함께 한 날</Firstdaytxtb>
				<Firstdaydivunder type="text">
				{user1[plantid].name}
				</Firstdaydivunder>

				<ClickCB type="checkbox"></ClickCB>
				<Clickicon/>
				<Clicktxtdiv>
					닉네임
				</Clicktxtdiv>
				<Clickdivunder type="text">
				{user1[plantid].name}
				</Clickdivunder>
			</Infoback>
		</PageBack>
	</div>;
};

export default Addplant;
