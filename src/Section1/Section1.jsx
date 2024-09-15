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
      className="section1Style"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="nextDiv">
        <p className="text-sm font-semibold text-gray-500">New Arrival</p>
        <div className="h2 my-4">
          <h2 className="text-2xl font-bold text-gray-800">Discover Our</h2>
          <h2 className="text-2xl font-bold text-gray-800">New Collection</h2>
        </div>
        <p className="text-sm text-gray-600 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
        <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all">
          BUY Now
        </button>
      </div>
    </div>
  );
};

export default Section1;
