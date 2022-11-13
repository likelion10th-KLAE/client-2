/* 작성된 일지가 없는 경우 페이지입니당,,, 일단 로직 생각안해서 새로 페이지 파서 했는데 괜찮을까유,,? */
/* App.js에 코드 추가 : <Route path="plant" element={<Lognone />} /> (일지 없을 경우 메인 페이지) */
import React from "react";
//import { Link } from "react-router-dom";
import {
	Sidebar,
	Userpic,
	Usernick,
	Page,
	Text1,
	Text2,
	Recommendbtn,
	Text3,
	Registerbtn
} from "./styled";

const Lognone = () => {
	return <div>
		<Page/>
		<Sidebar>
        <Userpic/>
			<Usernick>(닉네임) 님</Usernick>
        </Sidebar>
			<Text1>
				일지가 비어있어요! <br/>
				식물을 등록하고 일지를 작성해보세요.
			</Text1>
			<Text2>
				키우고 있는 식물이 없다면 맞춤형 식물 추천을 받아보세요.
			</Text2>
            <Recommendbtn>
				식물 추천 받기
			</Recommendbtn>
			<Text3>
				이미 기르고 있는 식물이 있다면 KLAE에 등록하세요.
			</Text3>
			<Registerbtn>
				식물 등록 하기
			</Registerbtn>
		</div>;
};

export default Lognone;