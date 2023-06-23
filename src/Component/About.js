import React from "react";
import "./CustomCss/About.css";
const About = () => {
  return (
    <div>
      <div className="container" style={{ width: "100%" }}>
        <h2 className="text-center animate-charcter ">
          Welcome to The Novel Nerds!
        </h2>
        <p>
          At The Novel Nerds, we embrace our love for literature and cater to
          the passionate bookworms who can't resist the allure of a well-written
          novel. As avid readers ourselves, we understand the joy of getting
          lost in the pages of a captivating story, and we are thrilled to share
          our carefully curated selection of novels with you.
        </p>
        <div className="row feature-section">
          <div className="col-12 col-md-6 col-lg-3 feature">
            <div className="feature-image">
              <img
                src="https://i.pinimg.com/originals/2f/ab/f3/2fabf3ceb5a35b51a70e27137d56e4d2.gif"
                alt="Bookshelf"
                className="img-fluid"
              />
            </div>
            <div className="feature-text">
              <p>
                Immerse yourself in a world of literary gems, beautifully
                crafted narratives that transport you to different worlds,
                introduce you to intriguing characters, and evoke a myriad of
                emotions.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 feature">
            <div className="feature-image">
              <img
                src="https://institute.careerguide.com/wp-content/uploads/2020/09/1576518436-1576518436_goodreads_misc.gif"
                alt="Community"
                className="img-fluid"
              />
            </div>
            <div className="feature-text">
              <p>
                Join our vibrant community of literary enthusiasts, where you
                can engage in lively discussions, join virtual book clubs, and
                participate in author events and book signings.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 feature">
            <div className="feature-image">
              <img
                src="https://thumbs.gfycat.com/DisastrousLiveIrrawaddydolphin-max-1mb.gif"
                alt="Delivery"
                className="img-fluid"
              />
            </div>
            <div className="feature-text">
              <p>
                Explore our user-friendly website and enjoy secure and prompt
                delivery right to your doorstep, so you can start reading your
                new favorites in no time.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 feature">
            <div className="feature-image">
              <img
                src="https://i.pinimg.com/originals/6c/59/8b/6c598b8cb38df244eda78f8eb2f6c425.gif"
                alt="Secure"
                className="img-fluid"
              />
            </div>
            <div className="feature-text">
              <p>
                Your satisfaction is our priority. Shop with confidence knowing
                that your transactions and personal information are always safe
                and secure.
              </p>
            </div>
          </div>
        </div>
        <p>
          Embark on a literary adventure like no other! Indulge your inner
          bookworm and let our carefully curated collection of novels take you
          on an unforgettable journey. Welcome to The Novel Nerds family, where
          the love for literature is celebrated, and the joy of reading knows no
          bounds. Happy reading!
        </p>
      </div>
    </div>
  );
};

export default About;
