import React from "react";
import "./Header.css";
import { Link } from 'react-router-dom';
function Header() {
    return (
      <ul>
        <li class="a"><Link to="/">Home</Link></li>
        <li class="a"><Link to="/About">About</Link></li>
        <li class="a"><Link to="/Contact">Contact</Link></li>
        <li class="a"><Link to="/Login">Login</Link></li>
      </ul>
    );
  }

  export default Header;