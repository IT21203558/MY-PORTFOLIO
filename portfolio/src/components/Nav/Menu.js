// Menu.js
import React from "react";
import "./Menu.css";
import { Link } from "react-router-dom";
const Menu = ({ isOpen, onClose }) => {
  return (
    <div className={`menu ${isOpen ? "open" : ""}`}>
      <button className="close-button" onClick={onClose}>
        &times;
      </button>
      <div className="menu-container">
        <div className="left-column-menu">
          <div className="welcome-text">
            Design is so<br></br>
            simple, that's why<br></br>
            it is so <br></br>
            complicated!
          </div>
        </div>
        <div className="right-column-menu">
          <div className="welcome-text-name">SHAM</div>
          <ul>
          <li>
          <Link to="/home">
           HOME
            </Link></li>
            <li> <Link to="/abot">ABOUT</Link></li>
            <li> <Link to="/contact">WORKS</Link></li>
            <li> <Link to="/contact">CONTACT</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
