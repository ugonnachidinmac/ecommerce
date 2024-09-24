import React from "react";
import { Image } from "cloudinary-react";
import { images } from "../../../data/cartdata.json";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Intro from '../../Components/Comparison/Intro'
import CompSec2 from '../../Components/Comparison/CompSec2'
import CompSec3 from '../../Components/Comparison/CompSec3'
import iconSStar from "../../assets/iconSStar.png";
import iconShStar from "../../assets/iconShStar.png";
import logoImageCart from "../../assets/logoImageCart.png";
import arrowrightCart from "../../assets/arrowrightCart.png";
import LastStion from '../../Components/ReuseSection/LastStion'
import iconHigh from "../../assets/iconHigh.png";
import iconWarranty from "../../assets/iconWarranty.png";
import iconFree from "../../assets/iconFree.png";
import iconSupport from "../../assets/iconSupport.png";

// Validation schema using Yup
const validationSchema = Yup.object({
  product: Yup.string().required("Please select a product"),
});

const Comparison = () => {
  const formik = useFormik({
    initialValues: {
      product: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      toast.success("Details submitted successfully!");
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
     <Intro />

    <CompSec2 />

    <CompSec3 />

      <LastStion />
      <ToastContainer />
    </>
  );
};

export default Comparison;
