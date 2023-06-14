import React from "react";

class Footer extends React.Component {
  render() {
    const footerStyle = {
      marginTop: "1rem",
      // padding: "1rem",
      //backgroundColor: "rgb(235, 195, 64)",
      position: "fixed",
      bottom: 0,
      left: 0,
      width: "100%",
    };
    return (
      <footer style={footerStyle}>
        <div className="text-center text-lg-left text-white">
          <div className="text-center p-3" style={{ backgroundColor: "grey" }}>
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a
              className="text-white"
              href="https://www.linkedin.com/in/satyabratabehera2001/"
            >
              Satyabrata
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
