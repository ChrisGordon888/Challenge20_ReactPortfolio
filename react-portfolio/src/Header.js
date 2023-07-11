import React from 'react';
import logo from './pictures/0.jpg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" className="logo" />
          <h1 className="logo-text">Cosmic</h1>
        </div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/about" className="nav-link">About Me</Link>
          </li>
          <li className="nav-item">
            <Link to="/portfolio" className="nav-link">Portfolio</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
          <li className="nav-item">
            <Link to="/resume" className="nav-link">Resume</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;