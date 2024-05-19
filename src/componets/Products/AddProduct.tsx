import { useFormik } from "formik";
import React from "react";
import ReusableInput from "../Reusable/ReusableInput";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { addProduct } from "../../store/products/productSlice";
import { useNavigate } from "react-router-dom";

const elements = [
  {
    name: "name",
    label: "Name",
    type: "text",
    placeholder: "Enter product name",
    beforeLink: "",
    link: "#",
    textLink: "",
    required: true,
  },
  {
    name: "description",
    label: "Description",
    type: "text",
    placeholder: "Enter product description",
    beforeLink: "",
    link: "#",
    textLink: "",
    required: true,
  },
  {
    name: "price",
    label: "Price",
    type: "number",
    placeholder: "",
    beforeLink: "",
    link: "#",
    textLink: "",
    required: true,
  },
  {
    name: "quantity",
    label: "Quantity",
    type: "number",
    placeholder: "",
    beforeLink: "",
    link: "#",
    textLink: "",
    required: true,
  },
];

function AddProduct() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      price: "",
      quantity: "",
    },
    validationSchema: null,
    onSubmit: async (values) => {
      console.log(values);
      dispatch(addProduct(values));
      //   window.location.reload();
      return navigate("/");
    },
  });
  return (
    <section className="addProduct">
      <h1
        style={{
          textAlign: "center",
        }}
      >
        Add a new product for your customers
      </h1>

      <form className="addProductForm" onSubmit={formik.handleSubmit}>
        <div className="grid">
          {elements.map((element, index) => (
            <ReusableInput
              key={index}
              name={element.name}
              placeholder={element.placeholder}
              type={element.type}
              formik={formik}
              // defaultValue={values[name]}
              label={element.label}
              required={element.required}
            />
          ))}
        </div>

        <Button
          type="submit"
          className="primary-btn"
          //   style={{
          //     background: "#7fffd4",

          //     width: "100%",
          //     // background: "80%",
          //     marginLeft: "auto",
          //     marginRight: "auto",
          //     marginTop: "2rem",
          //   }}
        >
          {" "}
          ADD
        </Button>
      </form>
    </section>
  );
}

export default AddProduct;
