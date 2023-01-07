import React, { useState } from "react";
import {
	Editbtn,
	Infoback,
	PageBack, 
	PageTitle, 
	SpecTxt, 
	SpecInput, 
	BasicInfo, 
	Plantpic, 
	Plantpicback, 
	Imageback, 
	Imagepic, 
	Xback, 
	Xpic, 
	Plantname, 
	PlantnameInput, 
	Growtmp,
	Growtmpinput,
	Sunshine,
	Sunshineinput,
	Water,
	Waterinput,
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
	Nutritxt,
	Repottxt,
	Firstdaytxt,
	Clicktxt,
	Watertxtb,
	Nutritxtb,
	Repottxtb,
	Firstdaytxtb,
	Clicktxtb,
	Waterinputunder,
	Nutriinputunder,
	Repotinputunder,
	Firstdayinputunder,
	Clickinputunder,
	Main,
	Hide,
} from "./styled";
import Img from  "../../../assets/add_plant/my_plant.png";

const Createplant = () => {
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
/* */

/* X버튼 누르면 사진 지우기 */
const deletepic = () =>{
	setImageSrc(Img)
}

/* 식물 사진 스타일 조정 */
const plantstyle ={
	width: "18.75vw",
    height: "30vh",
	'borderRadius': '50%'
}
/***checkbox 여부에 따라 디자인 변경 ***/ /*코드 진짜 별로*/
const [waterCheck, setWaterCheck] = useState(false);
const [nutriCheck, setNutriCheck] = useState(false);
const [repotCheck, setRepotCheck] = useState(false);
const [firstCheck, setFirstCheck] = useState(false);
const [clickCheck, setClickCheck] = useState(false);

const checkCSS =(e)=>{
	switch(e.target.id){
		case 'waterCB':
			e.target.checked
			?setWaterCheck(true)
			:setWaterCheck(false)
			break;
		case 'nutriCB':
			e.target.checked
			?setNutriCheck(true)
			:setNutriCheck(false)
			break;
		case 'repotCB':
			e.target.checked
			?setRepotCheck(true)
			:setRepotCheck(false)
			break;
		case 'firstCB':
			e.target.checked
			?setFirstCheck(true)
			:setFirstCheck(false)
			break;
		case 'clickCB':
			e.target.checked
			?setClickCheck(true)
			:setClickCheck(false)
			break;
		}
}

/********* 체크된 데이터 입력값 받아오기 ************/
const checkedData = new Set();
const checkData=(e)=>{
	checkedData.add(e.target.id);
	console.log(checkedData);
}

/*****입력 데이터 받아오기*********/
const [info, setInfo] = useState({
	spec: "",
	pic:"",
	name: "",
	tmp: "",
	sun: "",
	water: "",
	last_water:"",
	nutri:"",
	repot:"",
	first:"",
	click:"",
})

const onChangeInfo = (e) =>{
	setInfo({
		...info,
		[e.target.name]:e.target.value,
	});
}

/************ 입력 데이터 넘기기 *****************/
const onClickSave =(e) =>{
	console.log(info);
}
	return <div>
		<PageBack>
			<PageTitle>식물 등록 및 정보 수정</PageTitle>
			<Editbtn
			onClick={onClickSave}
			>저장하기</Editbtn>
			<Infoback>
				<SpecTxt>식물 종</SpecTxt>
				<SpecInput 
				id="spec"
				name="spec"
				onChange={onChangeInfo}
				/>

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
				
				<label>
				<Hide>
					<input 
						type="file"
						onChange={(e)=>{
							encodeFileToBase64(e.target.files[0]);
							onChangeInfo(e);
						}}
					/>
				</Hide>
				<Imageback>
					<Imagepic/>
				</Imageback>
				</label>
				
				<label>
					<Xback onClick={deletepic}>
						<Xpic/>
					</Xback>
				</label>

				<BasicInfo>기본 정보 및 생육 환경</BasicInfo>
				<Plantname>식물 이름</Plantname>
				<PlantnameInput
				id="name"
				name="name"
				onChange={onChangeInfo}
				/>

				<Growtmp>생육 온도(℃)</Growtmp>
				<Growtmpinput 
				id="tmp"
				name="tmp"
				onChange={onChangeInfo}
				/>

				<Sunshine>일조량(lux)</Sunshine>
				<Sunshineinput
				id="sun"
				name="sun"
				onChange={onChangeInfo}
				/>

				<Water>1회 급수량(ml)</Water>
				<Waterinput
				id="water"
				name="water"
				onChange={onChangeInfo}
				/>

				<Detail>추가 세부 정보 입력</Detail>
				<TodoandA>Todos and Anniversary</TodoandA>
				<Clickandinput>클릭 후 입력하세요.</Clickandinput>

				<label>
				<WaterCB 
					type="checkbox"
					id="waterCB"
					name="checkbox"
					onClick={(e)=>{
						checkCSS(e)
						checkData(e)
					}}
					></WaterCB>
					<Watericon/>

					{waterCheck?(
						<>
							<Watertxtb>마지막 급수 날짜</Watertxtb>
							<Waterinputunder
								type="text" 
								id="last_water"
								name="last_water"
								onChange={onChangeInfo}
								placeholder="날짜로 입력 (yyyy.mm.dd)">
							</Waterinputunder>
						</>
					):(
						<>
							<Watertxt>마지막 급수 날짜</Watertxt>
							<Waterinputunder 
							type="text" 
							id="last_water"
							name="last_water"
							disabled
							onChange={onChangeInfo}
							placeholder="날짜로 입력 (yyyy.mm.dd)">
							</Waterinputunder>
					</>
					)}
					
				</label>
				

				<label>
					<NutriCB 
					type="checkbox"
					id="nutriCB"
					name="checkbox"
					onClick={(e)=>{
						checkCSS(e)
						checkData(e)
					}}></NutriCB>
					<Nutriicon/>

					{nutriCheck?(
						<>
							<Nutritxtb>영양제 투여 주기</Nutritxtb>
							<Nutriinputunder 
								type="text" 
								id="nutri"
								name="nutri"
								onChange={onChangeInfo}
								placeholder="일수로 입력">

							</Nutriinputunder>
						</>
					):(
						<>
							<Nutritxt>영양제 투여 주기</Nutritxt>
							<Nutriinputunder 
								type="text" 
								id="nutri"
								name="nutri"
								disabled
								onChange={onChangeInfo}
								placeholder="일수로 입력">
							</Nutriinputunder>
						</>)}
				</label>

				<label>
					<RepotCB 
					type="checkbox"
					id="repotCB"
					name="checkbox"
					onClick={(e)=>{
						checkCSS(e)
						checkData(e)
					}}
					></RepotCB>
					<Repoticon/>

					{repotCheck?(
						<>
							<Repottxtb>분갈이 주기</Repottxtb>
							<Repotinputunder 
								type="text" 
								id="repot"
								name="repot"
								onChange={onChangeInfo}
								placeholder="일수로 입력"
								>

							</Repotinputunder>
						</>
					):(
						<>
							<Repottxt>분갈이 주기</Repottxt>
							<Repotinputunder 
								type="text" 
								id="repot"
								name="repot"
								disabled
								onChange={onChangeInfo}
								placeholder="일수로 입력"
								>

								</Repotinputunder>
						</>)}
				</label>

				<label>
					<FirstdayCB 
					type="checkbox"
					id="firstCB"
					name="checkbox"
					onClick={(e)=>{
						checkCSS(e)
						checkData(e)
					}}
					></FirstdayCB>
					<Firstdayicon/>

					{firstCheck?(
						<>
							<Firstdaytxtb>
								식물과 처음 함께 한 날
							</Firstdaytxtb>
							<Firstdayinputunder 
								type="text" 
								id="first"
								name="first"
								onChange={onChangeInfo}
								placeholder="날짜로 입력 (yyyy.mm.dd)"
							></Firstdayinputunder>
						</>
					):(
						<>
							<Firstdaytxt>
								식물과 처음 함께 한 날
							</Firstdaytxt>
							<Firstdayinputunder 
								type="text" 
								id="first"
								name="first"
								disabled
								onChange={onChangeInfo}
								placeholder="날짜로 입력 (yyyy.mm.dd)"
							></Firstdayinputunder>
						</>)}
				</label>
				
				<label>
					<ClickCB 
						type="checkbox"
						id="clickCB"
						name="checkbox"
						onClick={(e)=>{
							checkCSS(e)
							checkData(e)
						}}>

					</ClickCB>
					<Clickicon/>

					{clickCheck?(
						<>
							<Clicktxtb 
								placeholder="클릭하여 항목을 추가하세요.">
							</Clicktxtb>
							<Clickinputunder 
								type="text" 
								id="click"
								name="click"
								onChange={onChangeInfo}
								placeholder="항목을 추가 후 자유롭게 입력하세요.">
							</Clickinputunder>
						</>
					):(
						<>
							<Clicktxt
								disabled
								placeholder="클릭하여 항목을 추가하세요.">
							</Clicktxt>
							<Clickinputunder 
								type="text" 
								id="click"
								name="click"
								disabled
								onChange={onChangeInfo}
								placeholder="항목을 추가 후 자유롭게 입력하세요.">
							</Clickinputunder>
						</>
					)}
					

					
				</label>

			</Infoback>
		</PageBack>
	</div>;
};

export default Createplant;