import React, { useState, useEffect } from "react";
import img41 from "../assets/img41.png";
import hori from "../assets/hori.png";
import arrowRight from "../assets/arrowRight.png";
import img42 from "../assets/img42.png";
import arrowrightpoint from "../assets/arrowrightpoint.png";
import img43 from "../assets/img43.png";

const Section3 = () => {
  const images = [img41, img42, img43]; // Add your images here
  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatically switch slides every 5 seconds
  useEffect(() => {
    const slideInterval = setInterval(() => {
      goToNextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(slideInterval); // Clear interval when the component unmounts
  }, [currentSlide]);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="section3Container">
      <div className="sec3Row1">
        <p>
          50+ Beautiful rooms <br />
          inspiration
        </p>
        <p>
          Our designer already made a lot of beautiful prototype of rooms that
          inspire you
        </p>
        <button>Explore More</button>
      </div>

      <div className="sec3Row2">
        <img src={img41} alt="img41" />
        <div className="bgWhiteContent">
          <div className="containerRoom1">
            <div className="room1">
              <p>01</p>
              <img src={hori} alt="" />
              <p>Bed Room</p>
            </div>
            <p>Inner Peace</p>
          </div>
          <div className="arrowRight">
            <img src={arrowRight} alt="" />
          </div>
        </div>
      </div>

      {/* Image slider */}
      <div className="sec3MiddleTop">
        <div className="imgContainer">
          {/* Display current image */}
          <img className="imgSlide" src={images[currentSlide]} alt={`Slide ${currentSlide}`} />

          {/* Left arrow */}
          <div className="arrowrightpoint" onClick={goToPreviousSlide}>
            <img src={arrowrightpoint} alt="Previous" />
          </div>

          {/* Right arrow */}
          <div className="arrowrightpoint" onClick={goToNextSlide}>
            <img src={arrowrightpoint} alt="Next" />
          </div>
        </div>

        {/* Dots for navigation */}
        <div className="dotsContainer">
          {images.map((_, index) => (
            <div
              key={index}
              className={`dot w-[11px] h-[11px] rounded-full cursor-pointer ${
                index === currentSlide ? "bg-[#B88E2F]" : "bg-[#D8D8D8]"
              }`}
              onClick={() => handleDotClick(index)}
            ></div>
          ))}
        </div>
      </div>

      <div>
        <img src={img43} alt="img43" />
      </div>
    </div>
  );
};

export default Section3;
