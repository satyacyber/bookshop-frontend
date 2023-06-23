import React from "react";
import "./CustomCss/m.css";

import { Link } from "react-router-dom";
const NotLoggedin = () => {
  return (
    <div>
      <div className="nocontainer p3">
        <h4>Look Like You're Not Logged IN</h4>
        <div className="image-container">
          <img
            src="https://images.squarespace-cdn.com/content/v1/6220ad1db2910108f6cfc24f/46da4dd1-e009-4d51-92bc-7bd013235df1/googlevsprivacy.gif"
            alt=""
            className="img-thumbnail"
          />
        </div>
        <Link to="/Login" style={{ all: "unset" }} className="nocontainer">
          <button className="btn btn-primary p3">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default NotLoggedin;
