import React from "react";
// 1. react-router-dom을 사용하기 위해서 아래 API들을 import 합니다.
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpPage from "../Pages/SignUpPage";
import Layout from "../style/Layout";
import LoginPage from "../Pages/LoginPage";
import Mypage from "../Pages/Mypage";
import KaKaoLogin from "../Components/Login/KaKaoLogin";

// 2. Router 라는 함수를 만들고 아래와 같이 작성합니다.
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/login/oauth" element={<KaKaoLogin />} /> */}
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
