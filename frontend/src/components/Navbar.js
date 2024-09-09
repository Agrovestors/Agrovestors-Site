import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const aboutDropdownRef = useRef(null);
  const teamDropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      (aboutDropdownRef.current && !aboutDropdownRef.current.contains(event.target)) ||
      (teamDropdownRef.current && !teamDropdownRef.current.contains(event.target))
    ) {
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
        <li className="dropdown" ref={aboutDropdownRef}>
          <button className="dropdown-button">About Us</button>
          <div className="dropdown-menu">
            <Link to="/AfTech">A.F Tech</Link>
            <Link to="/mission">Vision and Mission</Link>
            <Link to="/legacy">Our Legacy</Link>
          </div>
        </li>
        <li className="dropdown" ref={teamDropdownRef}>
          <button className="dropdown-button">Agrovestors Team</button>
          <div className="dropdown-menu">
            <Link to="/employees">Meet Our Team</Link>
            <Link to="/Values">Our Cultural Values</Link>
            <Link to="/philosophy">Our Philosophy</Link>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
