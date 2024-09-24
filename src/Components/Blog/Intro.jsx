import React, { useState } from "react";
import { Image } from "cloudinary-react";
import logoImageCart from "../../assets/logoImageCart.png";
import arrowrightCart from "../../assets/arrowrightCart.png";

const Intro = () => {
  return (
    <>
     {/* Header Section with Background Image */}
     <div className="relative h-[316px] flex items-center justify-center flex-col">
        <Image className="absolute top-0 left-0 h-[316px] w-full"  cloudName="dqtyrjpeh" publicId="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1726531531/backgrounImage_for_car_ujboan.png"    loading="lazy" />
        <div className="flex items-center justify-center flex-col gap-2">
        <img src={logoImageCart} alt="Cart Logo" className="w-[77px]" />
          <h2 className="font-Poppins text-[48px] font-semibold mb-2">Blog</h2>
          <div className="flex items-center space-x-2 p-2 rounded-lg">
            <p className="font-Poppins text-[16px] font-bold">Home</p>
            <img src={arrowrightCart} alt="Arrow Right" className="w-4 h-4" />
            <p>Blog</p>
          </div>
        </div>
      </div>
    
    </>
  )
}

export default Intro