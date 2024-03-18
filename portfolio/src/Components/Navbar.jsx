import { Link } from "react-router-dom";
import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className={`navbar ${isNavOpen ? 'open' : ''}`}>
      <div className="navbar-brand"></div>
      <div className="navbar-toggle" onClick={toggleNav}>
        ☰
      </div>
      <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/projects">Works</Link>
          <Link to="/contact">Contact</Link>
          {/* <Link to="/parallax">Parallax</Link> */}
      </div>
    </nav>
  );
};

export default Navbar;