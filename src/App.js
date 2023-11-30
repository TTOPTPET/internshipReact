
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddPostPage from './pages/AddPostPage/AddPostPage';
import StartPage from './pages/StartPage/StartPage';

const HelloWorld = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<StartPage />} />
            <Route path={"/addpost"} element={<AddPostPage />} />
        </Routes>
    </BrowserRouter>
  );
};

export default HelloWorld;