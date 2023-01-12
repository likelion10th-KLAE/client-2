import React from "react";
import {
	SignUpLeft,
	SignUpSection,
	SignLeftTitle,
	SignLeftSubTitle,
	SignRight,
	SignRightTitle,
	SignRightForm,
	SignRigntFormTitle,
	SignRigntFormInput,
	SignRigntFormbutton,
	SignLoginLink,
} from "./styled";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmedPassword, setConfirmedPassword] = useState("");
	const [nickname, setNickname] = useState("");
	const navigate = useNavigate();
	const goLogin = () => {
		navigate("/login");
	};

	const handleSignUpButton = async () => {
		if (password === confirmedPassword) {
			try {
				await axios({
					method: "post",
					url: "http://ec2-3-39-207-4.ap-northeast-2.compute.amazonaws.com/account/signup/",
					data: {
						email: email,
						password: password,
						username: nickname,
					},
				});
				alert("회원가입이 완료되었습니다. 다시 로그인해주세요");
				setTimeout(() => {
					navigate("/login");
				}, 500);
			} catch (e) {
				alert("이미 존재하는 아이디입니다.");
			}
		} else {
			console.log(email, password, nickname, confirmedPassword);
			alert("비밀번호가 일치하지 않습니다.");
		}
	};

	return (
		<SignUpSection>
			<SignUpLeft>
				<SignLeftTitle>
					The Best Fit for Your Plant.
					<br />
					Open Community Platform
					<br /> for Plant Butlers.
				</SignLeftTitle>
				<SignLeftSubTitle>
					식물 초심자를 위한 식물 추천부터 일지 작성 및 공유까지.
					<br />
					식물 집사들을 위한 서비스, KLAE.
				</SignLeftSubTitle>
			</SignUpLeft>
			<SignRight>
				<SignRightTitle>
					지금 KLAE 에 가입하고 <br />
					맞춤형 식물을 추천받으세요!
				</SignRightTitle>
				<SignRightForm>
					<SignRigntFormTitle>Email</SignRigntFormTitle>
					<SignRigntFormInput
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<SignRigntFormTitle>Nickname</SignRigntFormTitle>
					<SignRigntFormInput
						value={nickname}
						onChange={(e) => setNickname(e.target.value)}
					/>
					<SignRigntFormTitle>Password</SignRigntFormTitle>
					<SignRigntFormInput
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<SignRigntFormTitle>confirm Password</SignRigntFormTitle>
					<SignRigntFormInput
						value={confirmedPassword}
						onChange={(e) => setConfirmedPassword(e.target.value)}
						type="password"
					/>
					<SignRigntFormbutton onClick={handleSignUpButton}>
						SIGN UP
					</SignRigntFormbutton>
				</SignRightForm>
				<SignLoginLink onClick={goLogin}>
					계정이 있으신가요? 지금 바로 로그인 하세요.
				</SignLoginLink>
			</SignRight>
		</SignUpSection>
	);
};

export default Signup;
