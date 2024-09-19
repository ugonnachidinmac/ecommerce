import React from 'react';
import { Formik, Form,  Field } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignupSchema = Yup.object().shape({

  email: Yup.string().email('Invalid email').required('Required'),
});

export const Signup = () => (
  <div className='w-[450px]'>
   
    <h1 className='font-Poppins text-[16px] font-semibold text-[#9F9F9F] mb-10'>Newsletter</h1>
    <Formik
      initialValues={{
       
        email: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        toast.success("Subscribe successfully'");
        console.log(JSON.stringify(values, null, 2));

        // alert('Subscribe successfully');
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <fieldset className='flex gap-8'>
       <div>
       <Field className="px-3 border border-1 mt-1" placeholder="Enter Your Email Address" name="email" type="email" style={{ borderBottomColor: '#000000' }}/>
       {errors.email && touched.email ? <div className='text-red-500 text-[12px] mt-1'>{errors.email}</div> : null}
       </div>
      <button type="submit" className='px-3 border border-1' style={{ borderBottomColor: '#000000' }}>Subcribe</button>
          </fieldset>
        </Form>
      )}
    </Formik>
  </div>
);