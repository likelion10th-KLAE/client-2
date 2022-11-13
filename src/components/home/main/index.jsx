import React from "react";
import {
	Sidebar,
	Userinfo,
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

const Main = () => {
	return <div>
		<Page>
		</Page>
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
		<Plantdday>키운지 D+nnn일 째</Plantdday>

		<Infoeditbtn>
			<EditImg/>
			<EditTxt>식물 일지 추가하기</EditTxt>
		</Infoeditbtn>

		<LogPage/>
		<LogListsec>
			<LogList>
				<Logplantimg/>
				<Logtitle>일지 제목</Logtitle>
				<Logdate>2022.06.25</Logdate>
			</LogList>
			<LogList>
				<Logplantimg/>
				<Logtitle>일지 제목</Logtitle>
				<Logdate>2022.06.25</Logdate>
			</LogList>
			<LogList>
				<Logplantimg/>
				<Logtitle>일지 제목</Logtitle>
				<Logdate>2022.06.25</Logdate>
			</LogList>
		</LogListsec>
		
		</div>;
};

export default Main;
