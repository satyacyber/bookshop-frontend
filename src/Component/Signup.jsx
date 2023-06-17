import React from "react";
import { useFormik } from "formik";
import { signUpSchema } from "./Schema";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function Signup() {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  };
  const navigate = useNavigate();

  const { values, handleBlur, handleChange, errors, touched, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      validateOnChange: true,
      validateOnBlur: false,
      //// By disabling validation onChange and onBlur formik will validate on submit.
      onSubmit: (values, action) => {
        //console.log(values.email);
        axios
          .post("http://localhost:8080/user/signup", {
            emailId: values.email,
            userName: values.name,
            password: values.password,
            role: "USER",
          })
          .then((response) => {
            // Handle the response data
            navigate("/Login");
            console.log(response.data);
          })
          .catch((error) => {
            // Handle the error
            console.log("User Not found");
          });
        //// to get rid of all the values after submitting the form
        action.resetForm();
      },
    });

  return (
    <div>
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>

                      <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="name" />
                            Your Name
                            <input
                              type="text"
                              id="name"
                              name="name"
                              className="form-control"
                              value={values.name}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            {touched.name && errors.name ? (
                              <p
                                className="form-error"
                                style={{ color: "red" }}
                              >
                                {errors.name}
                              </p>
                            ) : null}
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="email" />
                            Your Email
                            <input
                              type="email"
                              id="email"
                              name="email"
                              className="form-control"
                              value={values.email}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            {errors.email && touched.email ? (
                              <p
                                className="form-error"
                                style={{ color: "red" }}
                              >
                                {errors.email}
                              </p>
                            ) : null}
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="password" />
                            Password
                            <input
                              type="password"
                              id="password"
                              name="password"
                              className="form-control"
                              value={values.password}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            {errors.password && touched.password ? (
                              <p
                                className="form-error"
                                style={{ color: "red" }}
                              >
                                {errors.password}
                              </p>
                            ) : null}
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label
                              className="form-label"
                              htmlFor="confirm_password"
                            />
                            Confrim your password
                            <input
                              type="password"
                              id="confirm_password"
                              className="form-control"
                              name="confirm_password"
                              value={values.confirm_password}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            {errors.confirm_password &&
                            touched.confirm_password ? (
                              <p
                                className="form-error"
                                style={{ color: "red" }}
                              >
                                {errors.confirm_password}
                              </p>
                            ) : null}
                          </div>
                        </div>
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="Submit"
                            className="btn btn-primary btn-lg"
                          >
                            Register
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://i.pinimg.com/originals/fe/93/b0/fe93b053043276b38386e625295af6cc.gif"
                        className="img-fluid"
                        alt=""
                      />
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
