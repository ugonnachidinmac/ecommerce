import React from 'react'
import { Image } from "cloudinary-react";
import { images } from "../../../data/cartdata.json";
import logoImageCart from "../../assets/logoImageCart.png";
import arrowrightCart from "../../assets/arrowrightCart.png";
import BillingForm from '../../Components/CheckOut/BillingForm'
import Intro from '../../Components/CheckOut/Intro'
import CheckSec2 from '../../Components/CheckOut/CheckSec2'
import OrderForm from '../../Components/CheckOut/OrderForm'
import LastStion from '../../Components/ReuseSection/LastStion'

const CheckOut = () => {
  return (
 
    <>
      <Intro />
      <CheckSec2 />
      {/* <LastStion /> */}
    </>
  )
}

export default CheckOut