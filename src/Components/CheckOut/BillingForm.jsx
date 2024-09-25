import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Validation schema using Yup
const validationSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  company: Yup.string(),
  countryRegion: Yup.string().required("Country Name is required"),
  streetAddress: Yup.string().required("Street/ Address is required"),
  town: Yup.string().required("Town is required"),
  province: Yup.string().required("Province is required"),
  zipCode: Yup.string().required("Zip Code is required"),
  phone: Yup.string().required("Phone is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  addInformation: Yup.string(),
});

const BillingForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      company: "",
      countryRegion: "",
      streetAddress: "",
      town: "",
      province: "",
      zipCode: "",
      phone: "",
      email: "",
      addInformation: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      toast.success("Details submitted successfully!");
      console.log(JSON.stringify(values, null, 2));
      resetForm();
    },
  });

  return (
    <>
      <div className="w-full max-w-[608px] mx-auto px-4 sm:px-6 lg:px-0">
        <form onSubmit={formik.handleSubmit} className="w-full flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row gap-[20px]">
            <div className="flex-1">
              <label htmlFor="firstName" className="block mb-1">
                First Name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
                className="w-full min-h-[55px] px-3 py-2 border border-gray-300 rounded-lg"
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <div className="text-red-500">{formik.errors.firstName}</div>
              ) : null}
            </div>

            <div className="flex-1">
              <label htmlFor="lastName" className="block mb-1">
                Last Name
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
                className="w-full min-h-[55px] px-3 py-2 border border-gray-300 rounded-lg"
              />
              {formik.touched.lastName && formik.errors.lastName ? (
                <div className="text-red-500">{formik.errors.lastName}</div>
              ) : null}
            </div>
          </div>

          <div>
            <label htmlFor="company" className="block mb-1">
              Company Name (Optional)
            </label>
            <input
              id="company"
              name="company"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.company}
              className="w-full min-h-[55px] px-3 py-2 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label htmlFor="countryRegion" className="block mb-1">
              Country / Region
            </label>
            <select
              id="countryRegion"
              name="countryRegion"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.countryRegion}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            >
              <option value="Sri Lanka">Sri Lanka</option>
              <option value="Nigeria">Nigeria</option>
              <option value="Albania">Albania</option>
              {/* Add more countries here */}
            </select>
          </div>

          <div>
            <label htmlFor="streetAddress" className="block mb-1">
              Street address
            </label>
            <input
              id="streetAddress"
              name="streetAddress"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.streetAddress}
              className="w-full min-h-[55px] px-3 py-2 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label htmlFor="town" className="block mb-1">
              Town / City
            </label>
            <input
              id="town"
              name="town"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.town}
              className="w-full min-h-[55px] px-3 py-2 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label htmlFor="province" className="block mb-1">
              Province
            </label>
            <select
              id="province"
              name="province"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.province}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            >
              <option value="Western Province">Western Province</option>
              <option value="Southern Province">Southern Province</option>
              {/* Add more provinces here */}
            </select>
          </div>

          <div>
            <label htmlFor="zipCode" className="block mb-1">
              ZIP code
            </label>
            <input
              id="zipCode"
              name="zipCode"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.zipCode}
              className="w-full min-h-[55px] px-3 py-2 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block mb-1">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
              className="w-full min-h-[55px] px-3 py-2 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="w-full min-h-[55px] px-3 py-2 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <textarea
              id="addInformation"
              name="addInformation"
              placeholder="Additional information"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.addInformation}
              className="w-full min-h-[55px] px-3 py-2 border border-gray-300 rounded-lg resize-none"
              style={{ textAlign: "left", verticalAlign: "top" }}
            />
          </div>

          <button
            type="submit"
            className="px-4 py-2 bg-[#B88E2F] text-white rounded-md w-full sm:w-auto"
          >
            Submit
          </button>
        </form>

        {/* <ToastContainer /> */}
      </div>
    </>
  );
};

export default BillingForm;
