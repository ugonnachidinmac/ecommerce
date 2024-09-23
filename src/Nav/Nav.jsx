import React, { useState } from 'react';
import logo from '../assets/logo.png';
import navIcon1 from '../assets/navIcon1.png';
import navIcon2 from '../assets/navIcon2.png';
import navIcon3 from '../assets/navIcon3.png';
import navIcon4 from '../assets/navIcon4.png';
import Hamburger from '../assets/Hamburger.png';
import Home from '../Home/Home';
import Cart from '../Components/Cart/Cart';
import Shop from '../Components/Shop/Shop';
import About from '../Components/About/About';
import CartSlider from '../Components/Cart/CartSlider'
import { Link } from 'react-router-dom'; // Correct the import
import { useRecoilValue } from 'recoil';
import { cartData } from '../Components/Atom/Cart'

const Nav = () => {
    let [show, setShow] = useState(false);
    let cart = useRecoilValue(cartData);
  return (
    <nav className='nav-container w-full'>
        <ol className='flex items-center justify-between'>
            <li>
                <Link to="/"><img src={logo} alt="logo" /></Link> {/* Use 'Link' and 'to' */}
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
                <div className='relative'>
                <Link to="#" onClick={()=> setShow(prev=> !prev)}><img src={navIcon4} alt="navIcon4" /></Link>
                <span className='absolute top-1/3 right-1/2 bg-red-500 text-white text-sm w-5 h-5 rounded-full flex justify-center'>{cart.length}</span>
                </div>
              
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
        <CartSlider show={show} setShow={setShow} />
    </nav>
  )
}
{/* <Home /> */}

export default Nav;