import React, { useState } from "react";
import { Image } from "cloudinary-react";
import { images } from "../../../data/singleProduct.json";
import arrowRightBlack from "../../assets/arrowRightBlack.png";
import iconSStar from "../../assets/iconSStar.png";
import iconShStar from "../../assets/iconShStar.png";
import color1 from "../../assets/color1.png";
import color2 from "../../assets/color2.png";
import color3 from "../../assets/color3.png";
import iconSFacebook from "../../assets/iconSFacebook.png";
import iconSLinkin from "../../assets/iconSLinkin.png";
import iconsTwitter from "../../assets/iconsTwitter.png";
import { Link } from 'react-router-dom'; // Correct the import

const About = () => {
  let [singleProduct, setSingleProduct] = useState(null);
  return (
    <>
      {/*  grid-cols-1 sm:grid-cols-1 lg:gridgrid-cols-3 gap-10 */}
      <div class="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap gap-5 px-10 py-20 bg-red-100">
        <div class="flex flex-row gap-2">
          <p class="font-Poppins text-[16px] font-semibold">Home</p>
          <img class="w-[20px] h-[20px] mt-1" src={arrowRightBlack} alt="" />
        </div>
        <div class="flex flex-row gap-2">
          <p class="font-Poppins text-[16px] font-semibold">Shop</p>
          <img class="w-[20px] h-[20px] mt-1" src={arrowRightBlack} alt="" />
        </div>
        {/* border: 2px solid #9F9F9F */}
        <div class="border-l border-l-[#9F9F9F] pl-4 font-Poppins text-[16px] font-semibold">
          Asgaard sofa
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-2 overflow-hidden pl-10 mt-10">
        <div class="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap gap-5">
          <div class="w-[76px] h-[416px] flex flex-col gap-10">
            <div class="flex-1 bg-[#F9F1E7] h-[80px]">
              <Image
                loading="lazy"
                cloudName={images.cloudName}
                publicId={images.image1.url}
              />
            </div>
            <div class="flex-1 bg-[#F9F1E7]">
              <Image
                loading="lazy"
                cloudName={images.cloudName}
                publicId={images.image2.url}
              />
            </div>
            <div class="flex-1 bg-[#F9F1E7]">
              <Image
                loading="lazy"
                cloudName={images.cloudName}
                publicId={images.image3.url}
              />
            </div>
            <div class="flex-1 bg-[#F9F1E7]">
              <Image
                loading="lazy"
                cloudName={images.cloudName}
                publicId={images.image4.url}
              />
            </div>
          </div>

          <div class="w-[300px] h-[480px] flex-1 bg-[#F9F1E7] mr-20">
            <div>
              <Image
                loading="lazy"
                cloudName={images.cloudName}
                publicId={images.image5.url}
              />
            </div>
          </div>
        </div>
        <div class="w-[606.01px] h-[750px]  ml-5">
          <p class="size-[52px] font-bold font-poppins w-[282px] h-[62px] pt-8">
            Asgaard sofa
          </p>
          <p class="size-[24px] font-poppins font-semibold text-[#9F9F9F] w-[173px]">
            Rs. 250,000.00
          </p>

          <div class="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap gap-5 mt-5">
            <div class="flex gap-2 w-[124px]  ">
              <img class="w-[20px] h-[20px]" src={iconSStar} alt="" />
              <img class="w-[20px] h-[20px]" src={iconSStar} alt="" />
              <img class="w-[20px] h-[20px]" src={iconSStar} alt="" />
              <img class="w-[20px] h-[20px]" src={iconSStar} alt="" />
              <img class="w-[20px] h-[20px]" src={iconShStar} alt="" />
            </div>
            <div class="flex w-[195px] h-[20px]  mb-5 border-l-2 border-l-[#9F9F9F] pl-6">
              5 Customer Review
            </div>
          </div>
          <p class=" flex-1 w-full md:w-[455px] text-[13px] font-poppins font-semibold mb-5 whitespace-normal">
            Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stout-hearted hero with a well-balanced audio
            which boasts a clear midrange and extended highs for a sound.
          </p>

          <p class="text-[13px] font-poppins font-semibold text-[#9F9F9F] mb-5">
            Size
          </p>
          <div class="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap gap-5 mb-5">
            <div class="text-[13px] font-poppins font-semibold bg-[#B88E2F] p-4 rounded-[5px] text-slate-100">
              l
            </div>
            <div class="text-[13px] font-poppins font-semibold bg-[#F9F1E7] p-3 rounded-[5px]">
              xl
            </div>
            <div class="text-[13px] font-poppins font-semibold bg-[#F9F1E7] p-3 rounded-[5px]">
              xs
            </div>
          </div>
          <p class="text-[14px] font-poppins font-semibold text-[#9F9F9F] mb-5">
            Color
          </p>
          <div class="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap gap-5 mb-5">
            <img class="w-[30px] h-[30px]" src={color1} alt="" />
            <img class="w-[30px] h-[30px]" src={color2} alt="" />
            <img class="w-[30px] h-[30px]" src={color3} alt="" />
          </div>


          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-[606px]">
            <div class="w-[123px] h-[64px] flex items-center justify-between p-2 rounded-[5px] border border-[#9F9F9F] text-[14px] font-poppins font-semibold">
              <span>-</span>
              <span>1</span>
              <span>+</span>
            </div>

            <div class="w-[123px] h-[64px] flex items-center justify-center p-2 rounded-[5px] border border-[#9F9F9F] text-[14px] font-poppins font-semibold">Add To Cart</div>
            <div class="w-[123px] h-[64px] flex items-center justify-center gap-3 p-2 rounded-[5px] border border-[#9F9F9F] text-[14px] font-poppins font-semibold">
              <span>+</span>
              <span>Compare</span>
            </div>
            
            </div>
            <div class="flex flex-col w-[620px]  border-t-2 border-t-[#9F9F9F] pt-6 mt-8">
              <div class="flex gap-4 mb-2">
                <span class="w-[80px]">SKU</span>
                <span>:</span>
                <span class="pl-2">SS001</span>
              </div>
              <div class="flex gap-4 mb-2">
                < span class="w-[80px]">Category</span>
                <span>:</span>
                <span class="pl-2">Sofas</span>
              </div>
              <div class="flex gap-4 mb-2">
                <span class="w-[80px]">Tags</span>
                <span>:</span>
                <span class="w-[490px] pl-2">Sofa, Chair, Home, Shop</span>
              </div>
              <div class="flex gap-4 mb-2">
                <span class="w-[80px]">Share</span>
                <span>:</span>
                <div class="flex gap-4 pl-2">
                  <img src={iconSFacebook} alt="iconSFacebook" />
                  <img src={iconSLinkin} alt="iconSFacebook" />
                  <img src={iconsTwitter} alt="iconSFacebook" />
                </div>
              </div>
          </div>
        </div>
        
      </div>
      <div class="flex flex-col items-center justify-center   border-t-2 border-t-[#9F9F9F]">
     
      <div class="w-full max-w-[649px] h-auto mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-between pt-10 pb-10 gap-4 text-center">
  <Link to="/Home" class="text-[24px] font-poppins font-bold w-[269px]">Description</Link>
  <Link to="/Home" class="text-[24px] font-poppins w-[269px]">Additional Information</Link>
  <Link to="/Home" class="text-[24px] font-poppins w-[269px]">Reviews [5]</Link>
</div>

            
            <div class="w-full max-w-[1026px] h-auto flex flex-col text-[16px] font-poppins text-justify overflow-hidden sm:flex-wrap lg:flex-nowrap">
  <p class="mb-8 ">
    Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
  </p>
  <p class="mb-8 ">
    Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
  </p>
</div>

<div class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-3 w-full max-w-full overflow-hidden">
  <div class="w-full max-w-[605px] mx-auto">
    <Image class="w-full h-[348px] object-cover"
      loading="lazy"
      cloudName={images.cloudName}
      publicId={images.image6.url}
    />
  </div>
  <div class="w-full max-w-[605px] mx-auto">
    <Image class="w-full h-[348px] object-cover"
      loading="lazy"
      cloudName={images.cloudName}
      publicId={images.image6.url}
    />
  </div>
</div>
 </div>


 <div class="flex flex-col items-center justify-center overflow-hidden mt-24 mb-24">

    <h3 class="mb-10 font-poppins font-bold size-[46px] w-full flex items-center justify-center">Related Products</h3>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 overflow-hidden gap-6 w-full ml-10">
    <div class="w-full max-w-[285px] min-h-[446px] ">
      <div>
      {images.image7.discount}
      </div>
     <Image className="produtImg"
        loading="lazy"
        cloudName={images.cloudName}
        publicId={images.image7.url}
      />
       <div className="productsName">
      {images.image7.productName}
      </div>
      <div className="productsDescription">
      {images.image7.discription}
      </div>
      <div className="spans">
      <div className="mainPrice">
      {images.image7.price}
      </div>
      <div className="cancelled">
      {images.image7.oldPrice}
      </div>
      </div>
     </div>

     {/* 2 */}
     <div class="w-full max-w-[285px] min-h-[446px]">
      <div>
      {images.image8.discount}
      </div>
     <Image className="produtImg"
        loading="lazy"
        cloudName={images.cloudName}
        publicId={images.image8.url}
      />
       <div className="productsName">
      {images.image8.productName}
      </div>
      <div className="productsDescription">
      {images.image8.discription}
      </div>
      <div className="spans">
      <div className="mainPrice">
      {images.image8.price}
      </div>
      <div className="cancelled">
      {images.image8.oldPrice}
      </div>
      </div>
     </div>

{/* 3 */}
     <div class=" w-full max-w-[285px] min-h-[446px]">
      <div>
      {images.image9.discount}
      </div>
     <Image className="produtImg"
        loading="lazy"
        cloudName={images.cloudName}
        publicId={images.image9.url}
      />
       <div className="productsName">
      {images.image9.productName}
      </div>
      <div className="productsDescription">
      {images.image9.discription}
      </div>
      <div className="spans">
      <div className="mainPrice">
      {images.image9.price}
      </div>
      <div className="cancelled">
      {images.image9.oldPrice}
      </div>
      </div>
     </div>

{/* 4 */}
<div class="w-full max-w-[290px] min-h-[100px]">
      <div>
      {images.image10.discount}
      </div>
     <Image className="produtImg"
        loading="lazy"
        cloudName={images.cloudName}
        publicId={images.image10.url}
      />
       <div className="productsName">
      {images.image10.productName}
      </div>
      <div className="productsDescription">
      {images.image10.discription}
      </div>
      <div className="spans">
      <div className="mainPrice">
      {images.image10.price}
      </div>
      <div className="cancelled">
      {images.image10.oldPrice}
      </div>
      </div>
     </div>
</div>

<button class="border dorder-2 border-[#B88E2F] w-[245px] h-[48px] text-[#B88E2F]">Show More</button>
</div>
     
    </>
  );
};

export default About;
