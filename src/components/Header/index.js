import React from "react";
import Navitems from "./Navitems";
import Logo from "./Logo";
import "./style.css";

function Header() {
  return (
    <header className="site-header">
      <div className="wrapper">
        <div className="header-container">
          <Logo />
          <Navitems />
        </div>
      </div>
    </header>
  );
}

export default Header;
