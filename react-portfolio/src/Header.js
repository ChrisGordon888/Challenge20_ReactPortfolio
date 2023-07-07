import React from 'react';
import logo from './0.jpg';


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
            <a href="#about" className="nav-link">About Me</a>
          </li>
          <li className="nav-item">
            <a href="#portfolio" className="nav-link">Portfolio</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">Contact</a>
          </li>
          <li className="nav-item">
            <a href="#resume" className="nav-link">Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;