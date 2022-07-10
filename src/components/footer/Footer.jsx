import React from "react";
import "./Footer.css";
import { FiInstagram } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        DevCeo's Portfolio
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.instagram.com/0._.14/">
          <FiInstagram />
        </a>
        <a href="https://www.facebook.com/soochang.jung.7/">
          <FaFacebookF />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
