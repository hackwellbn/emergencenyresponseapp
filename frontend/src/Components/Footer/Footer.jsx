import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__cards">
        <div className="footer__card">
          <h3>We make it easier for you to communicate with responders.</h3>
        </div>

        <div className="footer__card">
          <h3>Quick Links</h3>
          <ul className="footer__links">
            <li className="links">
              <Link to="/about">About</Link>
            </li>
            <li className="links">
              <Link to="/App">Download App</Link>
            </li>
            <li className="links">
              <Link to="/Home">Home</Link>
            </li>
          </ul>
        </div>

        <div className="footer__card">
          <h3>More</h3>
          <ul className="footer__links">
            <li className="links">
              <a href="https://softnetkenya.com" target="_blank" rel="noopener noreferrer">
                SoftNet
              </a>
            </li>
            <li className="links">
              <a href="https://campredemption.org" target="_blank" rel="noopener noreferrer">
                Donate
              </a>
            </li>
            <li className="links">
              <a href="https://contact.softnetkenya.com" target="_blank" rel="noopener noreferrer">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__logo">
          <h2>Emtech</h2>
        </div>

        <div className="footer__socials">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
        </div>

        <div className="footer__copy">
          <p>&copy; {new Date().getFullYear()} Emtech Emergency Response. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
