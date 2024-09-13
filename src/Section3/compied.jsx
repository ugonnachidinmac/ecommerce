import React from "react";
import img41 from "../assets/img41.png";
import hori from "../assets/hori.png";
import arrowRight from "../assets/arrowRight.png";
import img42 from "../assets/img42.png";
import arrowrightpoint from "../assets/arrowrightpoint.png";
import dot1 from "../assets/dot1.png";
import dot2 from "../assets/dot2.png";
import img43 from "../assets/img43.png";

const Section3 = () => {
  return (
    <>
      <div className="section3Container">
        <div className="sec3Row1">
          <p>
            50+ Beautiful rooms <br />
            inspiration
          </p>
          <p>
            Our designer already made a lot of beautiful prototipe of rooms that
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

        <div className="sec3MiddleTop">
          <div className="imgContainer">
            <img className="img42" src={img42} alt="" />
            {/* slider arrow */}
            <div className="arrowrightpoint">
              <img src={arrowrightpoint} alt="" />
            </div>
          </div>
          {/* slider dots */}
          <div className="dotsContainer">
            <div className="firstdot"></div>
            <div className="seconddot"></div>
            <div className="thirddot"></div>
            <div className="forthdot"></div>
            {/* <img src={dot1} alt="" />
            <img src={dot2} alt="" />
            <img src={dot2} alt="" />
            <img src={dot2} alt="" /> */}
          </div>
        </div>
        <div className="dotsContainer" onClick={goToPreviousSlide}>
            {/* <img src={arrowrightpoint} alt="Previous" style={{ transform: "rotate(180deg)" }} /> */}
            <img src={dot1} alt="" />
            <img src={dot2} alt="" />
            <img src={dot2} alt="" />
            <img src={dot2} alt="" /> 
          </div>

        <div>
          <img src={img43} alt="" />
        </div>
      </div>
    </>
  );
};

export default Section3;
