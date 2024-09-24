import React from 'react';
import addressIcon from '../../assets/addressIcon.png';
import phoneIcon from '../../assets/phoneIcon.png';
import timeIcon from '../../assets/timeIcon.png';
import SignupForm from '../../Components/Contact/SignupForm';

const Section3 = () => {
  return (
    <>
      <div className="parentContainer flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-0 w-[90%] mx-auto mt-[45px]">
        {/* Left Column */}
        <div className="leftCol">
          <div className='flex gap-4 sm:gap-8 w-full mb-8'>
            <div>
              <img className='w-[22px] h-[27px]' src={addressIcon} alt="Address Icon" />
            </div>
            <div>
              <p className='text-[20px] sm:text-[22px] font-bold'>Address</p>
              <p className='text-[16px] w-full'>
                236 5th SE Avenue, New York NY10000, United States
              </p>
            </div>
          </div>

          <div className='flex gap-4 sm:gap-8 w-full mb-8'>
            <div>
              <img className='w-[22px] h-[27px]' src={phoneIcon} alt="Phone Icon" />
            </div>
            <div>
              <p className='text-[20px] sm:text-[22px] font-bold'>Phone</p>
              <p className='text-[16px] w-full'>
                Mobile: +(84) 546-6789 <br />
                Hotline: +(84) 456-6789
              </p>
            </div>
          </div>

          <div className='flex gap-4 sm:gap-8 w-full mb-8'>
            <div>
              <img className='w-[22px] h-[27px]' src={timeIcon} alt="Time Icon" />
            </div>
            <div>
              <p className='text-[20px] sm:text-[22px] font-bold'>Working Time</p>
              <p className='text-[16px] w-full'>
                Monday-Friday: 9:00 - 22:00 <br />
                Saturday-Sunday: 9:00 - 21:00
              </p>
            </div>
          </div>
        </div>

        {/* Right Column (Signup Form) */}
        <div className="rightCol w-full lg:w-[45%]">
          <SignupForm />
        </div>
      </div>
    </>
  );
};

export default Section3;
