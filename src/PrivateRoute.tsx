import React from "react";
import { jwtDecode } from "jwt-decode";
import { Navigate, Outlet } from "react-router-dom";
export const checkToken = () => {
  const token = localStorage.getItem("peleza-token");

  if (token && token !== null) {
    const decodedToken: any = jwtDecode(token);
    if (decodedToken.exp * 1000 < Date.now()) {
      localStorage.removeItem("peleza-token");
      return false;
    }
    return true;
  } else {
    return false;
  }
};

function PrivateRoute() {
  const auth = checkToken();
  return auth ? <Outlet /> : <Navigate to="/login" replace />;
}

export default PrivateRoute;
