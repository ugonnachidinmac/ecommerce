import React, { useEffect, useState } from "react";
import background1 from '../../data/background1.json';
import styles from '../Components/css/style1.module.css'; // Import CSS Module


const Section1 = () => {
  const [bgImage, setBgImage] = useState('');

  useEffect(() => {
    if (Array.isArray(background1) && background1.length > 0) {
      setBgImage(background1[0].url); // Use the first image from the JSON
    }
  }, []);

  return (
    <div
      className="section1Style w-full"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="nextDiv w-full">
        <p className="text-[16px] font-[Poppins]  mb-[25px]">New Arrival</p>
        <div className="h2 my-4 w-full">
          <h2 className="text-2xl font-bold text-gray-800 mb-[30px]">Discover Our</h2>
          <h2 className="text-2xl font-bold text-gray-800">New Collection</h2>
        </div>
        <p className="text-[18px] font-[Poppins]  mb-[45px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
        <button className="px-4 py-2 bg-red-500 text-white rounded-lg  transition-all">
          BUY Now
        </button>
      </div>
    </div>
  );
};

export default Section1;
