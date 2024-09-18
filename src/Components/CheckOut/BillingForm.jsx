import React from 'react';
import { useFormik } from 'formik';

const BillingForm = () => {
  
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
        <div className='flex gap-[20px]'>

        <fieldset>
        <label htmlFor="firstName" className="block mb-[15px]">First Name</label>
<input
  id="firstName"
  name="firstName"
  type="text"
  onChange={formik.handleChange}
  value={formik.values.firstName}
  className='border border-[#9F9F9F] rounded-[5px] outline-none'/>

        </fieldset>


      <fieldset>
      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />
      </fieldset>

        </div>
    
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default BillingForm;