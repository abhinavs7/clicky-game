import React from "react";
import "./Navbar.css";

const Navbar = props =>
  <nav className="navbar d-flex justify-content-between px-5 NavBar navbar-fixed-top">
  
      <span>
        {props.result}
      </span>
      <span>
        Top Score: {props.topScore} |  Score: {props.score}
      </span>
  
  </nav>

export default Navbar;
