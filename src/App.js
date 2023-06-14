import React from "react";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import Login from "./Component/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Component/About";
import Footer from "./Component/Footer";
export default function App() {
  return (
    <div>
      <Navbar></Navbar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="Login" element={<Login></Login>}></Route>
          <Route path="About" element={<About></About>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
