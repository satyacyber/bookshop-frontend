import * as Yup from "yup";

export const ProductSchema = Yup.object({
  isbn: Yup.string().min(2).max(25).required("Please Enter The Isbn"),
  name: Yup.string().min(2).max(25).required("Please Enter The Book Name"),
  author: Yup.string().min(2).max(25).required("Please Enter The Author Name"),
  imgUrl: Yup.string()
    .min(2)

    .required("Please Provide URL for image"),
  category: Yup.string()
    .min(2)
    .max(25)
    .required("Please Enter The Category Of Book"),
  quantity: Yup.number().integer().min(1).required("Enter a valid quantity"),
  description: Yup.string()
    .min(2)
    .max(250)
    .required("Please Enter The Description Of Book"),
  price: Yup.number().integer().min(1).required("Enter a valid price"),

  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(6).required("Please enter your password"),
  confirm_password: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password must match"),
});
