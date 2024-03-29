import img1 from "./../images/header1.jpg";
import img2 from "./../images/header2.jpg";
import img3 from "./../images/header3.jpg";
import React from "react";
import "../styles/Header.css";
import { Route, Routes } from "react-router-dom";

const Header = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={(<img src={img1} alt="city" />)} />
                <Route path="/products" element={(<img src={img2} alt="city" />)} />
                <Route path="/contact" element={(<img src={img3} alt="city" />)} />
                <Route path="/admin" element={(<img src={img1} alt="city" />)} />
                <Route path="/*" element={(<img src={img1} alt="city" />)} />
            </Routes>
        </>
    );
}

export default Header;