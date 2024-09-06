import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';
import './App.css';
import Home from './Home/Home'; // Assuming you have these components
import Shop from './Shop/Shop';
import About from './About/About';
import Contact from './Contact/Contact';
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
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
