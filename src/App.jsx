import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';
import './App.css';
import Home from './Home/Home'; // Assuming you have these components
import Shop from './Components/Shop/Shop';
import About from './Components/About/About';
import Contact from './Contact/Contact';
import Blog from './Components/Blog/Blog';
import SingleProduct from './Components/SingleProduct/SingleProduct';
import Error from './Error/Error';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Shop' element={<Shop />} />
        <Route path='/Shop/:Shop' element={<SingleProduct />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Blog' element={<Blog />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
