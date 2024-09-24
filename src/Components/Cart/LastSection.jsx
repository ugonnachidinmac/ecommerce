import React from "react";
import logoImageCart from "../../assets/logoImageCart.png";
import arrowrightCart from "../../assets/arrowrightCart.png";
import deleteIconCart from "../../assets/deleteIconCart.png";
import iconHigh from '../../assets/iconHigh.png';
import iconWarranty from '../../assets/iconWarranty.png';
import Intro from '../../Components/Cart/Intro'
import CartSec2 from '../../Components/Cart/CartSec2'

import iconFree from '../../assets/iconFree.png';
import iconSupport from '../../assets/iconSupport.png';
import { Image } from "cloudinary-react";
import { images } from "../../../data/cartdata.json";
import SectionBackground from '../ReuseSection/SectionBckground'

const LastSection = () => {
  return (
    <>
    {/* last session */}
<div className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap justify-between gap-10 px-10 py-20 bg-red-100 mt-[45px]">
        <div className="flex gap-4">
          <img className="max-w-[60px] h-[60px]" src={iconHigh} alt="" />
          <div className="mt-1 max-w-[267px] h-[70px]">
            <p>High Quality</p>
            <p>crafted from top materials</p>
          </div>
        </div>
        <div className="flex gap-4">
          <img className="max-w-[60px] h-[60px]" src={iconWarranty} alt="" />
          <div className="mt-1 max-w-[267px] h-[70px]">
            <p>Warranty Protection</p>
            <p>Over 2 years</p>
          </div>
        </div>
        <div className="flex gap-4">
          <img className="max-w-[60px] h-[60px]" src={iconFree} alt="" />
          <div className="mt-1 max-w-[267px] h-[70px]">
            <p>Free Shipping</p>
            <p>Order over 150 $</p>
          </div>
        </div>
        <div className="flex gap-4">
          <img className="max-w-[60px] h-[60px]" src={iconSupport} alt="" />
          <div className="mt-1 max-w-[267px] h-[70px]">
            <p>24 / 7 Support</p>
            <p>Dedicated support</p>
          </div>
        </div>
</div>

    </>
  )
}

export default LastSection;