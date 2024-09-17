import React from "react";
import logoImageCart from "../../assets/logoImageCart.png";
import arrowrightCart from "../../assets/arrowrightCart.png";
import deleteIconCart from "../../assets/deleteIconCart.png";
import iconHigh from '../../assets/iconHigh.png';
import iconWarranty from '../../assets/iconWarranty.png';
import iconFree from '../../assets/iconFree.png';
import iconSupport from '../../assets/iconSupport.png';
import { Image } from "cloudinary-react";
import { images } from "../../../data/cartdata.json";

const Cart = () => {
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
          <h2 className="font-Poppins text-[48px] font-semibold mb-2">Cart</h2>
          <div className="flex items-center space-x-2  p-2 rounded-lg">
            <p className="font-Poppins text-[16px] font-bold">Home</p>
            <img src={arrowrightCart} alt="Arrow Right" className="w-4 h-4" />
            <p>Cart</p>
          </div>
        </div>
      </div>

      <div className=" w-[80%] flex flex-col place-items-center m-auto" >
      <div className="mt-[30px] ml-[15px] mr-[15px] flex flex-col lg:flex-row lg:space-x-4  overflow-hidden m-auto gap-[15px] min-h-[525px]">
  
  {/* <!-- Column A (Product Table) --> */}
  <div className="colA w-full lg:w-[717px] flex flex-col overflow-x-auto lg:overflow-visible">
    <table className="min-w-full table-fixed">
      <thead>
        <tr className="bg-[#F9F1E7]">
          <th className="w-1/3 px-6 py-3 text-left text-sm font-medium text-gray-900">Product</th>
          <th className="w-1/6 px-6 py-3 text-left text-sm font-medium text-gray-900">Price</th>
          <th className="w-1/6 px-6 py-3 text-left text-sm font-medium text-gray-900">Quantity</th>
          <th className="w-1/6 px-6 py-3 text-left text-sm font-medium text-gray-900">Subtotal</th>
          <th className="w-1/12 px-6 py-3"></th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b border-gray-300">
          <td className="px-6 py-4 flex items-center space-x-4">
            <Image
              loading="lazy"
              cloudName={images.cloudName}
              publicId={images.image2.url}
              className="w-16 h-16 object-cover"
            />
            <p>Asgaard sofa</p>
          </td>
          <td className="px-6 py-4">Rs. 250,000.00</td>
          <td className="px-6 py-4">1</td>
          <td className="px-6 py-4">Rs. 250,000.00</td>
          <td className="px-6 py-4">
            <img src={deleteIconCart} alt="Delete Icon" className="w-5 h-5 cursor-pointer" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  {/* <!-- Column B (Cart Totals) --> */}
  <div className="colB w-full lg:w-[393px] mt-6 lg:mt-0 flex flex-col overflow-hidden bg-[#F9F1E7] min-h-[90px] pt-[25px]">
    <div className=" flex  mx-[145px] mb-[45px]">
      <p className="font-bold text-[20px] w-[179px]">Cart Totals</p>
      {/* <!-- Additional content for Cart Totals can go here --> */}
    </div>
    <div className="flex gap-[70px] pl-[25px]  mx-[40px] mb-[15px]">
      <p className="font-bold">Subtotal</p>
      <p className="[#9F9F9F]">Rs. 250,000.00</p>
    </div>
    <div className="flex gap-[70px] pl-[25px] mx-[40px] mb-[115px]">
      <p className="font-bold">Total</p>
      <p className="text-[#B88E2F]">Rs. 250,000.00</p>
    </div>
    <button className="w-[135px] mx-[120px] outline outline-black-300 p-2 rounded-[20px] font-[Poppins] text-[12px] font-bold">Check Out</button>
  </div>
</div>
      </div>

{/* last session */}
<div className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap justify-between gap-10 px-10 py-20 bg-red-100 mt-[45px]">
        <div className="flex gap-4">
          <img className="max-w-[60px] h-[60px]" src={iconHigh} alt="" />
          <div className="mt-1 max-w-[267px] h-[70px]">
            <p>High Quality</p>
            <p>crafted from top materials</p>
          </div>
        </div>
        <div className="flex gap-4">
          <img className="max-w-[60px] h-[60px]" src={iconWarranty} alt="" />
          <div className="mt-1 max-w-[267px] h-[70px]">
            <p>Warranty Protection</p>
            <p>Over 2 years</p>
          </div>
        </div>
        <div className="flex gap-4">
          <img className="max-w-[60px] h-[60px]" src={iconFree} alt="" />
          <div className="mt-1 max-w-[267px] h-[70px]">
            <p>Free Shipping</p>
            <p>Order over 150 $</p>
          </div>
        </div>
        <div className="flex gap-4">
          <img className="max-w-[60px] h-[60px]" src={iconSupport} alt="" />
          <div className="mt-1 max-w-[267px] h-[70px]">
            <p>24 / 7 Support</p>
            <p>Dedicated support</p>
          </div>
        </div>
</div>
    </>
  );
};

export default Cart;
