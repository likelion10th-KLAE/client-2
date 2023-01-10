import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
	Editbtn,
	Infoback,
	PageBack, 
	PageTitle, 
	Savebtn, 
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
	Watertxtb,
	Nutritxt,
	Nutritxtb,
	Repottxt,
	Repottxtb,
	Firstdaytxt,
	Firstdaytxtb,
	Clicktxt,
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
import { useCallback } from "react";

const Editplant= () => {

/* 정보 받아오기 */
const oneplant = {
    "id": 1,
    "plant": "자작나무",
    "name": "자작나무",
    "userplant_image": null,
    "temperature": "20",
    "light": 20,
    "water_amount": 200,
    "last_watered": 20,
    "tonic": 20,
    "repot": 20,
    "start_date": 20,
    "extra1": null,
    "extra2": null
}

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

/***checkbox 여부에 따라 디자인 변경 ***/
const [waterCheck, setWaterCheck] = useState(false);
const [nutriCheck, setNutriCheck] = useState(false);
const [repotCheck, setRepotCheck] = useState(false);
const [firstCheck, setFirstCheck] = useState(false);
const [clickCheck, setClickCheck] = useState(false);

useEffect(()=>{
	oneplant.last_watered === null?setWaterCheck(false): setWaterCheck(true)
	oneplant.tonic === null?setNutriCheck(false): setNutriCheck(true)
	oneplant.repot === null?setRepotCheck(false): setRepotCheck(true)
	oneplant.start_date === null?setFirstCheck(false): setFirstCheck(true)

})

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
			<PageTitle>식물 정보 수정</PageTitle>
			<Editbtn
			onClick={onClickSave}
			>
			저장하기
			</Editbtn>
			<Infoback>
				<SpecTxt>식물 종</SpecTxt>
				<SpecInput 
				defaultValue={oneplant.plant}
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
						id="pic"
						name="pic"
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
				defaultValue={oneplant.name}/>

				<Growtmp>생육 온도(℃)</Growtmp>
				<Growtmpinput 
				id="tmp"
				name="tmp"
				onChange={onChangeInfo}
				defaultValue={oneplant.temperature}/>

				<Sunshine>일조량(lux)</Sunshine>
				<Sunshineinput 
				id="sun"
				name="sun"
				onChange={onChangeInfo}
				defaultValue={oneplant.light}/>

				<Water>1회 급수량(ml)</Water>
				<Waterinput 
				id="water"
				name="water"
				onChange={onChangeInfo}
				defaultValue={oneplant.water_amount}/>

				<Detail >추가 세부 정보 입력</Detail>
				<TodoandA>Todos and Anniversary</TodoandA>
				<Clickandinput>클릭 후 입력하세요.</Clickandinput>
				
				<label>
					<Watericon/>
					{waterCheck?(
						<>
						<WaterCB 
							type="checkbox"
							id="waterCB"
							name="checkbox"
							checked
							onClick={(e)=>{
								checkCSS(e)
								checkData(e)
							}}
							></WaterCB>
							<Watertxtb>마지막 급수 날짜</Watertxtb>
							<Waterinputunder 
							type="text" 
							id="last_water"
							name="last_water"
							checked
							onChange={onChangeInfo}
							defaultValue={oneplant.last_watered}
							>
							</Waterinputunder>
						</>
					):(
						<>
							<WaterCB 
							type="checkbox"
							id="waterCB"
							name="checkbox"
							onClick={(e)=>{
							checkCSS(e)
							checkData(e)
							}}
							></WaterCB>
							<Watertxt>마지막 급수 날짜</Watertxt>
							<Waterinputunder 
							type="text" 
							id="last_water"
							name="last_water"
							disabled
							onChange={onChangeInfo}
							defaultValue=""
							>
							</Waterinputunder>
					</>
					)}
				</label>
				
				<label>
				<Nutriicon/>
					{nutriCheck?(
						<>
							<NutriCB 
								type="checkbox"
								id="nutriCB"
								name="checkbox"
								checked
								onClick={(e)=>{
									checkCSS(e)
									checkData(e)
								}}
							></NutriCB>
							<Nutritxtb>영양제 투여 주기</Nutritxtb>
							<Nutriinputunder 
								type="text" 
								id="nutri"
								name="nutri"
								onChange={onChangeInfo}
								defaultValue={oneplant.tonic}>
							</Nutriinputunder>
						</>
					):(
						<>
							<NutriCB 
								type="checkbox"
								id="nutriCB"
								name="checkbox"
								onClick={(e)=>{
									checkCSS(e)
									checkData(e)
								}}
							></NutriCB>
							<Nutritxt>영양제 투여 주기</Nutritxt>
							<Nutriinputunder 
								type="text" 
								id="nutri"
								name="nutri"
								disabled
								onChange={onChangeInfo}
								defaultValue=""
							>
							</Nutriinputunder>
					</>
					)}
				</label>
				
				<label>
					<Repoticon/>
					{repotCheck?(
						<>
							<RepotCB 
								type="checkbox"
								id="repotCB"
								name="checkbox"
								checked
								onClick={checkCSS}
							></RepotCB>
							<Repottxtb>분갈이 주기</Repottxtb>
							<Repotinputunder 
							type="text" 
							id="repot"
							name="repot"
							onChange={onChangeInfo}
							defaultValue={oneplant.repot}>
							</Repotinputunder>
						</>
					):(
						<>
							<RepotCB 
								type="checkbox"
								id="repotCB"
								name="checkbox"
								onClick={checkCSS}
							></RepotCB>
							<Repottxt>분갈이 주기</Repottxt>
							<Repotinputunder 
								type="text" 
								id="repot"
								name="repot"
								disabled
								onChange={onChangeInfo}
								defaultValue=""
							></Repotinputunder>
						</>
					)}
					
				</label>
				
				<label>
					
					<Firstdayicon/>

					{firstCheck?(
						<>
							<FirstdayCB 
								type="checkbox"
								id="firstCB"
								name="checkbox"
								onClick={checkCSS}
								checked
							></FirstdayCB>
							<Firstdaytxtb>식물과 처음 함께 한 날</Firstdaytxtb>
							<Firstdayinputunder 
								type="text" 
								id="first"
								name="first"
								onChange={onChangeInfo}
								defaultValue={oneplant.start_date}
							>
							</Firstdayinputunder>
						</>
					):(
						<>
							<FirstdayCB 
								type="checkbox"
								id="firstCB"
								name="checkbox"
								onClick={checkCSS}
							></FirstdayCB>
							<Firstdaytxt>식물과 처음 함께 한 날</Firstdaytxt>
							<Firstdayinputunder 
								type="text" 
								id="first"
								name="first"
								disabled
								onChange={onChangeInfo}
								defaultValue=""
								>
							
							</Firstdayinputunder>
						</>
					)}
					
				</label>
				
				<label>
					
					<Clickicon/>
					{clickCheck?(
						<>
						<ClickCB 
							type="checkbox"
							id="clickCB"
							name="checkbox"
							onClick={checkCSS}
							checked
						></ClickCB>
						<Clicktxtb 
						placeholder={oneplant.extra1}
						></Clicktxtb>
						<Clickinputunder 
							type="text" 
							id="click"
							name="click"
							onChange={onChangeInfo}
							defaultValue={oneplant.extra2}>

						</Clickinputunder>
					</>
					):(
					<>
						<ClickCB 
							type="checkbox"
							id="clickCB"
							name="checkbox"
							onClick={checkCSS}
						></ClickCB>
						<Clicktxt
							disabled
							placeholder="클릭하여 항목을 추가하세요"
						></Clicktxt>
						<Clickinputunder 
							type="text" 
							id="click"
							name="click"
							disabled
							onChange={onChangeInfo}
							defaultValue=""
						></Clickinputunder>
					</>
					)}
				</label>
			</Infoback>
		</PageBack>
	</div>;
};

export default Editplant;
