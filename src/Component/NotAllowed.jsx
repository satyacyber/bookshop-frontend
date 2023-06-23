import React from "react";
import { Link } from "react-router-dom";
const NotAllowed = () => {
  return (
    <div>
      <div className="nocontainer p3">
        <h4>Not Allowed</h4>
        <div className="image-container">
          <img
            src="https://media.tenor.com/PYBWVjvUuU8AAAAC/no-entry-not-allowed.gifhttps://cdn.svgator.com/images/2022/01/funny-404-error-page-design.gif"
            alt=""
            className="img-thumbnail"
          />
        </div>
        <Link to="/login" style={{ all: "unset" }} className="nocontainer">
          <button className="btn btn-danger p3">Go Back</button>
        </Link>
      </div>
    </div>
  );
};

export default NotAllowed;
