import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
export default function UpdateProduct() {
  const location = useLocation();
  const navigate = useNavigate();
  const [updateItem, setUpdateItem] = useState([]);
  const [updateId, setupdateId] = useState(" ");
  useEffect(() => {
    fetchproductbyId();
    // eslint-disable-next-line
  }, []);

  const fetchproductbyId = async () => {
    if (location.state === null || location.state.id === null) {
      navigate("/adminlist");
      return; // Exit the function to prevent further execution
    }
    const id = Number(await location.state.id.id);
    setupdateId(id);

    try {
      const response = await axios.get(`http://localhost:8080/products/${id}`);
      setUpdateItem(response.data);
    } catch {
      console.log("Api request failed");
    }
  };

  const initialValues = {
    isbn: "",
    name: "",
    author: "",
    imgUrl: "",
    category: "",
    quantity: 0,
    description: "",
    price: 0,
  };

  const ProductSchema = Yup.object({
    isbn: Yup.string().min(2).max(25).required("Please Enter The Isbn"),
    name: Yup.string().min(2).max(50).required("Please Enter The Book Name"),
    author: Yup.string()
      .min(2)
      .max(50)
      .required("Please Enter The Author Name"),
    imgUrl: Yup.string()
      .min(2)

      .required("Please Provide URL for image"),
    category: Yup.string()
      .min(2)
      .max(50)
      .required("Please Enter The Category Of Book"),
    quantity: Yup.number().integer().min(1).required("Enter a valid quantity"),
    description: Yup.string()
      .min(2)
      .max(250)
      .required("Please Enter The Description Of Book"),
    price: Yup.number().integer().min(1).required("Enter a valid price"),
  });
  const { values, handleBlur, handleChange, errors, touched, handleSubmit } =
    useFormik({
      initialValues: updateItem || initialValues,
      validationSchema: ProductSchema,
      validateOnChange: true,
      validateOnBlur: false,
      enableReinitialize: true,
      onSubmit: (values, action) => {
        axios
          .put(`http://localhost:8080/updateProducts/${updateId}`, {
            isbn: values.isbn,
            name: values.name,
            author: values.author,
            imgUrl: values.imgUrl,
            category: values.category,
            quantity: values.quantity,
            description: values.description,
            price: values.price,
          })
          .then((response) => {
            // Handle the response data
            window.alert("Product Updated successfully");
            console.log(values);
            action.resetForm();
          })
          .catch((error) => {
            // Handle the error
            console.log(error);
          });
        //// to get rid of all the values after submitting the form
        action.resetForm();
      },
    });

  return (
    <div>
      <section style={{ backgroundColor: "eee" }}>
        <div className="container h-200">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "50px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Update Product
                      </p>

                      <form className="mx-1 mx-md-8" onSubmit={handleSubmit}>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="isbn" />
                            Enter ISBN Number
                            <input
                              type="text"
                              id="isbn"
                              className="form-control"
                              name="isbn"
                              value={values.isbn}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                          </div>
                          {touched.isbn && errors.isbn ? (
                            <p className="form-error" style={{ color: "red" }}>
                              {errors.isbn}
                            </p>
                          ) : null}
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="name" />
                            Book Name
                            <input
                              type="text"
                              id="name"
                              name="name"
                              className="form-control"
                              value={values.name}
                              onBlur={handleBlur}
                              onChange={handleChange}
                            />
                          </div>
                          {touched.name && errors.name ? (
                            <p className="form-error" style={{ color: "red" }}>
                              {errors.name}
                            </p>
                          ) : null}
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="author" />
                            Author Name
                            <input
                              type="text"
                              id="author"
                              name="author"
                              className="form-control"
                              value={values.author}
                              onBlur={handleBlur}
                              onChange={handleChange}
                            />
                          </div>
                          {touched.author && errors.author ? (
                            <p className="form-error" style={{ color: "red" }}>
                              {errors.author}
                            </p>
                          ) : null}
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="imgurl" />
                            Image URL
                            <input
                              type="text"
                              id="imgurl"
                              name="imgUrl"
                              className="form-control"
                              value={values.imgUrl}
                              onBlur={handleBlur}
                              onChange={handleChange}
                            />
                          </div>
                          {touched.imgUrl && errors.imgUrl ? (
                            <p className="form-error" style={{ color: "red" }}>
                              {errors.imgUrl}
                            </p>
                          ) : null}
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="category" />
                            Category
                            <input
                              type="text"
                              id="category"
                              name="category"
                              className="form-control"
                              value={values.category}
                              onBlur={handleBlur}
                              onChange={handleChange}
                            />
                          </div>
                          {touched.category && errors.category ? (
                            <p className="form-error" style={{ color: "red" }}>
                              {errors.category}
                            </p>
                          ) : null}
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="quantity" />
                            Quantity
                            <input
                              type="number"
                              id="quantity"
                              name="quantity"
                              className="form-control"
                              value={values.quantity}
                              onBlur={handleBlur}
                              onChange={handleChange}
                            />
                          </div>
                          {touched.quantity && errors.quantity ? (
                            <p className="form-error" style={{ color: "red" }}>
                              {errors.quantity}
                            </p>
                          ) : null}
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label
                              className="form-label"
                              htmlFor="description"
                            />
                            Product Description
                            <textarea
                              name="description"
                              id="description"
                              className="form-control"
                              rows="4"
                              value={values.description}
                              onBlur={handleBlur}
                              onChange={handleChange}
                            ></textarea>
                          </div>
                          {touched.description && errors.description ? (
                            <p className="form-error" style={{ color: "red" }}>
                              {errors.description}
                            </p>
                          ) : null}
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="price" />
                            Product Price
                            <input
                              type="number"
                              id="price"
                              name="price"
                              className="form-control"
                              value={values.price}
                              onBlur={handleBlur}
                              onChange={handleChange}
                            />
                          </div>
                          {touched.price && errors.price ? (
                            <p className="form-error" style={{ color: "red" }}>
                              {errors.price}
                            </p>
                          ) : null}
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="Submit"
                            className="btn btn-primary btn-lg"
                            onClick={handleSubmit}
                          >
                            Update
                          </button>
                          <button
                            type="button"
                            className="btn btn-danger mx-2"
                            onClick={(e) => {
                              navigate("/adminlist");
                            }}
                          >
                            Show List
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://cdn.dribbble.com/users/3960415/screenshots/8995365/media/b0b5dddc53e15f8eb666502c9c3cb5d4.gif"
                        className="img-fluid"
                        alt="Sample "
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
