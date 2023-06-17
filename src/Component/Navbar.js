import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            src="https://i.pinimg.com/originals/1a/b7/a6/1ab7a60cb83bbe749183f8b48b719243.gif"
            alt="Company Logo"
            width="50"
            height="50"
            style={{ borderRadius: "4rem" }}
          />
        </a>
        <h5>The Novel Nerds</h5>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/SignUp">
                Signup
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/addProduct">
                AddProduct
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/UpdateProduct">
                UpdateProduct
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
