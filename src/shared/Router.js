import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../Pages/Main/Main";
import SignUpPage from "../Pages/SignUpPage";
import Layout from "../style/Layout";
import LoginPage from "../Pages/LoginPage";
import Mypage from "../Pages/Mypage";
import Form from "../Pages/Main/Form";
import KaKaoLogin from "../Components/Login/KaKaoLogin";
import DetailPage from "../Pages/DetailPage";
import PracPage from "../Pages/PracPage";
import ChatPage from "../Pages/ChatPage";
import Editpage from "../Pages/Editpage";
import MyPartyPage from "../Pages/MyPartyPage";
import Edit2 from "../Components/MyPage/Edit2.js";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup/oauth" element={<KaKaoLogin />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/myparty" element={<MyPartyPage />} />
        <Route path="/editpage" element={<Edit2 />} />
        <Route path="/form" element={<Form />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/practice" element={<PracPage />} />
        <Route path="/posts/:postid" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
