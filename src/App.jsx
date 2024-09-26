import { lazy, useState } from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import './App.css';
import { Suspense } from 'react';

const Nav = lazy(()=> import ('./Nav/Nav'))
const Footer = lazy(()=> import ('./Footer/Footer'))
const Home = lazy(()=> import ('./Home/Home'))
const Shop = lazy(()=> import ('./Components/Shop/Shop'))
const About = lazy(()=> import ('./Components/About/About'))
const Contact = lazy(()=> import ('./Components/Contact/Contact'))
const Blog = lazy(()=> import ('./Components/Blog/Blog'))
const SingleProduct = lazy(()=> import ('./Components/SingleProduct/SingleProduct'))
const Compare = lazy(()=> import ('./Components/Compare/Compare'))
const ShowMore = lazy(()=> import ('./Components/ShowMore/ShowMore'))
const Cart = lazy(()=> import ('./Components/Cart/Cart'))
const Products = lazy(()=> import ('./Products/Products'))
const CheckOut = lazy(()=> import ('./Components/CheckOut/CheckOut'))
const Comparison = lazy(()=> import ('./Components/Comparison/Comparison'))
const Error = lazy(()=> import ('./Error/Error'))

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      <Suspense fallback={<div className='flex items-center justify-center flew-row gap-3 min-h-[70vh] text-red-700 font-edu text-3xl'>Loading...</div>}>
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
          <Route path='/Cart' element={<Cart />} />
          <Route path='/single/:id' element={<SingleProduct />} />
          <Route path='/Products' element={<Products />} />
          <Route path='/CheckOut' element={<CheckOut />} />
          <Route path='/Comparison' element={<Comparison />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Suspense>
      <Footer />
 {/*  http://localhost:5174/ */}
    </>
  );
}

export default App;
