import React from 'react'
import SectionBckground from '../ReuseSection/SectionBckground'
import Section2 from '../../Components/Contact/Section2'
import Section3 from '../../Components/Contact/Section3'
import LastSection from '../../Components/ReuseSection/LastStion'
import logoImageCart from "../../assets/logoImageCart.png";
import arrowrightCart from "../../assets/arrowrightCart.png";
import { Image } from "cloudinary-react";
import { images } from "../../../data/cartdata.json";


const Contact = () => {
  return (
 <>
 <div
    className="relative w-full h-[316px] bg-cover bg-center"
    style={{
      backgroundImage: `url(${images.image1.url})`, // Set the background image here
    }}
  >
    <div className="absolute inset-0 flex flex-col place-content-center items-center justify-center text-center p-6">
      <img src={logoImageCart} alt="Cart Logo" className="w-[77px]" />
      <h2 className="font-Poppins text-[48px] font-semibold mb-2">Contact</h2>
      <div className="flex items-center space-x-2  p-2 rounded-lg">
        <p className="font-Poppins text-[16px] font-bold">Home</p>
        <img src={arrowrightCart} alt="Arrow Right" className="w-4 h-4" />
        <p>Contact</p>
      </div>
    </div>
  </div>
 <Section2 />
 <Section3 /> 
 <LastSection />
 </>
  )
}

export default Contact