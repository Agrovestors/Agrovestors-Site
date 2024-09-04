import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      // Optionally handle click outside for other purposes
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
        <li className="dropdown" ref={dropdownRef}>
          <button className="dropdown-button">About Us</button>
          <div className="dropdown-menu">
            <Link to="/about/our-team">Our Team</Link>
            <Link to="/about/mission">Our Mission</Link>
            <Link to="/about/contact">Contact Us</Link>
          </div>
        </li>
        <li>
          <Link to="/employees">Our Team</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
