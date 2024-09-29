import React, { useState, useEffect  } from 'react';
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
    const [isBlinking, setIsBlinking] = useState(false);

    useEffect(() => {
        if (cart.length > 0) {
          setIsBlinking(true);
          const timeout = setTimeout(() => setIsBlinking(false), 9000); // Blinks for 2 seconds
          return () => clearTimeout(timeout); // Cleanup timeout
        }
      }, [cart]);
  return (
    <nav className='nav-container w-full'>
        <ol className='flex items-center justify-between'>
            <li>
                <Link to="/"><img src={logo} alt="logo" /></Link> {/* Use 'Link' and 'to' */}
            </li>
            <li className='custom-style linkFont'>
  <Link
    to="/Home"
    className="hover:bg-[#B88E2F] hover:text-white focus:bg-[#B88E2F] focus:text-white active:bg-[#B88E2F] active:text-white px-4 py-2 transition"
  >
    Home
  </Link>
  <Link
    to="/Shop"
    className="hover:bg-[#B88E2F] hover:text-white focus:bg-[#B88E2F] focus:text-white active:bg-[#B88E2F] active:text-white px-4 py-2 transition"
  >
    Shop
  </Link>
  <Link
    to="/About"
    className="hover:bg-[#B88E2F] hover:text-white focus:bg-[#B88E2F] focus:text-white active:bg-[#B88E2F] active:text-white px-4 py-2 transition"
  >
    About
  </Link>
  <Link
    to="/Contact"
    className="hover:bg-[#B88E2F] hover:text-white focus:bg-[#B88E2F] focus:text-white active:bg-[#B88E2F] active:text-white px-4 py-2 transition"
  >
    Contact
  </Link>
  <Link
    to="/Blog"
    className="hover:bg-[#B88E2F] hover:text-white focus:bg-[#B88E2F] focus:text-white active:bg-[#B88E2F] active:text-white px-4 py-2 transition"
  >
    Blog
  </Link>
</li>

            <li className='custom-style'>
                <Link to="/"><img src={navIcon1} alt="navIcon1" /></Link>
                <Link to="/"><img src={navIcon2} alt="navIcon2" /></Link>
                <Link to="/"><img src={navIcon3} alt="navIcon3" /></Link>
                <div className='relative'>
  <Link to="#" onClick={() => setShow((prev) => !prev)}>
    <img src={navIcon4} alt="navIcon4" />
  </Link>
  <span
    className={`absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex justify-center items-center ${
      isBlinking ? 'animate-blink' : ''
    }`}
  >
    {cart.length}
  </span>
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