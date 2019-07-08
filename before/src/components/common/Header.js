import React from "react";

import { NavLink } from "react-router-dom";
const activeStyle = { color: "#F15B2A" };

const Header = () => (
  <nav>
    <NavLink to="/" activeStyle={activeStyle} exact>
      Home
    </NavLink>
    {" || "}
    <NavLink to="/courses" activeStyle={activeStyle}>
      courses
    </NavLink>
    {" || "}
    <NavLink to="/about" activeStyle={activeStyle}>
      About
    </NavLink>
  </nav>
);

export default Header;
