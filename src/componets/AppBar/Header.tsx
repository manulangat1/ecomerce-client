import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { link } from "fs";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { checkToken } from "../../PrivateRoute";

const publicRoutes = [
  { link: "/login", name: "Login" },
  { link: "/register", name: "Register" },
];

const privateRoutes = [
  {
    link: "/",
    name: "Home",
  },
  {
    link: "/categories",
    name: "categories",
  },
  {
    link: "/orders",
    name: "Order",
  },
  {
    link: "/add-products",
    name: "Add Product",
  },
];

function Header() {
  const auth = checkToken();
  const navigate = useNavigate();
  const onLogout = () => {
    localStorage.removeItem("peleza-token");
    return navigate("/");
  };
  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News1
          </Typography>

          {!auth &&
            publicRoutes.map((link, index) => (
              <NavLink className="header-links" to={link.link} key={index}>
                {link.name}
              </NavLink>
            ))}
          {auth &&
            privateRoutes.map((link, index) => (
              <NavLink className="header-links" to={link.link} key={index}>
                {link.name}
              </NavLink>
            ))}
          {auth && (
            <Button onClick={onLogout} color="inherit">
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
