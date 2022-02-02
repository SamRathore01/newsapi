import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';
const Navbar = () => {
  return <div>
      <nav className="navbar-1">
    <span className="navbar-toggle" id="js-navbar-toggle">
            <i className="fas fa-bars"></i>
        </span>
    
    <Link className="logo" to="/">
          Daily News
          </Link>
    <ul className="main-nav" id="js-menu">
    <li>
          <Link className="nav-links" to="/">
          Home
          </Link>
      </li>
      <li>
          <Link className="nav-links" to="/Crypto">
          Crypto
          </Link>
      </li>
      <li>
        <Link className="nav-links" to="/Sports">
        Sports
          </Link>
      </li>
      <li>
        <Link className="nav-links" to="/business">
          Business
          </Link>
      </li>
      <li>
        <Link className="nav-links" to="/covid">
        Covid
          </Link>
      </li>
    </ul>
  </nav>

  
  </div>;
};

export default Navbar;
