import React, { useState } from "react";
import { Image } from "cloudinary-react";
import { images } from "../../../data/shopdata.json";
import iconHigh from '../../assets/iconHigh.png';
import iconWarranty from '../../assets/iconWarranty.png';
import iconFree from '../../assets/iconFree.png';
import iconSupport from '../../assets/iconSupport.png';
import { useNavigate } from 'react-router-dom';


const Shop = () => {
  let [shop, setShop] = useState(null);
  // let redir = useNavigate();

  // useEffect(() => {
  //   axios.get("");
  // }, []);
  return (
    <>
      
      <div class="w-full min-h-[2051px] mx-auto grid grid-cols-1-mx-auto sm:grid-cols-2 lg:grid-cols-4 gap-2 overflow-hidden pl-10 mt-10 ">
        {/* onClick={() => redir{'/shop/' +each.images}} */}
      <div  class="w-full max-w-[290px] min-h-[100px]">
      <div>
      {images.image1.discount}
      </div>
     <Image className="produtImg"
        loading="lazy"
        cloudName={images.cloudName}
        publicId={images.image1.url}
      />
       <div className="productsName">
      {images.image1.productName}
      </div>
      <div className="productsDescription">
      {images.image1.discription}
      </div>
      <div className="spans">
      <div className="mainPrice">
      {images.image1.price}
      </div>
      <div className="cancelled">
      {images.image1.oldPrice}
      </div>
      </div>
     </div>

     
     <div class="w-full max-w-[285px] min-h-[446px]">

      <div>
      {images.image2.discount}
      </div>
     <Image className="produtImg"
        loading="lazy"
        cloudName={images.cloudName}
        publicId={images.image2.url}
      />
       <div className="productsName">
      {images.image2.productName}
      </div>
      <div className="productsDescription">
      {images.image2.discription}
      </div>
      <div className="spans">
      <div className="mainPrice">
      {images.image2.price}
      </div>
      <div className="cancelled">
      {images.image2.oldPrice}
      </div>
      </div>
     </div>

     <div class=" w-full max-w-[285px] min-h-[446px]">

      <div>
      {images.image3.discount}
      </div>
     <Image className="produtImg"
        loading="lazy"
        cloudName={images.cloudName}
        publicId={images.image3.url}
      />
       <div className="productsName">
      {images.image3.productName}
      </div>
      <div className="productsDescription">
      {images.image3.discription}
      </div>
      <div className="spans">
      <div className="mainPrice">
      {images.image3.price}
      </div>
      <div className="cancelled">
      {images.image3.oldPrice}
      </div>
      </div>
     </div>

     <div class=" w-full max-w-[285px] min-h-[446px]">

      <div>
      {images.image4.discount}
      </div>
     <Image className="produtImg"
        loading="lazy"
        cloudName={images.cloudName}
        publicId={images.image4.url}
      />
       <div className="productsName">
      {images.image4.productName}
      </div>
      <div className="productsDescription">
      {images.image4.discription}
      </div>
      <div className="spans">
      <div className="mainPrice">
      {images.image4.price}
      </div>
      <div className="cancelled">
      {images.image4.oldPrice}
      </div>
      </div>
     </div>

{/* second row */}

<div class=" w-full max-w-[285px] min-h-[446px]">

      <div>
      {images.image1.discount}
      </div>
     <Image className="produtImg"
        loading="lazy"
        cloudName={images.cloudName}
        publicId={images.image1.url}
      />
       <div className="productsName">
      {images.image1.productName}
      </div>
      <div className="productsDescription">
      {images.image1.discription}
      </div>
      <div>
      {images.image1.price}
      </div>
      <div>
      {images.image1.oldPrice}
      </div>
     </div>

     
     <div class=" w-full max-w-[285px] min-h-[446px]">

      <div>
      {images.image2.discount}
      </div>
     <Image className="produtImg"
        loading="lazy"
        cloudName={images.cloudName}
        publicId={images.image2.url}
      />
       <div className="productsName">
      {images.image2.productName}
      </div>
      <div className="productsDescription">
      {images.image2.discription}
      </div>
      <div className="spans">
      <div className="mainPrice">
      {images.image2.price}
      </div>
      <div className="cancelled">
      {images.image2.oldPrice}
      </div>
      </div>
     </div>

    <div class=" w-full max-w-[285px] min-h-[446px]">

      <div>
      {images.image3.discount}
      </div>
     <Image className="produtImg"
        loading="lazy"
        cloudName={images.cloudName}
        publicId={images.image3.url}
      />
       <div className="productsName">
      {images.image3.productName}
      </div>
      <div className="productsDescription">
      {images.image3.discription}
      </div>
      <div className="spans">
      <div className="mainPrice">
      {images.image3.price}
      </div>
      <div className="cancelled">
      {images.image3.oldPrice}
      </div>
      </div>
     </div>

    <div class=" w-full max-w-[285px] min-h-[446px]">

      <div>
      {images.image4.discount}
      </div>
     <Image className="produtImg"
        loading="lazy"
        cloudName={images.cloudName}
        publicId={images.image4.url}
      />
       <div className="productsName">
      {images.image4.productName}
      </div>
      <div className="productsDescription">
      {images.image4.discription}
      </div>
      <div className="spans">
      <div className="mainPrice">
      {images.image4.price}
      </div>
      <div className="cancelled">
      {images.image4.oldPrice}
      </div>
      </div>
     </div>
{/* third row */}
<div class=" w-full max-w-[285px] min-h-[446px]">

      <div>
      {images.image1.discount}
      </div>
     <Image className="produtImg"
        loading="lazy"
        cloudName={images.cloudName}
        publicId={images.image1.url}
      />
       <div className="productsName">
      {images.image1.productName}
      </div>
      <div className="productsDescription">
      {images.image1.discription}
      </div>
      <div>
      {images.image1.price}
      </div>
      <div>
      {images.image1.oldPrice}
      </div>
     </div>

     
    <div class=" w-full max-w-[285px] min-h-[446px]">

      <div>
      {images.image2.discount}
      </div>
     <Image className="produtImg"
        loading="lazy"
        cloudName={images.cloudName}
        publicId={images.image2.url}
      />
       <div className="productsName">
      {images.image2.productName}
      </div>
      <div className="productsDescription">
      {images.image2.discription}
      </div>
      <div className="spans">
      <div className="mainPrice">
      {images.image2.price}
      </div>
      <div className="cancelled">
      {images.image2.oldPrice}
      </div>
      </div>
     </div>

    <div class=" w-full max-w-[285px] min-h-[446px]">

      <div>
      {images.image3.discount}
      </div>
     <Image className="produtImg"
        loading="lazy"
        cloudName={images.cloudName}
        publicId={images.image3.url}
      />
       <div className="productsName">
      {images.image3.productName}
      </div>
      <div className="productsDescription">
      {images.image3.discription}
      </div>
      <div className="spans">
      <div className="mainPrice">
      {images.image3.price}
      </div>
      <div className="cancelled">
      {images.image3.oldPrice}
      </div>
      </div>
     </div>

    <div class=" w-full max-w-[285px] min-h-[446px]">

      <div>
      {images.image4.discount}
      </div>
     <Image className="produtImg"
        loading="lazy"
        cloudName={images.cloudName}
        publicId={images.image4.url}
      />
       <div className="productsName">
      {images.image4.productName}
      </div>
      <div className="productsDescription">
      {images.image4.discription}
      </div>
      <div className="spans">
      <div className="mainPrice">
      {images.image4.price}
      </div>
      <div className="cancelled">
      {images.image4.oldPrice}
      </div>
      </div>
     </div>


{/* fourth row */}
<div class=" w-full max-w-[285px] min-h-[446px]">

      <div>
      {images.image1.discount}
      </div>
     <Image className="produtImg"
        loading="lazy"
        cloudName={images.cloudName}
        publicId={images.image1.url}
      />
       <div className="productsName">
      {images.image1.productName}
      </div>
      <div className="productsDescription">
      {images.image1.discription}
      </div>
      <div>
      {images.image1.price}
      </div>
      <div>
      {images.image1.oldPrice}
      </div>
     </div>

     
    <div class=" w-full max-w-[285px] min-h-[446px]">

      <div>
      {images.image2.discount}
      </div>
     <Image className="produtImg"
        loading="lazy"
        cloudName={images.cloudName}
        publicId={images.image2.url}
      />
       <div className="productsName">
      {images.image2.productName}
      </div>
      <div className="productsDescription">
      {images.image2.discription}
      </div>
      <div className="spans">
      <div className="mainPrice">
      {images.image2.price}
      </div>
      <div className="cancelled">
      {images.image2.oldPrice}
      </div>
      </div>
     </div>

    <div class=" w-full max-w-[285px] min-h-[446px]">

      <div>
      {images.image3.discount}
      </div>
     <Image className="produtImg"
        loading="lazy"
        cloudName={images.cloudName}
        publicId={images.image3.url}
      />
       <div className="productsName">
      {images.image3.productName}
      </div>
      <div className="productsDescription">
      {images.image3.discription}
      </div>
      <div className="spans">
      <div className="mainPrice">
      {images.image3.price}
      </div>
      <div className="cancelled">
      {images.image3.oldPrice}
      </div>
      </div>
     </div>

    <div class=" w-full max-w-[285px] min-h-[446px]">

      <div>
      {images.image4.discount}
      </div>
     <Image className="produtImg"
        loading="lazy"
        cloudName={images.cloudName}
        publicId={images.image4.url}
      />
       <div className="productsName">
      {images.image4.productName}
      </div>
      <div className="productsDescription">
      {images.image4.discription}
      </div>
      <div className="spans">
      <div className="mainPrice">
      {images.image4.price}
      </div>
      <div className="cancelled">
      {images.image4.oldPrice}
      </div>
      </div>
     </div>
     </div>
      {/* pagination */}
      <div class="w-full flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap items-center justify-center gap-10 px-5 py-5 my-auto mb-[250px]" >
      <span class='w-[40px] h-[40px] bg-red-500 rounded-xl flex items-center justify-center'>1</span>
      <span class='w-[40px] h-[40px] bg-red-100 rounded-xl flex items-center justify-center'>2</span>
      <span class='w-[40px] h-[40px] bg-red-100 rounded-xl flex items-center justify-center'>3</span>
      <span class='w-[60px] h-[40px] bg-red-100 rounded-xl flex items-center justify-center'>Next</span>
     </div>

     {/* grid grid-cols-1-mx-auto sm:grid-cols-2 lg:grid-cols-4 */}

     {/* SectionTwo */}
     <div class="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap justify-between gap-10 px-10 py-20 bg-red-100">
      <div class="flex gap-4">
        <img class="max-w-[60px] h-[60px]" src={iconHigh} alt="" />
        <div class="mt-1 max-w-[267px] h-[70px]">
          <p>High Quality</p>
          <p>crafted from top materials</p>
        </div>
      </div>
      <div class="flex gap-4">
        <img class="max-w-[60px] h-[60px]" src={iconWarranty} alt="" />
        <div class="mt-1 max-w-[267px] h-[70px]">
          <p>Warranty Protection</p>
          <p>Over 2 years</p>
        </div>
      </div>
      <div class="flex gap-4">
        <img class="max-w-[60px] h-[60px]" src={iconFree} alt="" />
        <div class="mt-1 max-w-[267px] h-[70px]">
          <p>Free Shipping</p>
          <p>Order over 150 $</p>
        </div>
      </div>
      <div class="flex gap-4">
        <img class="max-w-[60px] h-[60px]" src={iconSupport} alt="" />
        <div class="mt-1 max-w-[267px] h-[70px]">
          <p>24 / 7 Support</p>
          <p>Dedicated support</p>
        </div>
      </div>
     </div>
    </>
  );
};

export default Shop;
