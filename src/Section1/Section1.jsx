import React, { useEffect, useState } from "react";
import background1 from '../../data/background1.json';
import { Image } from "cloudinary-react";
import styles from '../Components/css/style1.module.css'; // Import CSS Module
import { Link } from "react-router-dom";

const Section1 = () => {
  const [bgImage, setBgImage] = useState('');

  useEffect(() => {
    if (Array.isArray(background1) && background1.length > 0) {
      setBgImage(background1[0].url); // Use the first image from the JSON
    }
  }, []);

  return (
    <div className="relative w-full h-[1000.85px] flex items-center justify-center flex-col">
      {/* Background Image */}
      <Image
        className="absolute top-0 left-0 w-full h-full object-cover"
        cloudName="dqtyrjpeh"
        publicId="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1726356681/backgroundImage1_lsnwzh.png"
        loading="lazy"
      />

      {/* Content Div */}
      <div
        className="nextDiv w-full relative z-10 text-center p-6" // Added "relative" and "z-10" to bring it to the front
      >
        <p className="text-[16px] font-[Poppins] mb-[25px] text-white">New Arrival</p>
        <div className="my-4 w-full">
          <h2 className="text-2xl font-bold text-white mb-[30px]">Discover Our</h2>
          <h2 className="text-2xl font-bold text-white">New Collection</h2>
        </div>
        <p className="text-[18px] font-[Poppins] mb-[45px] text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
        </p>
        <Link to="/shop">
  <button className="px-4 py-2 bg-red-300 text-white rounded-lg font-bold transition-all duration-300 hover:bg-red-500 cursor-pointer">
    BUY NOW
  </button>
</Link>
      </div>
    </div>
  );
};

export default Section1;
