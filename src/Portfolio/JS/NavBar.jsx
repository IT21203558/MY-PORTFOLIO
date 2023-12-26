import React, { useState } from 'react';
import '../CSS/NavBar.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar-main">
      <div className="navbar-first">
        <div className={isOpen ? 'menu-icon open' : 'menu-icon'} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="navbar-line">
          <div className="navbar-third">SHAM</div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
