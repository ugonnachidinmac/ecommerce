import React from "react";
import logoImageCart from "../../assets/logoImageCart.png";
import arrowrightCart from "../../assets/arrowrightCart.png";
import deleteIconCart from "../../assets/deleteIconCart.png";
import iconHigh from '../../assets/iconHigh.png';
import iconWarranty from '../../assets/iconWarranty.png';
import Intro from '../../Components/Cart/Intro'
import CartSec2 from '../../Components/Cart/CartSec2'
import LastSection from '../../Components/Cart/LastSection'
import iconFree from '../../assets/iconFree.png';
import iconSupport from '../../assets/iconSupport.png';
import { Image } from "cloudinary-react";
import { images } from "../../../data/cartdata.json";
import SectionBackground from '../ReuseSection/SectionBckground'

const Cart = () => {
  return (
    <>
    <Intro />
    <CartSec2 />
      <LastSection />

    </>
  );
};

export default Cart;
