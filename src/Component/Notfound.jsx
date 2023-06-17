import React from "react";
import "./CustomCss/m.css";
import { Link } from "react-router-dom";

export default function Notfound() {
  return (
    <>
      <div className="nocontainer p3">
        <h4>Look Like You're Lost</h4>
        <div className="image-container">
          <img
            src="https://cdn.svgator.com/images/2022/01/funny-404-error-page-design.gif"
            alt=""
            className="img-thumbnail"
          />
        </div>
        <Link to="/" style={{ all: "unset" }} className="nocontainer">
          <button className="btn btn-success p3">Go Home</button>
        </Link>
      </div>
    </>
  );
}
