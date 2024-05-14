import axios from "axios";
const BASE_URL = import.meta.env.VITE_REACT_APP_BASE_URL;
const LOGIN_URL = BASE_URL + "/api/v1/auth/jwt/create";
const REGISTER_URL = BASE_URL + "/api/v1/auth/users/";
const PROFILE_URL = BASE_URL + "/api/v1/profile/me";

const login = async (userData: any) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await axios.post(LOGIN_URL, userData, config);

  if (response.data) {
    localStorage.setItem("peleza-token", response.data.token);
  }
  return response.data;
};

const register = async (userData: any) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const { firstName, lastName, email, username, password, confirmPassword } =
    userData;

  const data = {
    first_name: firstName,
    last_name: lastName,
    email,
    username,
    password,
    re_password: confirmPassword,
  };

  const response = await axios.post(REGISTER_URL, data, config);

  console.log("call made");
  if (response.data) {
    console.log("--->", response.data);
    localStorage.setItem("peleza-token", response.data.access);
  }
  return response.data;
};

const profile = async () => {
  const token = localStorage.getItem("peleza-token");
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(PROFILE_URL, config);
  return response.data;
};

const authAPIService = { login, register, profile };
export default authAPIService;
