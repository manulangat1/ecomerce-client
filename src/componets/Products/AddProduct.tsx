import { useFormik } from "formik";
import React from "react";
import ReusableInput from "../Reusable/ReusableInput";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { addProduct } from "../../store/products/productSlice";

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
];

function AddProduct() {
  const dispatch = useDispatch<AppDispatch>();

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      price: "",
    },
    validationSchema: null,
    onSubmit: async (values) => {
      console.log(values);
      dispatch(addProduct(values));
      window.location.reload();
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
        <Button type="submit" className="primary-btn">
          {" "}
          ADD
        </Button>
      </form>
    </section>
  );
}

export default AddProduct;
