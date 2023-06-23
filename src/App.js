import React, { useState } from "react";
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
import Adminlist from "./Component/Adminlist";
import Cart from "./Component/Cart";
import NotAllowed from "./Component/NotAllowed";
import NotLoggedin from "./Component/NotLoggedin";
import Order from "./Component/Order";

export default function App() {
  const [isloggedin, setIsloggedin] = useState(false);
  const [role, setRole] = useState("Visitor");
  // eslint-disable-next-line

  function Admincheck(Component) {
    console.log(isloggedin);
    console.log(role);
    if ((isloggedin === true && role === "USER") || role === "Visitor") {
      return <NotAllowed />;
    } else if (role === "ADMIN" && isloggedin === true) {
      return <>{Component}</>;
    } else {
      return <NotLoggedin />;
    }
  }
  function usercheck(Component) {
    if (isloggedin === false) {
      return <NotLoggedin />;
    }
    if (role === "USER" || role === "ADMIN") {
      return <>{Component}</>;
    } else {
      return <NotAllowed />;
    }
  }
  function logincheck(Component) {
    if (isloggedin === false) {
      return <NotLoggedin />;
    } else {
      return <>{Component}</>;
    }
  }

  return (
    <div>
      <BrowserRouter>
        <Navbar
          isloggedin={isloggedin}
          role={role}
          setIsloggedin={setIsloggedin}
          setRole={setRole}
        />
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/Login"
            element={
              <Login setIsloggedin={setIsloggedin} setRole={setRole}></Login>
            }
          ></Route>
          <Route path="/About" element={<About></About>}></Route>
          <Route path="/Signup" element={<Signup />}></Route>
          <Route
            path="/AddProduct"
            element={Admincheck(<AddProduct />)}
          ></Route>
          <Route
            path="/UpdateProduct"
            element={Admincheck(<UpdateProduct />)}
          ></Route>
          <Route path="/Books" element={logincheck(<Book />)}></Route>
          <Route path="/Order" element={logincheck(<Order />)}></Route>
          <Route path="/Adminlist" element={Admincheck(<Adminlist />)}></Route>
          <Route
            path="/Cart"
            element={usercheck(<Cart isloggedin={isloggedin} />)}
          ></Route>
          <Route path="/NotAllowed" element={<NotAllowed />}></Route>
          {/* <Route path="/Intro" element={<Intro />}></Route> */}

          <Route path="*" element={<Notfound />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
