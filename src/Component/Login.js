import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Modal from "react-modal";

export default function Login(props) {
  const myStyle = {
    backgroundColor: "#eee",
  };

  //UseState Hook in action to see any changes
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();
  const handleEmailchange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordchange = (e) => {
    setPassword(e.target.value);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  //Handling submit and making required API call
  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log("submit clicked");
    axios
      .post("http://localhost:8080/user/login", {
        emailId: email,
        password: password,
      })
      .then((response) => {
        // Handle the response data
        console.log(response.data.role);
        const currentRole = response.data.role;
        props.setIsloggedin(true);
        props.setRole(currentRole);
        console.log(currentRole);
        currentRole === "ADMIN" ? navigate("/adminlist") : navigate("/Books");
      })
      .catch((error) => {
        // Handle the error
        console.log("User Not found");
        setShowModal(true);
      });
  };

  return (
    <>
      <div>
        <section className="h-100 gradient-form" style={myStyle}>
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-xl-10">
                <div className="card rounded-3 text-black">
                  <div className="row g-0">
                    <div className="col-lg-6">
                      <div className="card-body p-md-5 mx-md-4">
                        <div className="text-center">
                          <img
                            src="favicon.ico"
                            style={{ width: "100px", height: "100px" }}
                            alt="logo"
                          />
                          <h4 className="mt-1 mb-5 pb-1">
                            We are The Novel Nerds
                          </h4>
                        </div>

                        <form onSubmit={handlesubmit}>
                          <p>Please login to your account</p>

                          <label className="form-label" htmlFor="useremail">
                            Email
                          </label>
                          <div className="form-outline">
                            <input
                              type="email"
                              name="useremail"
                              id="useremail"
                              className="form-control"
                              placeholder="Email address"
                              onChange={handleEmailchange}
                            />
                          </div>
                          <br />

                          <label className="form-label " htmlFor="userpassword">
                            Password
                          </label>
                          <div className="form-outline">
                            <input
                              type="password"
                              name="userpassword"
                              id="userpassword"
                              className="form-control"
                              placeholder="Password"
                              onChange={handlePasswordchange}
                            />
                          </div>

                          <div className="text-center pt-1 my-3 mb-5 pb-1">
                            <button
                              className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                              type="submit"
                            >
                              Log in
                            </button>
                          </div>

                          <div className="d-flex align-items-center justify-content-center pb-4">
                            <p className="mb-0 me-2">Don't have an account?</p>
                            <button
                              type="button"
                              className="btn btn-outline-danger"
                            >
                              <Link to="/Signup" style={{ all: "unset" }}>
                                Create new
                              </Link>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-lg-6 d-flex align-items-center">
                      <div className="text-black px-3 py-4 p-md-5 mx-md-4">
                        <h4 className="mb-4">We Are Not Just A Company</h4>
                        <p className="medium mb-0">
                          Unlock the door to a world of endless stories. Welcome
                          to our online bookshop, where imagination knows no
                          bounds
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Modal
          isOpen={showModal}
          onRequestClose={closeModal}
          style={{ maxheight: "5rem", maxwidth: "5rem" }}
        >
          <h2 className="card-tittle">User Not Found</h2>
          <p className="card-text">Please check your Credentials</p>
          <button onClick={closeModal} className="btn btn-danger">
            Close
          </button>
        </Modal>
      </div>
    </>
  );
}
