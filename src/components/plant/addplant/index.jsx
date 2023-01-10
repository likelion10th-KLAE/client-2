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
	Watertxtb,
	Nutritxt,
	Nutritxtb,
	Repottxt,
	Repottxtb,
	Firstdaytxt,
	Firstdaytxtb,
	Clicktxtdiv,
	Clicktxtdivb,
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
			<PageTitle>식물 정보 확인</PageTitle>
			{/*<Savebtn>저장하기</Savebtn>*/}
			<Editbtn onClick={navigateToEdit}>수정하기</Editbtn>
			<Infoback>
				<SpecTxt>식물 종</SpecTxt>
				<SpecDiv>
				{oneplant.plant}
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
					{oneplant.name}
				</Plantnamediv>

				<Growtmp>생육 온도(℃)</Growtmp>
				<Growtmpdiv>
					{oneplant.temperature}
				</Growtmpdiv>

				<Sunshine>일조량(lux)</Sunshine>
				<Sunshinediv>
					{oneplant.light}
				</Sunshinediv>

				<Water>1회 급수량(ml)</Water>
				<Waterdiv>
					{oneplant.water_amount}
				</Waterdiv>

				<Detail>추가 세부 정보 입력</Detail>
				<TodoandA>Todos and Anniversary</TodoandA>
				<Clickandinput>클릭 후 입력하세요.</Clickandinput>
				
				{oneplant.last_watered===null?(
					<>	
						<WaterCB 
							type="checkbox"
							disabled
						></WaterCB>
						<Watericon/>
						<Watertxt>마지막 급수 날짜</Watertxt>
					</>
				):(
					<>
						<WaterCB 
							type="checkbox"
							disabled
							checked
						></WaterCB>
						<Watericon/>
						<Watertxtb>마지막 급수 날짜</Watertxtb>
					</>
					
				)}
				<Waterdivunder type="text">
				{oneplant.last_watered}
				</Waterdivunder>


				{oneplant.tonic===null?(
					<>
					<NutriCB 
					disabled
					type="checkbox"
					></NutriCB>
					<Nutritxt>영양제 투여 주기</Nutritxt>
					</>
				):(
					<>
					<NutriCB 
					checked
					disabled
					type="checkbox"
					></NutriCB>
					<Nutritxtb>영양제 투여 주기</Nutritxtb>
					</>
				)}
				<Nutriicon/>
				<Nutridivunder type="text">
				{oneplant.tonic}
				</Nutridivunder>


				{oneplant.repot===null?(
					<>
					<RepotCB 
					type="checkbox"
					disabled
					></RepotCB>
					<Repottxt>분갈이 주기</Repottxt>
					</>
				):(
					<>
					<RepotCB 
					type="checkbox"
					disabled
					checked
					></RepotCB>
					<Repottxtb>분갈이 주기</Repottxtb>
					</>		
				)}
				<Repoticon/>
				
				<Repotdivunder type="text">
				{oneplant.repot}
				</Repotdivunder>

				{oneplant.start_date===null?(
					<>
					<FirstdayCB 
					type="checkbox"
					disabled
					></FirstdayCB>
					<Firstdaytxt>식물과 처음 함께 한 날</Firstdaytxt>
					</>
				):(
					<>
					<FirstdayCB 
					type="checkbox"
					checked
					disabled
					></FirstdayCB>
					<Firstdaytxtb>식물과 처음 함께 한 날</Firstdaytxtb>
					</>
				)}
				<Firstdayicon/>
				
				<Firstdaydivunder type="text">
				{oneplant.start_date}
				</Firstdaydivunder>

				
				{oneplant.extra1===null?(
					<>
					<ClickCB 
					type="checkbox"
					disabled>
					</ClickCB>
					<Clicktxtdiv>
					{oneplant.extra1}
					</Clicktxtdiv>
					</>
				):(
					<>
					<ClickCB 
					type="checkbox"
					disabled
					checked>
					</ClickCB>
					<Clicktxtdiv>
					{oneplant.extra1}
					</Clicktxtdiv>
					</>
				)}
				
				<Clickicon/>
				<Clickdivunder type="text">
				{oneplant.extra2}
				</Clickdivunder>
			</Infoback>
		</PageBack>
	</div>;
};

export default Addplant;

