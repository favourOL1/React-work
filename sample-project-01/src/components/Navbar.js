import React, { useState } from "react";
import { AiOutlineArrowRight, AiOutlineBars } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";
import { FaBitcoin } from "react-icons/fa";

import {Link} from 'react-router-dom'

import "./Navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav className="navbar container">
        <Link to='/'>
      <div className="logo">
        <FaBitcoin color="#fff" size={33} />
        <h1 className="logo-text">
          <span>Coins</span>
        </h1>
      </div>
      </Link>
      <menu>
        <ul
          className="nav-links"
          id={showMenu ? "nav-links-mobile" : "nav-links-mobile-hide"}
        >
          
          <li>
          <Link to='/about'><a >About! <AiOutlineArrowRight/></a></Link>
          </li>
          <li>
          <Link to='/'> <a href="#header">Auth Coin <AiOutlineArrowRight/></a></Link>
          </li>
        </ul>
      </menu>
      <div className="menu-icons" onClick={toggleMenu}>
        {showMenu ? (
          <RiCloseLine color="#fff" size={30} />
        ) : (
          <AiOutlineBars color="#fff" size={27} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
