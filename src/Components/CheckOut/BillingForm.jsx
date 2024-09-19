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
  town: Yup.string().required("Town  is required"),
  province: Yup.string().required("province  is required"),
  zipCode: Yup.string().required("Zip Code  is required"),
  phone: Yup.string().required("Phone  is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  addInformation: Yup.string(),
  // message: Yup.string().required("Message is required"),
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
    onSubmit: (values) => {
      toast.success("Details submitted successfully!");
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
   
      <div className="max-w-[608px]">
   
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
          <div className="flex gap-[20px]">
            <div>
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
                className="w-[211px] min-h-[65px] px-3 py-2 border border-gray-300 rounded-[10px]"
              />
              {formik.touched.yourName && formik.errors.firstName ? (
                <div className="text-red-500">{formik.errors.firstName}</div>
              ) : null}
            </div>
            <div>
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
                className="w-[211px] min-h-[65px] px-3 py-2 border border-gray-300 rounded-[10px]"
              />
              {formik.touched.yourName && formik.errors.lastName ? (
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
              className="w-[444px] min-h-[65px] px-3 py-2 border border-gray-300 rounded-[10px]"
            />
            {formik.touched.company && formik.errors.company ? (
              <div className="text-red-500">{formik.errors.company}</div>
            ) : null}
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
              className="w-[444px] px-3 py-2 border border-gray-300 rounded-[10px]"
            >
              <option value="Sri Lanka">Sri Lanka</option>
              <option value="Nigeria">Nigeria</option>
              <option value="Albania">Albania</option>
              <option value="American">American</option>
              <option value="Austria">Austria</option>
              <option value="Bahamas">Bahamas</option>
              <option value="Belize">Belize</option>
              <option value="Cameroun">Cameroun</option>
              <option value="China">China</option>
              <option value="Colombia">Colombia</option>
              <option value="Egypt">Egypt</option>
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
              className="w-[444px] min-h-[65px] px-3 py-2 border border-gray-300 rounded-[10px]"
            />
            {formik.touched.company && formik.errors.streetAddress ? (
              <div className="text-red-500">{formik.errors.streetAddress}</div>
            ) : null}
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
              className="w-[444px] min-h-[65px] px-3 py-2 border border-gray-300 rounded-[10px]"
            />
            {formik.touched.company && formik.errors.town ? (
              <div className="text-red-500">{formik.errors.town}</div>
            ) : null}
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
              className="w-[444px] px-3 py-2 border border-gray-300 rounded-[10px]"
            >
              <option value="Western Province">Western Province</option>
              <option value="Southern Provinces">Southern Provinces</option>
              <option value="Northern Provinces">Northern Provinces</option>
              <option value="Eastern Provinces">Eastern Provinces </option>
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
              className="w-[444px] min-h-[65px] px-3 py-2 border border-gray-300 rounded-[10px]"
            />
            {formik.touched.company && formik.errors.zipCode ? (
              <div className="text-red-500">{formik.errors.zipCode}</div>
            ) : null}
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
              className="w-[444px] min-h-[65px] px-3 py-2 border border-gray-300 rounded-[10px]"
            />
            {formik.touched.company && formik.errors.phone ? (
              <div className="text-red-500">{formik.errors.phone}</div>
            ) : null}
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
              className="w-[444px] min-h-[65px] px-3 py-2 border border-gray-300 rounded-[10px]"
            />
            {formik.touched.company && formik.errors.email ? (
              <div className="text-red-500">{formik.errors.email}</div>
            ) : null}
          </div>

          <div>
            {/* <label htmlFor="addInformation" className="block mb-1">
            Message
          </label> */}
            <textarea
              id="addInformation"
              name="addInformation"
              placeholder="Additional information"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.addInformation}
              className="w-[528.75px] min-h-[150px] px-3 py-2 border border-gray-300 rounded-[10px] resize-none"
              style={{ textAlign: "left", verticalAlign: "top" }} // Ensures text starts from top left
            />
            {formik.touched.message && formik.errors.addInformation ? (
              <div className="text-red-500">{formik.errors.addInformation}</div>
            ) : null}
          </div>

          <button
            type="submit"
            className="px-4 py-2 bg-[#B88E2F] text-white rounded-md w-[237px]"
          >
            Submit
          </button>
        </form>

        <ToastContainer />
      </div>
    </>
  );
};

export default BillingForm;
