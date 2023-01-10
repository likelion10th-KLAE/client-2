import React, { useState, useEffect } from "react";
import {
	Sidebar,
	Usernick,
	Page,
	Text1,
	Text2,
	Recommendbtn,
	Text3,
	Registerbtn
} from "./styled";
import { Link } from "react-router-dom";
import axios from 'axios';
import Usericon from "../../../assets/diary/유저 정보란.png";


const Lognone = () => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [imageSrc, setImageSrc] = useState(Usericon);
/*
	useEffect(() => {
	  const fetchUsers = async () => {
		try {
		  setError(null);
		  setUser(null);
		  setLoading(true);
		  const response = await axios.get(
			"http://ec2-3-39-207-4.ap-northeast-2.compute.amazonaws.com/account/mypage/"
		  );
		  setUser(response.data); 
		} catch (e) {
		  setError(e);
		}
		setLoading(false);
	  };
  
	  fetchUsers();
	}, []);
  
	if (loading) return <div>로딩중..</div>;
	if (error) return <div>에러가 발생했습니다</div>;
	if (!user) return null;
	*/
	const accountMypage = 
	{
		"email":"klae@gmail.com",
		"password":"pbkdf2_sha256$390000$m9CtGlBmyIvkCL341Yhfjo$9aCy0HzvKhde8lGZQHv6uxfLCyKhr78hY4O2L8gkS5w=",
		"username":"klae",
		"profile_image":null
	}

	const imagestyle ={
		position: 'absolute',
		width: '2.57vw',
	    height: '4.22vh',
	    left: '2.85vw',
    	top: '4vh',
    	'background-repeat': 'no-repeat',
    	'background-size': 'contain'
	}

	return <div>
		<Page/>
		<Sidebar>
       		<img 
				src={imageSrc} 
				alt="preview-img" 
				style={imagestyle} 
			/>
			<Usernick> {accountMypage.username} 님</Usernick>
        </Sidebar>
			<Text1>
				일지가 비어있어요! <br/>
				식물을 등록하고 일지를 작성해보세요.
			</Text1>
			<Text2>
				키우고 있는 식물이 없다면 맞춤형 식물 추천을 받아보세요.
			</Text2>
			<Link to="/recommend">
				<Recommendbtn>
				식물 추천 받기
				</Recommendbtn>
			</Link>
			<Text3>
				이미 기르고 있는 식물이 있다면 KLAE에 등록하세요.
			</Text3>
			<Link to="/plant/addplant/createplant">
				<Registerbtn>
				식물 등록 하기
				</Registerbtn>
			</Link>
		</div>;
};

export default Lognone;
