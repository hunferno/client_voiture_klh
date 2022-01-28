import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header_container">
      <nav>
        <ul>
          <NavLink to={"/"} className={(nav) => nav.isActive && "nav-active"}>
            <li> Accueil</li>
          </NavLink>

          <NavLink
            to={"/add-cart"}
            className={(nav) => nav.isActive && "nav-active"}
          >
            <li>Ajouter une voiture</li>
          </NavLink>

          <NavLink
            to={"/speed-test"}
            className={(nav) => nav.isActive && "nav-active"}
          >
            <li>Simuler la vitesse</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
