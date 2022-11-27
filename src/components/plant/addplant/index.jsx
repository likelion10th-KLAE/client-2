import React from "react";
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
	Nutritxt,
	Repottxt,
	Firstdaytxt,
	Clicktxt,
	Waterinputunder,
	Nutriinputunder,
	Repotinputunder,
	Firstdayinputunder,
	Clickinputunder
} from "./styled";

const Addplant = () => {
	return <div>
		<PageBack>
			<PageTitle>식물 등록 및 정보 수정</PageTitle>
			<Savebtn>저장하기</Savebtn>
			<Editbtn>수정하기</Editbtn>
			<Infoback>
				<SpecTxt>식물 종</SpecTxt>
				<SpecInput/>
				<Plantpicback>
					<Plantpic/>
				</Plantpicback>
	
				<Imageback>
					<Imagepic/>
				</Imageback>
				<Xback>
					<Xpic/>
				</Xback>

				<BasicInfo>기본 정보 및 생육 환경</BasicInfo>
				<Plantname>식물 이름</Plantname>
				<PlantnameInput/>
				<Growtmp>생육 온도(℃)</Growtmp>
				<Growtmpinput/>
				<Sunshine>일조량(lux)</Sunshine>
				<Sunshineinput/>
				<Water>1회 급수량(ml)</Water>
				<Waterinput/>

				<Detail>추가 세부 정보 입력</Detail>
				<TodoandA>Todos and Anniversary</TodoandA>
				<Clickandinput>클릭 후 입력하세요.</Clickandinput>

				<WaterCB type="checkbox"></WaterCB>
				<Watericon/>
				<Watertxt>마지막 급수 날짜</Watertxt>
				<Waterinputunder type="text" placeholder="날짜로 입력 (yyyy.mm.dd)"></Waterinputunder>

				<NutriCB type="checkbox"></NutriCB>
				<Nutriicon/>
				<Nutritxt>영양제 투여 주기</Nutritxt>
				<Nutriinputunder type="text" placeholder="일수로 입력"></Nutriinputunder>

				<RepotCB type="checkbox"></RepotCB>
				<Repoticon/>
				<Repottxt>분갈이 주기</Repottxt>
				<Repotinputunder type="text" placeholder="일수로 입력"></Repotinputunder>

				<FirstdayCB type="checkbox"></FirstdayCB>
				<Firstdayicon/>
				<Firstdaytxt>식물과 처음 함께 한 날</Firstdaytxt>
				<Firstdayinputunder type="text" placeholder="날짜로 입력 (yyyy.mm.dd)"></Firstdayinputunder>

				<ClickCB type="checkbox"></ClickCB>
				<Clickicon/>
				<Clicktxt>클릭하여 항목을 추가하세요.</Clicktxt>
				<Clickinputunder type="text" placeholder="항목을 추가 후 자유롭게 입력하세요."></Clickinputunder>
			</Infoback>
		</PageBack>
	</div>;
};

export default Addplant;
