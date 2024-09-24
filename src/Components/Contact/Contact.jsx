import React from 'react'
import SectionBckground from '../ReuseSection/SectionBckground'
import Section2 from '../../Components/Contact/Section2'
import Section3 from '../../Components/Contact/Section3'
import Intro from '../../Components/Contact/Intro'
import LastSection from '../../Components/ReuseSection/LastStion'
import logoImageCart from "../../assets/logoImageCart.png";
import arrowrightCart from "../../assets/arrowrightCart.png";
import { Image } from "cloudinary-react";
import { images } from "../../../data/cartdata.json";


const Contact = () => {
  return (
 <>
 <Intro />
 <Section2 />
 <Section3 /> 
 <LastSection />
 </>
  )
}

export default Contact