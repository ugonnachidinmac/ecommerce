import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Validation schema using Yup
const validationSchema = Yup.object({
  yourName: Yup.string().required('Name is required'),
  emailAddress: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  subject: Yup.string(),
  message: Yup.string().required('Message is required'),
});

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      yourName: '',
      emailAddress: '',
      subject: '',
      message: '',
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      toast.success("Form submitted successfully!");
      resetForm(); // Reset the form after submission
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4 overflow-hidden">
        <div>
          <label htmlFor="yourName" className="block mb-1">Your Name</label>
          <input
            id="yourName"
            name="yourName"
            type="text"
            placeholder="Abc"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.yourName}
            className="w-full sm:w-[90%] lg:w-[528.75px] px-3 py-2 border border-gray-300 rounded-[10px]"
          />
          {formik.touched.yourName && formik.errors.yourName ? (
            <div className="text-red-500">{formik.errors.yourName}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="emailAddress" className="block mb-1">Email Address</label>
          <input
            id="emailAddress"
            name="emailAddress"
            type="text"
            placeholder="Abc@def.com"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.emailAddress}
            className="w-full sm:w-[90%] lg:w-[528.75px] px-3 py-2 border border-gray-300 rounded-[10px]"
          />
          {formik.touched.emailAddress && formik.errors.emailAddress ? (
            <div className="text-red-500">{formik.errors.emailAddress}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="subject" className="block mb-1">Subject</label>
          <input
            id="subject"
            name="subject"
            type="text"
            placeholder="This is optional"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.subject}
            className="w-full sm:w-[90%] lg:w-[528.75px] px-3 py-2 border border-gray-300 rounded-[10px]"
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-1">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            className="w-full sm:w-[90%] lg:w-[528.75px] min-h-[150px] px-3 py-2 border border-gray-300 rounded-[10px] resize-none"
            style={{ textAlign: 'left', verticalAlign: 'top' }} // Ensures text starts from top left
          />
          {formik.touched.message && formik.errors.message ? (
            <div className="text-red-500">{formik.errors.message}</div>
          ) : null}
        </div>

        <button type="submit" className="px-4 py-2 bg-[#B88E2F] text-white rounded-md w-full sm:w-[50%] lg:w-[237px]">
          Submit
        </button>
      </form>

      <ToastContainer />
    </div>
  );
};

export default SignupForm;
