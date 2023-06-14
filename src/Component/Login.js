import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Login() {
  const myStyle = {
    backgroundColor: "#eee",
  };
  const widthStyle = {
    width: "185px",
  };
  return (
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
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                          style={widthStyle}
                          alt="logo"
                        />
                        <h4 className="mt-1 mb-5 pb-1">
                          We are The Novel Nerds
                        </h4>
                      </div>

                      <form>
                        <p>Please login to your account</p>

                        <label className="form-label" htmlFor="form2Example11">
                          Username
                        </label>
                        <div className="form-outline">
                          <input
                            type="email"
                            id="form2Example11"
                            className="form-control"
                            placeholder="Email address"
                          />
                        </div>
                        <br />
                        <label className="form-label " htmlFor="form2Example22">
                          Password
                        </label>
                        <div className="form-outline">
                          <input
                            type="password"
                            id="form2Example22"
                            className="form-control"
                            placeholder="Password"
                          />
                        </div>

                        <div className="text-center pt-1 my-3 mb-5 pb-1">
                          <button
                            className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                            type="button"
                          >
                            Log in
                          </button>
                          <a className="text-muted  mx-4" href="/">
                            Forgot password?
                          </a>
                        </div>

                        <div className="d-flex align-items-center justify-content-center pb-4">
                          <p className="mb-0 me-2">Don't have an account?</p>
                          <button
                            type="button"
                            className="btn btn-outline-danger"
                          >
                            Create new
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-center">
                    <div className="text-black px-3 py-4 p-md-5 mx-md-4">
                      <h4 className="mb-4">We are more than just a company</h4>
                      <p className="small mb-0">
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
    </div>
  );
}
