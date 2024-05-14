import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./componets/Auth/Login";
import SignUp from "./componets/Auth/SignUp";
import Dashboard from "./componets/Dashboard/Dashboard";
import Products from "./componets/Products/Products";
import ProductDetail from "./componets/Products/ProductDetail";
const AppRoutes = () => {
  return (
    <section>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<SignUp />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="products/:id" element={<ProductDetail />}></Route>
      </Routes>
    </section>
  );
};

export default AppRoutes;
