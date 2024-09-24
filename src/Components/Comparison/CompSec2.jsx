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
import iconHigh from "../../assets/iconHigh.png";
import iconWarranty from "../../assets/iconWarranty.png";
import iconFree from "../../assets/iconFree.png";
import iconSupport from "../../assets/iconSupport.png";

// Validation schema using Yup
const validationSchema = Yup.object({
  product: Yup.string().required("Please select a product"),
});

const CompSec2 = () => {
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
    <div className="container max-w-screen-xl mx-auto px-4 mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="mb-8 md:mb-0">
          <p className="text-[24px] font-[Poppins] font-bold leading-tight">
            Go to Product <br /> page for more <br />
            Products
          </p>
          <button className="text-[20px] text-[#727272] font-[Poppins] mt-[15px] border-b border-[#727272]">
            View More
          </button>
        </div>

        {/* Product 1 */}
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <Image
            loading="lazy"
            cloudName={images.cloudName}
            publicId={images.image3.url}
            className="w-full h-auto rounded-lg"
          />
          <p className="text-[24px] font-[Poppins] font-bold mt-4">Asgaard Sofa</p>
          <p className="text-[18px] font-[Poppins] font-bold">Rs. 250,000.00</p>
          <div className="flex items-center gap-1">
            <p>4.7</p>
            {[...Array(4)].map((_, index) => (
              <img key={index} className="w-[18px] h-[18px]" src={iconSStar} alt="Star" />
            ))}
            <img className="w-[18px] h-[18px]" src={iconShStar} alt="Half Star" />
            <button className="border-l-2 pl-2 ml-2">204 Reviews</button>
          </div>
        </div>

        {/* Product 2 */}
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <Image
            loading="lazy"
            cloudName={images.cloudName}
            publicId={images.image3.url}
            className="w-full h-auto rounded-lg"
          />
          <p className="text-[24px] font-[Poppins] font-bold mt-4">Outdoor Sofa Set</p>
          <p className="text-[18px] font-[Poppins] font-bold">Rs. 224,000.00</p>
          <div className="flex items-center gap-1">
            <p>4.2</p>
            {[...Array(4)].map((_, index) => (
              <img key={index} className="w-[18px] h-[18px]" src={iconSStar} alt="Star" />
            ))}
            <img className="w-[18px] h-[18px]" src={iconShStar} alt="Half Star" />
            <button className="border-l-2 pl-2 ml-2">145 Reviews</button>
          </div>
        </div>

        {/* Product Form */}
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <p className="text-[24px] font-[Poppins] font-bold">Add A Product</p>
          <form onSubmit={formik.handleSubmit} className="mt-4">
            <select
              id="product"
              name="product"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.product}
              className="w-full px-3 py-2 bg-[#B88E2F] text-white rounded-lg text-[12px] mb-2"
            >
              <option value="">Choose a Product</option>
              <option value="Asgaard Sofa">Asgaard Sofa</option>
              <option value="Outdoor Sofa Set">Outdoor Sofa Set</option>
            </select>
            {formik.touched.product && formik.errors.product ? (
              <div className="text-red-500 text-sm">{formik.errors.product}</div>
            ) : null}
            <button
              type="submit"
              className="w-full text-[14px] font-[Poppins] text-black border border-gray-300 px-4 py-2 rounded mt-2"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default CompSec2;
