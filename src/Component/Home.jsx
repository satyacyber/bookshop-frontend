import React from "react";
import { Carousel } from "react-carousel3";

import "./CustomCss/Home.css";
import { Link } from "react-router-dom";
export default function Home() {
  const imageStyle = {
    maxWidth: "50%",
    maxHeight: "50%",
  };

  return (
    <>
      <div>
        <img
          id="banner"
          src="https://www.safahti.com/images/slides/slider_1_en.gif"
          alt=""
          style={{
            height: "18rem" /* Adjust the height as desired */,
            objectFit: "cover",
            width: "100%",
          }}
        />
      </div>
      <div className="container my-3">
        <div className="row">
          <div className="col-md-6">
            <div className="my-5">
              <h1
                style={{
                  fontFamily: "'Brush Script MT', cursive",
                  fontStyle: "italic",
                  fontWeight: "bold",
                }}
              >
                Welcome to a World of Words:
                <img
                  src="https://media.tenor.com/R_AvsiBDADsAAAAC/book-monster.gif"
                  alt=""
                  style={{ height: "5rem", mixBlendMode: "darken" }}
                />
              </h1>
              <h2>Unleash Your Imagination at Our Enchanting Bookshop!</h2>
            </div>
          </div>
          <div className="col">
            <div
              style={{
                display: "flex",
                //justifyContent: "left",
                left: "50%",
                //background: "linear-gradient(to right, #16235e 0%, #020223 100%)",
                maxWidth: "50%",
                position: "absolute",
              }}
            >
              <Carousel
                height={80}
                width={600}
                yOrigin={42}
                yRadius={20}
                autoPlay
              >
                <div key={1} style={imageStyle}>
                  <img
                    alt=""
                    src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf_screen.jpg?ts=1637012564"
                    style={imageStyle}
                  />
                </div>
                <div key={2} style={imageStyle}>
                  <img
                    alt=""
                    src="https://imgv3.fotor.com/images/gallery/Fiction-Book-Covers.jpg"
                    style={imageStyle}
                  />
                </div>
                <div key={3} style={imageStyle}>
                  <img
                    alt=""
                    src="https://content.wepik.com/statics/5394216/preview-page0.jpg"
                    style={imageStyle}
                  />
                </div>
                <div key={4} style={imageStyle}>
                  <img
                    alt=""
                    src="https://m.media-amazon.com/images/I/91PQFpYWLwL._AC_UF1000,1000_QL80_.jpg"
                    style={imageStyle}
                  />
                </div>
                <div key={5} style={imageStyle}>
                  <img
                    alt=""
                    src="https://img.theculturetrip.com/wp-content/uploads/2017/08/9780330458535.jpg"
                    style={imageStyle}
                  />
                </div>
                <div key={6} style={imageStyle}>
                  <img
                    alt=""
                    src="https://images.cdn.kukufm.com/f:webp/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/441a1ff392d54b849dce4a852cfa3311_portrait_913.png"
                    style={imageStyle}
                  />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="container ">
        <div
          style={{
            display: "block",
            justifyContent: "left",
            width: "40%",
            //mixBlendMode: "color-burn",
          }}
        >
          <button className="button">
            <span className="button_lg">
              <span className="button_sl"></span>
              <Link to="/Login" style={{ all: "unset" }}>
                <span className="button_text">Explore Now</span>
              </Link>
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
