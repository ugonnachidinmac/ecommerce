import React from "react";
import img5col11 from '../assets/img5col11.png'
import img5col12 from '../assets/img5col12.png'
import img5col13 from '../assets/img5col13.png'
import img5col14 from '../assets/img5col14.png'
import img5col2 from '../assets/img5col2.png'
import img5col31 from '../assets/img5col31.png'
import img5col32 from '../assets/img5col32.png'
import img5col33 from '../assets/img5col33.png'
import img5col34 from '../assets/img5col34.png'
import { Image } from "cloudinary-react";
import { images } from "../../data/homedata.json"

const Section4 = () => {
  return (
    <>
    <div className="share">
    <p>Share your setup with</p>
    <p>#FuniroFurniture</p>
    </div>
      <div className="section4Container ">

        <div className="colA">
            <div className="colADiv1">
            <Image 
    loading="lazy"
    cloudName={images.cloudName}
    publicId={images.image1.url}
  />
            <Image 
    loading="lazy"
    cloudName={images.cloudName}
    publicId={images.image2.url}
  />
                {/* <img src={img5col11} alt="" />
                <img src={img5col12} alt="" /> */}
            </div>
            <div className="colADiv2">
            <Image 
    loading="lazy"
    cloudName={images.cloudName}
    publicId={images.image3.url}
  />
            <Image 
    loading="lazy"
    cloudName={images.cloudName}
    publicId={images.image4.url}
  />
                {/* <img src={img5col13} alt="" />
                <img src={img5col14} alt="" /> */}
            </div>
        </div>

        <div className="colB">
        <Image 
    loading="lazy"
    cloudName={images.cloudName}
    publicId={images.image5.url}
  />
            {/* <img src={img5col2} alt="" /> */}
        </div>

        <div className="colC">
            <div className="colCDiv1">
            <Image 
    loading="lazy"
    cloudName={images.cloudName}
    publicId={images.image6.url}
  />
            <Image 
    loading="lazy"
    cloudName={images.cloudName}
    publicId={images.image7.url}
  />
                {/* <img src={img5col31} alt="" />
                <img src={img5col32} alt="" /> */}
            </div>
            <div className="colCDiv2">
            <Image 
    loading="lazy"
    cloudName={images.cloudName}
    publicId={images.image8.url}
  />
            <Image 
    loading="lazy"
    cloudName={images.cloudName}
    publicId={images.image9.url}
  />
                {/* <img src={img5col33} alt="" />
                <img src={img5col34} alt="" /> */}
            </div>
        </div>

      </div>
      {/* <hr /> */}
    </>
  );
};

export default Section4;
