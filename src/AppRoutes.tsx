import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./componets/Auth/Login";
import SignUp from "./componets/Auth/SignUp";
import Dashboard from "./componets/Dashboard/Dashboard";
import Products from "./componets/Products/Products";
import ProductDetail from "./componets/Products/ProductDetail";
import PrivateRoute from "./PrivateRoute";
import Header from "./componets/AppBar/Header";
import NotFound from "./componets/AppBar/NotFound";
import Order from "./componets/Order/Order";
const AppRoutes = () => {
  return (
    <section>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<SignUp />}></Route>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Dashboard />}></Route>
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="/products" element={<Products />}></Route>
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="products/:id" element={<ProductDetail />}></Route>
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="/orders" element={<Order />} />
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </section>
  );
};

export default AppRoutes;
