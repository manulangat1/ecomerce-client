import axios from "axios";
const BASE_URL = import.meta.env.VITE_REACT_APP_BASE_URL;
const PRODUCTS_URL = BASE_URL + "/api/v1/products/";
// const REGISTER_URL = BASE_URL + "/api/v1/auth/users/";
// const PROFILE_URL = BASE_URL + "/api/v1/profile/me";

const getproducts = async () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await axios.get(PRODUCTS_URL, config);

  return response.data;
};

const productAPIService = { getproducts };
export default productAPIService;
