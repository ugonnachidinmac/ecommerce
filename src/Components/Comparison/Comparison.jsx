import React from "react";
import { Image } from "cloudinary-react";
import { images } from "../../../data/cartdata.json";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
      <div
        className="relative w-full h-[316px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${images.image1.url})`,
        }}
      >
        <div className="absolute inset-0 flex flex-col place-content-center items-center justify-center text-center p-6">
          <img src={logoImageCart} alt="Cart Logo" className="w-[77px]" />
          <h2 className="font-Poppins text-[48px] font-semibold mb-2">
            Product Comparison
          </h2>
          <div className="flex items-center space-x-2  p-2 rounded-lg">
            <p className="font-Poppins text-[16px] font-bold">Home</p>
            <img src={arrowrightCart} alt="Arrow Right" className="w-4 h-4" />
            <p>Comparison</p>
          </div>
        </div>
      </div>

      <div className="products w-[90%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 m-auto mt-[20px]">
        <div>
          <p className="text-[24px] font-[Poppins] font-bold">
            Go to Product <br /> page for more <br />
            Products
          </p>
          <button className="text-[20px] text-[#727272] font-[Poppins] mt-[15px] border-b border-[#727272]">
            View More
          </button>
        </div>

        <div>
          <Image
            loading="lazy"
            cloudName={images.cloudName}
            publicId={images.image3.url}
          />
          <p className="text-[24px] font-[Poppins] font-bold">Asgaard Sofa</p>
          <p className="text-[18px] font-[Poppins] font-bold">Rs. 250,000.00</p>
          <div className="flex items-center gap-[5px]">
            <p>4.7</p>
            <img className="w-[18px] h-[18px]" src={iconSStar} alt="" />
            <img className="w-[18px] h-[18px]" src={iconSStar} alt="" />
            <img className="w-[18px] h-[18px]" src={iconSStar} alt="" />
            <img className="w-[18px] h-[18px]" src={iconSStar} alt="" />
            <img className="w-[18px] h-[18px]" src={iconShStar} alt="" />
            <button className="border-l-2 pl-[10px]">204 Review</button>
          </div>
        </div>

        <div>
          <Image
            loading="lazy"
            cloudName={images.cloudName}
            publicId={images.image3.url}
          />
          <p className="text-[24px] font-[Poppins] font-bold">Outdoor Sofa Set</p>
          <p className="text-[18px] font-[Poppins] font-bold">Rs. 224,000.00</p>
          <div className="flex items-center gap-[5px]">
            <p>4.2</p>
            <img className="w-[18px] h-[18px]" src={iconSStar} alt="" />
            <img className="w-[18px] h-[18px]" src={iconSStar} alt="" />
            <img className="w-[18px] h-[18px]" src={iconSStar} alt="" />
            <img className="w-[18px] h-[18px]" src={iconSStar} alt="" />
            <img className="w-[18px] h-[18px]" src={iconShStar} alt="" />
            <button className="border-l-2 pl-[10px]">145 Review</button>
          </div>
        </div>

        <div>
          <p className="text-[24px] font-[Poppins] font-bold">Add A Product</p>
          <form onSubmit={formik.handleSubmit}>
            <div>
              
              <select
                id="product"
                name="product"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.product}
                className="w-[150px] px-3 py-2  bg-[#B88E2F] text-white rounded-[10px] text-[12px]"
              >
                <option value="">Choose a Product</option>
                <option value="Asgaard Sofa">Asgaard Sofa</option>
                <option value="Outdoor Sofa Set">Outdoor Sofa Set</option>
              </select>
              {formik.touched.product && formik.errors.product ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.product}
                </div>
              ) : null}
            </div>
            <button
              type="submit"
              className="text-[14px] font-[Poppins] text-black border border-gray-300 px-4 py-2 rounded mt-5"
            >
             Submit
            </button>
          </form>
        </div>
      </div>

      {/* last section */}
      <LastStion />
      <ToastContainer />
    </>
  );
};

export default Comparison;
