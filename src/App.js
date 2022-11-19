import React from "react";
import { Route, Routes } from "react-router-dom";
import Initial from "./components/home/initial/index";
import Login from "./components/auth/login/index";
import Signup from "./components/auth/signup/index";
import Welcome from "./components/auth/signup/welcome";
import Mypage from "./components/auth/mypage/index";
import Main from "./components/home/main/index";
import Header from "./components/home/header/index";
import Diary from "./components/plant/diary/index";
import Create from "./components/plant/diary/create";
import Recommend from "./components/recommend/index";
import Result from "./components/recommend/result";
import Addplant from "./components/plant/addplant/index";
import Community from "./components/community/index";
import Post from "./components/community/post";

const App = () => {
	return (
		<Routes>
			<Route index element={<Initial />} /> {/* 초키 페이지 */}
			<Route path="/login" element={<Login />} /> {/* 로그인 페이지 */}
			<Route path="/signup" element={<Signup />} /> {/* 회원가입 페이지 */}
			<Route path="/welcome" element={<Welcome />} />{" "}
			{/* 회원가입 완료 페이지 */}
			<Route path="/" element={<Header />}>
				<Route path="mypage" element={<Mypage />} /> {/* 마이 페이지*/}
				<Route path="plant/:plantid" element={<Main />} /> {/* 메인 페이지*/}
				<Route path="plant" element={<Lognone />} /> /* (일지 없을 경우 메인 페이지) */
				<Route path="plant/:plantid/diary/:diaryid" element={<Diary />} />{" "}
				{/* 일지 상세 페이지 */}
				<Route path="plant/:plantid/diary/create" element={<Create />} />{" "}
				{/* 일지 작성 및 수정 페이지 */}
				<Route path="recommend" element={<Recommend />} />{" "}
				{/* 식물 추천 페이지 */}
				<Route path="recommend/result" element={<Result />} />{" "}
				{/* 식물 추천 결과 페이지 */}
				<Route path="plant/add" element={<Addplant />} />{" "}
				{/* 식물 등록 페이지 */}
				<Route path="plant/community" element={<Community />} />{" "}
				{/* 일지 게시판 페이지 */}
				<Route path="plant/community/:commuid" element={<Post />} />{" "}
				{/* 일지 게시판 상세 페이지 */}
			</Route>
		</Routes>
	);
};

export default App;
