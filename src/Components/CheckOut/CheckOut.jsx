import React from 'react'
import { Image } from "cloudinary-react";
import { images } from "../../../data/cartdata.json";
import logoImageCart from "../../assets/logoImageCart.png";
import arrowrightCart from "../../assets/arrowrightCart.png";
import BillingForm from '../../Components/CheckOut/BillingForm'
import OrderForm from '../../Components/CheckOut/OrderForm'
import LastStion from '../../Components/ReuseSection/LastStion'

const CheckOut = () => {
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
          <h2 className="font-Poppins text-[48px] font-semibold mb-2">Checkout</h2>
          <div className="flex items-center space-x-2  p-2 rounded-lg">
            <p className="font-Poppins text-[16px] font-bold">Home</p>
            <img src={arrowrightCart} alt="Arrow Right" className="w-4 h-4" />
            <p>Checkout</p>
          </div>
        </div>
      </div>
      
      
      <section className='formSection w-full'>
      <h2 className='pl-[100px] text-[36px] font-[Poppins] font-bold pt-[50px]'>Billing details</h2>
      <div className='flex pl-[100px] pr-[98px] pt-[20px] gap-[65px]'>
      <BillingForm />
      <OrderForm />
      </div>
      </section>

      <LastStion />
    </>
  )
}

export default CheckOut