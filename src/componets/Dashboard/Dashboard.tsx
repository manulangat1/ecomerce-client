import React from "react";
import Products from "../Products/Products";
import AddProduct from "../Products/AddProduct";

const Dashboard = () => {
  return (
    <section>
      <AddProduct />
      <Products />
    </section>
  );
};

export default Dashboard;
