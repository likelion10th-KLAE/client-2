import React from "react";
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

const Diary = () => {
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

		<Plantname>식물 이름</Plantname>
		<Plantdday>키운지 D+nnn일 째</Plantdday>import React from "react";

		<Back>
			<Logtitle type="text" placeholder="일지 제목을 입력하세요."></Logtitle>
			<Sharebtn>공유하기</Sharebtn>
			<Editbtn>수정하기</Editbtn>

			<Growinfo>생육 정보</Growinfo>

			<Watertxt>급수 여부 / 급수량</Watertxt>
			<Waterinput/>

			<Drugtxt>생육 보조제 투약 여부</Drugtxt>
			<Druginput/>

			<Newtxt>새로운 생장 변화</Newtxt>
			<Newinput/>

			<Todaylog>오늘의 일지:</Todaylog>
			<Dday>키운지 nnn일차</Dday>

			<Imageadd/> {/* 수정 예정!*/}
			{/*<Logwrite type="textarea" placeholder="일지 내용을 입력하세요."></Logwrite>*/}
		</Back>
	</Page>
	</div>;
};

export default Diary;
