import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                {/* <div className="footer-logo">
          <img className="logo" src="path/to/logo.png" alt="Logo" />
          <span className="logo-text">Your Company</span>
        </div> */}
                <nav className="footer-nav">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <a href="/services" className="nav-link">Github</a>
                        </li>
                        <li className="nav-item">
                            <a href="/contact" className="nav-link">LinkedIn</a>
                        </li>
                        <li className="nav-item">
                            <a href="/" className="nav-link">Youtube</a>
                        </li>
                        <li className="nav-item">
                            <a href="/about" className="nav-link">Instagram</a>
                        </li>


                    </ul>
                </nav>
            </div>
            <p className="footer-text">© {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </footer>
    );
}

export default Footer;