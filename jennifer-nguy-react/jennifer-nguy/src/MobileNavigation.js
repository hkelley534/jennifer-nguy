import React from 'react';
import NavLinks from './NavLinks';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {RiMenu4Line, RiCloseFill} from 'react-icons/ri';
import {useState} from 'react';
import header_logo from './assets/logo.png';
import './Styles/header.css';

function Header() {

  const [open, setOpen] = useState(false);

  const openMenu = <RiMenu4Line id="nav-button" size='50px' onClick={() => setOpen(!open)}/>

  const closeMenu = <RiCloseFill id="nav-button" size='50px' onClick={() => setOpen(!open)}/>

  return(
    <header>
        <div id="header-container">
          {/* Home Logo */}
          <div id="header-logo">
            <a href="index.html">
                <img id="header-logo-img" src={header_logo} alt="logo" />
            </a>
          </div>
          {/* Navigation Bar */}
          <div id="navigation-bar">
              {/* Navigation Button */}
              {open ? closeMenu: openMenu}
              {open && <NavLinks />}
          </div>
        </div>
    </header>
  )
};

function MobileNavigation() {
    return (
      <div className="MobileNavigation">
        <Header />
      </div>
    );
};

export default MobileNavigation;
