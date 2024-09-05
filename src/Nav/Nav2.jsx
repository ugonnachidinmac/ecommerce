import React from 'react';
import { useState } from 'react';
import logo from '../assets/logo.png';
import navIcon1 from '../assets/navIcon1.png';
import navIcon2 from '../assets/navIcon2.png';
import navIcon3 from '../assets/navIcon3.png';
import navIcon4 from '../assets/navIcon4.png';
import Hamburger from '../assets/Hamburger.png'
import Home from '../Home/Home'
import { Link } from 'react-router-dom'; // Correct the import

function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className='py-5 px-8'>
            <ol className='flex items-center justify-between'>
                <li>
                    <Link to="/Home"><img src={logo} alt="logo" /></Link>
                </li>
                <li className={`flex items-center justify-center gap-[35px] ${isMenuOpen ? 'block' : 'hidden'} md:flex`}>
                    <Link to="/Home">Home</Link>
                    <Link to="/Shop">Shop</Link>
                    <Link to="/About">About</Link>
                    <Link to="/Contact">Contact</Link>
                </li>
                <li className={`flex items-center justify-center gap-[35px] ${isMenuOpen ? 'block' : 'hidden'} md:flex`}>
                    <Link to="/"><img src={navIcon1} alt="navIcon1" /></Link>
                    <Link to="/"><img src={navIcon2} alt="navIcon2" /></Link>
                    <Link to="/"><img src={navIcon3} alt="navIcon3" /></Link>
                    <Link to="/"><img src={navIcon4} alt="navIcon4" /></Link>
                </li>
                <button className='block md:hidden' onClick={toggleMenu}>
                    <img src={Hamburger} alt="Menu" />
                </button>
            </ol>
        </nav>
    );
}
<Home />

export default Nav;