import React from 'react';
import logo from '../assets/logo.png';
import navIcon1 from '../assets/navIcon1.png';
import navIcon2 from '../assets/navIcon2.png';
import navIcon3 from '../assets/navIcon3.png';
import navIcon4 from '../assets/navIcon4.png';
import Hamburger from '../assets/Hamburger.png';
import Home from '../Home/Home';
import Cart from '../Components/Cart/Cart'
import Shop from '../Components/Shop/Shop';
import About from '../Components/About/About';
import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
  const location = useLocation();

  // Conditionally hide Nav if the current path is '/Cart'
  if (location.pathname === '/Cart') {
    return null;
  }

  return (
    <nav className='nav-container'>
      <ol className='flex items-center justify-between'>
        <li>
          <Link to="/"><img src={logo} alt="logo" /></Link>
        </li>
        <li className='custom-style linkFont'>
          <Link to="/Home">Home</Link>
          <Link to="/Shop">Shop</Link>
          <Link to="/About">About</Link>
          <Link to="/Contact">Contact</Link>
          <Link to="/Blog">Blog</Link>
        </li>
        <li className='custom-style'>
          <Link to="/"><img src={navIcon1} alt="navIcon1" /></Link>
          <Link to="/"><img src={navIcon2} alt="navIcon2" /></Link>
          <Link to="/"><img src={navIcon3} alt="navIcon3" /></Link>
          <Link to="/Cart"><img src={navIcon4} alt="navIcon4" /></Link>
        </li>
        <li className="menu dropdown">
          <img className="dropbtn" src={Hamburger} alt="menu" />
          <div className="dropdown-content">
            <Link to="/Home">Home</Link>
            <Link to="/Shop">Shop</Link>
            <Link to="/About">About</Link>
            <Link to="/Contact">Contact</Link>
            <div>
              <Link to="/"><img src={navIcon1} alt="navIcon1" /></Link>
              <Link to="/"><img src={navIcon2} alt="navIcon2" /></Link>
              <Link to="/"><img src={navIcon3} alt="navIcon3" /></Link>
              <Link to="/Cart"><img src={navIcon4} alt="navIcon4" /></Link>
            </div>
          </div>
        </li>
      </ol>
    </nav>
  );
};

<Home />

export default Nav;