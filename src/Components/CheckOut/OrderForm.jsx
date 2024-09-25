import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Validation schema using Yup
const validationSchema = Yup.object({
  paymentPolicy: Yup.string().required("Payment method is required"),
});

const Order = () => {
  const formik = useFormik({
    initialValues: {
      paymentPolicy: "",
    },
    validationSchema,
    onSubmit: (values) => {
      toast.success("Your Order is successfully sent!");
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <div className="px-4 md:px-8 lg:px-16">
        <div className="topForm">
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto">
              <thead>
                <tr>
                  <th className="font-bold font-[Poppins] text-[20px] md:text-[24px] pb-[15px] md:pb-[25px] text-left">
                    Product
                  </th>
                  <th className="font-bold font-[Poppins] text-[20px] md:text-[24px] text-right pb-[15px] md:pb-[25px]">
                    Subtotal
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-[14px] md:text-[16px] text-[#9F9F9F] font-[Poppins] pb-[20px] md:pb-[35px]">
                    Asgaard sofa
                    <span className="text-[12px] text-black font-[Poppins] ml-1">
                      X 1
                    </span>
                  </td>
                  <td className="text-[14px] md:text-[16px] font-[Poppins] pb-[20px] md:pb-[35px] text-right">
                    Rs. 250,000.00
                  </td>
                </tr>
                <tr>
                  <td className="text-[14px] md:text-[16px] font-[Poppins] pb-[20px] md:pb-[35px]">
                    Subtotal
                  </td>
                  <td className="text-[14px] md:text-[16px] font-[Poppins] pb-[20px] md:pb-[35px] text-right">
                    Rs. 250,000.00
                  </td>
                </tr>
                <tr>
                  <td className="text-[14px] md:text-[16px] font-[Poppins] pb-[20px] md:pb-[35px]">
                    Total
                  </td>
                  <td className="text-[18px] md:text-[24px] font-[Poppins] text-[#B88E2F] font-bold pb-[20px] md:pb-[35px] text-right">
                    Rs. 250,000.00
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
          <ul className="list-disc list-inside text-black mb-[10px] md:mb-[15px]">
            <li className="text-[14px] md:text-[16px] font-bold font-[Poppins]">
              Direct Bank Transfer
            </li>
          </ul>
          <p className="text-[14px] md:text-[16px] text-justify text-[#9F9F9F]">
            Make your payment directly into our bank account. Please use your
            Order ID as the payment reference. Your order will not be shipped
            until the funds have cleared in our account.
          </p>

          <div>
            <input
              id="paymentPolicy1"
              name="paymentPolicy"
              type="radio"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value="bank"
              className=""
            />
            <label htmlFor="paymentPolicy1" className="ml-[10px] md:ml-[15px]">
              Direct Bank Transfer
            </label>
          </div>

          <div>
            <input
              id="paymentPolicy2"
              name="paymentPolicy"
              type="radio"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value="cod"
              className=""
            />
            <label htmlFor="paymentPolicy2" className="ml-[10px] md:ml-[15px]">
              Cash On Delivery
            </label>
          </div>

          {formik.touched.paymentPolicy && formik.errors.paymentPolicy ? (
            <div className="text-red-500">{formik.errors.paymentPolicy}</div>
          ) : null}

          <p className="text-[14px] md:text-[16px] text-justify mt-[10px] md:mt-[15px]">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our{" "}
            <span className="font-bold">privacy policy.</span>
          </p>

          <div className="flex justify-center">
            <button
              type="submit"
              className="px-4 py-2 text-black text-[16px] md:text-[20px] rounded-md w-full md:w-[237px] border-black border-[1px] mt-[15px]"
            >
              Place order
            </button>
          </div>
        </form>

        <ToastContainer />
      </div>
    </>
  );
};

export default Order;
