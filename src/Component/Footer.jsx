// import React from "react";

// class Footer extends React.Component {
//   render() {
//     const footerStyle = {
//       // marginTop: "3rem",
//       // padding: "1rem",
//       //backgroundColor: "rgb(235, 195, 64)",
//       position: "relative",
//       bottom: 0,
//       left: 0,
//       width: "100%",
//     };
//     return (
//       <footer style={footerStyle} className="mz-2">
//         <div className="text-center text-lg-left text-white">
//           <div className="text-center p-3" style={{ backgroundColor: "grey" }}>
//             &copy; {new Date().getFullYear()} Copyright:{" "}
//             <a
//               className="text-white"
//               href="https://www.linkedin.com/in/satyabratabehera2001/"
//             >
//               Satyabrata
//             </a>
//           </div>
//         </div>
//       </footer>
//     );
//   }
// }

// export default Footer;

import React from "react";

export default function Footer() {
  return (
    <div>
      <footer
        className="w-100 bg-light text-center"
        style={{
          position: "sticky",
          bottom: "0",
          left: "0",
          marginTop: "40px",
        }}
      >
        <p>
          © 2023 Satyabrata Behera. All Rights Reserved | Terms and Conditions
        </p>
      </footer>
    </div>
  );
}
