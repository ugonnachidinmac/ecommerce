import React from 'react'
import { Image } from "cloudinary-react";
import { images } from "../../../data/cartdata.json";
import logoImageCart from "../../assets/logoImageCart.png";
import arrowrightCart from "../../assets/arrowrightCart.png";

const SectionBckground = () => {
  return (
    <div
    className="relative w-full h-[316px] bg-cover bg-center"
    style={{
      backgroundImage: `url(${images.image1.url})`, // Set the background image here
    }}
  >
    <div className="absolute inset-0 flex flex-col place-content-center items-center justify-center text-center p-6">
      <img src={logoImageCart} alt="Cart Logo" className="w-[77px]" />
      <h2 className="font-Poppins text-[48px] font-semibold mb-2">Cart</h2>
      <div className="flex items-center space-x-2  p-2 rounded-lg">
        <p className="font-Poppins text-[16px] font-bold">Home</p>
        <img src={arrowrightCart} alt="Arrow Right" className="w-4 h-4" />
        <p>Cart</p>
      </div>
    </div>
  </div>
  )
}

export default SectionBckground;