import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'; // Import useLocation
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';
import './App.css';
import Home from './Home/Home'; 
import Shop from './Components/Shop/Shop';
import About from './Components/About/About';
import Contact from './Contact/Contact';
import Blog from './Components/Blog/Blog';
import SingleProduct from './Components/SingleProduct/SingleProduct';
import Compare from './Components/Compare/Compare';
import ShowMore from './Components/ShowMore/ShowMore';
import Cart from './Components/Cart/Cart';
import Error from './Error/Error';

function App() {
  const [count, setCount] = useState(0);
  const location = useLocation(); // Get the current route

  // Check if the current path is '/Cart'
  const isCartPage = location.pathname === '/Cart';

  return (
    <>
      {!isCartPage && <Nav />} {/* Conditionally render Nav */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Shop' element={<Shop />} />
        <Route path='/ProductComponent/:ProductComponent' element={<SingleProduct />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Blog' element={<Blog />} />
        <Route path='/Compare' element={<Compare />} />
        <Route path='/ShowMore' element={<ShowMore />} />
        <Route path='/Cart' element={<Cart />} /> {/* Cart page */}
        <Route path='*' element={<Error />} />
      </Routes>
      {!isCartPage && <Footer />} {/* Conditionally render Footer */}
    </>
  );
}
// https://chatgpt.com/c/66e4d53c-4160-800b-ba94-fd716cbd67a7

export default App;
