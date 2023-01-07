import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import Initial from "./components/home/initial/index";
import Login from "./components/auth/login/index";
import Signup from "./components/auth/signup/index";
import Welcome from "./components/auth/welcome/index";
import Mypage from "./components/auth/mypage/index";
import Main from "./components/home/main/index";
import Lognone from "./components/home/main/lognone";
import Header from "./components/home/header/index";
import Diary from "./components/plant/diary/index";
import Edit from "./components/plant/diary/edit";
import Create from "./components/plant/diary/create";
import Recommend from "./components/recommend/index";
import Cover from "./components/recommend/cover";
import Result from "./components/recommend/result";
import Community from "./components/community/board/index";
import AllPosts from "./components/community/board/allPosts";
import Detail from "./components/community/post/detail";
import Addplant from "./components/plant/addplant/index";
import Editplant from "./components/plant/addplant/editplant";
import Createplant from "./components/plant/addplant/createplant";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} /> {/* 로그인 페이지 */}
      <Route path="/signup" element={<Signup />} /> {/* 회원가입 페이지 */}
      <Route path="/welcome" element={<Welcome />} />{" "}
      {/* 회원가입 완료 페이지 */}
      <Route path="/" element={<Header />}>
        <Route index element={<Initial />} /> {/* 초기 페이지 */}
        <Route path="mypage" element={<Mypage />} /> {/* 마이 페이지*/}
        <Route path="plant" element={<Lognone />} />{" "}
        {/* (일지 없을 경우 메인 페이지) */}
        <Route path="plant/:plantid" element={<Main />} /> {/* 메인 페이지*/}
        <Route path="plant/:plantid/diary/:diaryid" element={<Diary />} />
        {/* 일지 상세 페이지 */}
        <Route path="plant/:plantid/diary/:diaryid/edit" element={<Edit />} />
        {/* 일지 수정 페이지 */}
        <Route path="plant/:plantid/diary/create" element={<Create />} />
        {/* 일지 작성 페이지 */}
        <Route path="recommend" element={<Recommend />} />{" "}
        {/* 식물 추천 페이지 */}
        <Route path="recommend/result" element={<Result />} />{" "}
        {/* 식물 추천 결과 페이지 */}
        <Route path="plant/addplant" element={<Addplant />} />{" "}
        {/* 식물 등록 페이지 */}
        <Route path="plant/:plantid/addplant" element={<Addplant />} />{" "}
        {/* 식물 등록 페이지 */}
        <Route
          path="plant/:plantid/addplant/editplant"
          element={<Editplant />}
        />{" "}
        {/* 식물 수정 페이지 */}
        <Route path="plant/addplant/createplant" element={<Createplant />} />
        {/* 식물 추가 페이지 */}
        <Route path="plant/community" element={<Community />} />{" "}
        {/* 일지 게시판 페이지 */}
        <Route path="plant/community/all" element={<AllPosts />} />{" "}
        {/* 일지 게시판 전체 페이지 */}
        <Route path="plant/community/detail" element={<Detail />} />{" "}
        {/* 일지 게시판 상세 페이지 */}
      </Route>
    </Routes>
  );
};

export default App;
