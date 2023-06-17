import React from "react";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import Login from "./Component/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Component/About";
import Footer from "./Component/Footer";
import "./App.css";
import Signup from "./Component/Signup";
import AddProduct from "./Component/AddProduct";
import Notfound from "./Component/Notfound";
import UpdateProduct from "./Component/UpdateProduct";
import Book from "./Component/Book";
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="Login" element={<Login></Login>}></Route>
          <Route path="About" element={<About></About>}></Route>
          <Route path="Signup" element={<Signup />}></Route>
          <Route path="AddProduct" element={<AddProduct />}></Route>
          <Route path="UpdateProduct" element={<UpdateProduct />}></Route>
          <Route path="Books" element={<Book />}></Route>

          <Route path="*" element={<Notfound />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
