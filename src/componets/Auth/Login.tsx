import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import ReusableInput from "../Reusable/ReusableInput";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@reduxjs/toolkit/query";
import { Link, useNavigate } from "react-router-dom";
import { getProfile, loginUser } from "../../store/auth/authSlice";
import { AppDispatch } from "../../store/store";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "8 or more are required")
    .required("Password is required"),
});

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  useEffect(() => {
    if (isAuthenticated) {
      getProfile();

      return navigate("/");
    }
  }, [isAuthenticated]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log("submitted");
      console.log(values);
      dispatch(loginUser(values));
    },
  });
  const loginObjects = [
    {
      id: 1,
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
      id: 2,
      name: "password",
      label: "Password",
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
            <h1>Log in</h1>
          </div>
          <form onSubmit={formik.handleSubmit} className="utility">
            {loginObjects.map((element) => (
              <ReusableInput
                key={element.id}
                name={element.name}
                placeholder={element.placeholder}
                type={element.type}
                formik={formik}
                label={element.label}
                required={element.required}
              />
            ))}

            <button className="primary-btn" type="submit">
              Login
            </button>

            <div className="links"></div>
            <div className="or">
              <hr className="bar"></hr>
              <span>OR</span>
              <hr className="bar"></hr>
            </div>
            <Link to="/register" className="secondary-btn">
              Create an Account
            </Link>
          </form>
        </div>
      </div>
      <div id="right">
        <div id="showcase">
          <div className="showcase-content">
            <h1 className="showcase-text">
              Jenga Kiseti!!
              <a href="" className="secondary-btn">
                Learn More
              </a>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
