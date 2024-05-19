import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import ReusableInput from "../Reusable/ReusableInput";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../../store/auth/authSlice";
import { AppDispatch } from "../../store/store";
const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, " Minimum of 8 or more characters")
    .required("Password is required"),
});

const SignUp = () => {
  const dispatch = useDispatch<AppDispatch>();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log(values);
      dispatch(registerUser(values));
    },
  });

  const registerElements = [
    {
      id: 1,
      name: "firstName",
      label: "First Name",
      type: "text",
      placeholder: "",
      beforeLink: "",
      link: "#",
      textLink: "",
      required: true,
    },
    {
      id: 2,
      name: "lastName",
      label: "Last Name",
      type: "text",
      placeholder: "",
      beforeLink: "",
      link: "#",
      textLink: "",
      required: true,
    },
    {
      id: 3,
      name: "username",
      label: "Username",
      type: "text",
      placeholder: "",
      beforeLink: "",
      link: "#",
      textLink: "",
      required: true,
    },
    {
      id: 4,
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "",
      beforeLink: "",
      link: "#",
      textLink: "",
      required: true,
    },

    {
      id: 6,
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "",
      beforeLink: "",
      link: "#",
      textLink: "",
      required: true,
    },
    {
      id: 7,
      name: "confirmPassword",
      label: "Confirm Password",
      type: "password",
      placeholder: "",
      beforeLink: "",
      link: "#",
      textLink: "",
      required: true,
    },
  ];

  return (
    <section id="wrapper">
      <div id="left">
        <div id="signin">
          <div className="logo">
            <h1>Sign up to the best online shop</h1>
          </div>
          <form onSubmit={formik.handleSubmit} className="utility">
            <div className="grid">
              {registerElements.map((element) => (
                <ReusableInput
                  name={element.name}
                  placeholder={element.placeholder}
                  type={element.type}
                  formik={formik}
                  label={element.label}
                  required={element.required}
                />
              ))}
            </div>

            <button className="primary-btn"> Sign Up</button>

            <div className="links"></div>
            <div className="or">
              <hr className="bar"></hr>
              <span>OR</span>
              <hr className="bar"></hr>
            </div>
            <Link to="/login" className="secondary-btn">
              Log in
            </Link>
          </form>
        </div>
      </div>

      <div id="right">
        <div id="showcase">
          <div className="showcase-content">
            <h1 className="showcase-text">
              The best online shop in kenya
              <a href="" className="secondary-btn">
                Learn More
              </a>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
