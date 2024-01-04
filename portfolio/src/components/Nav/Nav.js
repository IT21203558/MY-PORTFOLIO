import React from 'react';
import Menu from "./Menu";
import './Nav.css';
import { useState } from "react";

function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <div>
      <nav className="navbar">
        <div className="menu-icon" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="27"
            viewBox="0 0 50 27"
            fill="none"
          >
            <line y1="2.5" x2="38" y2="2.5" stroke="white" stroke-width="4" />
            <line y1="24.5" x2="38" y2="24.5" stroke="white" stroke-width="4" />
            <line
              x1="12"
              y1="14.5"
              x2="50"
              y2="14.5"
              stroke="white"
              stroke-width="4"
            />
          </svg>
        </div>
        <div className="sham-text">SHAM</div>
        <Menu isOpen={isMenuOpen} onClose={closeMenu} />
      </nav>
    </div>
  )
}

export default Nav
