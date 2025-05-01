
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Sameer Shaikh - Front-End Developer</p>
      <ul>
        <li><a href="https://github.com/sameerengineer" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        <li><a href="https://www.linkedin.com/in/shaikh-sameer-95971025b" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
      </ul>
    </footer>
  );
};

export default Footer;