import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">AGROVESTORS</Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/write">Write</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/mission">Mission</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/employees">Our Team</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
