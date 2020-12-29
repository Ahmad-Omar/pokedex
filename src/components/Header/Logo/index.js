import React from "react";
import "./style.css";
import SiteLogo from "../../../assets/images/Logo.png";

function Logo() {
  return (
    <div className="site-logo">
      <img src={SiteLogo} alt="pokemon-logo" />
    </div>
  );
}

export default Logo;
