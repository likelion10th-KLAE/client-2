import React from "react";
import {
	LoginSection,
	LoginLeft,
	LeftTitle,
	LeftLogo,
	LoginRight,
	RightTitle,
	RightSubTitle,
	LoginInputDiv,
	LoginButton,
	LoginLink,
	// KakaoLogo,
	IdIcon,
	LoginInput,
	PwIcon,
} from "./styled";
import axios from "axios";
import { useState } from "react";

const Login = () => {
	const [id, setId] = useState("");
	const [password, setPassword] = useState("");

	const handleLoginButton = () => {
		axios
			.post(
				"http://ec2-3-39-207-4.ap-northeast-2.compute.amazonaws.com/account/login/",
				{
					email: id,
					password: password,
				}
			)
			.then((response) => {
				console.log(response);
				if (response.status === 200) {
					sessionStorage.setItem("userID", id);
					sessionStorage.setItem("userPW", password);
				}
			})
			.catch((error) => {
				console.log(error.response);
				if (error.response.status === 404) {
					alert("존재하지 않는 아이디거나 비밀번호가 틀렸습니다.");
				} else if (error.response.status === 400) {
					alert("아이디와 비밀번호 모두 입력해주세요.");
				}
			});
	};

	return (
		<LoginSection>
			<LoginLeft>
				<LeftTitle>
					The Best Fit <br />
					for My Plant
				</LeftTitle>
				<LeftLogo>Logo</LeftLogo>
			</LoginLeft>
			<LoginRight>
				<RightTitle>KLAE 에 오신 것을 환영합니다!</RightTitle>
				<RightSubTitle>지금 로그인하고 반려식물을 확인해보세요.</RightSubTitle>
				<LoginInputDiv>
					<IdIcon />
					<LoginInput
						placeholder="ID"
						value={id}
						onChange={(e) => setId(e.target.value)}
					/>
				</LoginInputDiv>
				<LoginInputDiv>
					<PwIcon />
					<LoginInput
						placeholder="PW"
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</LoginInputDiv>
				<LoginButton onClick={handleLoginButton}>LOGIN</LoginButton>
				<LoginLink>계정이 없으신가요? 지금 회원가입하세요!</LoginLink>
			</LoginRight>
		</LoginSection>
	);
};

export default Login;
