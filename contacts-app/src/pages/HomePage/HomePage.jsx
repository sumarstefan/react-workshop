import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleGoClick = () => navigate("/personal");

  return (
    <>
      <img alt="logo" src="./assets/images/VegaLogo.png" />
      <button className="go_button" onClick={handleGoClick}>Go to the app</button>
    </>
  );
};

export default HomePage;
