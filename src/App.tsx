import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import { useEffect } from "react";
import store from "./store/store";
import { getProfile } from "./store/auth/authSlice";

function App() {
  useEffect(() => {
    store.dispatch(getProfile());
  }, []);
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
