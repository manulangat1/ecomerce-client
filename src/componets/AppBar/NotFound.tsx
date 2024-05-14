import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  const onBtnClick = () => {
    return navigate("/");
  };
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h5>The selected route is not found</h5>
      <button onClick={onBtnClick}>Go Back</button>
    </section>
  );
}

export default NotFound;
