import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

function Navitems() {
  return (
    <nav className="nav-items">
      <li className="nav-ietm">
        <NavLink exact to="/">
          Home
        </NavLink>
      </li>
      <li className="nav-ietm">
        <NavLink to="/pokedex">Pokédex</NavLink>
      </li>
      <li className="nav-ietm">
        <NavLink to="/Legendaries">Legendaries</NavLink>
      </li>
      <li className="nav-ietm">
        <NavLink to="/Documentaion">Documentaion</NavLink>
      </li>
    </nav>
  );
}

export default Navitems;
