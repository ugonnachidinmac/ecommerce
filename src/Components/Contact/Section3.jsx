import React from 'react'
import addressIcon from '../../assets/addressIcon.png'
import phoneIcon from '../../assets/phoneIcon.png'
import timeIcon from '../../assets/timeIcon.png'
import SignupForm from '../../Components/Contact/SignupForm'

const Section3 = () => {
  return (
    // w-[90%] ml-[150px] mr-[50px] mt-[40px] parentDiv grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5
    <>
   <div className="parentContainer m-auto flex flex-col lg:flex-row gap-2 lg:gap-0 w-[1035px] mt-[45px]">
    <div className="leftCol l">
        <div className='flex gap-8 w-[393px] mb-8'>
            <div>
                <img className='max-w-[22px] min-h-[27px]' src={addressIcon} alt="" />
            </div>
            <div>
                <p className='text-[22px] font-bold font-[poppins]'>Address</p>
                <p className='w-[212px] h-[72px] text-[16px] font-[poppins]'>
                    236 5th SE Avenue, New York NY10000, United States
                </p>
            </div>
        </div>
        <div className='flex gap-8 w-[393px] mb-8'>
            <div>
                <img className='max-w-[22px] min-h-[27px]' src={phoneIcon} alt="" />
            </div>
            <div>
                <p className='text-[22px] font-bold font-[poppins]'>Address</p>
                <p className='w-[212px] h-[72px] text-[16px] font-[poppins]'>
                Mobile: +(84) 546-6789
                Hotline: +(84) 456-6789
                </p>
            </div>
        </div>
        <div className='flex gap-8 w-[393px] mb-8'>
            <div>
                <img className='max-w-[22px] min-h-[27px]' src={timeIcon} alt="" />
            </div>
            <div>
                <p className='text-[22px] font-bold font-[poppins]'>Working Time</p>
                <p className='w-[220px] h-[72px] text-[16px] font-[poppins]'>
                Monday-Friday: 9:00 - 22:00 <br />
                Saturday-Sunday: 9:00 - 21:00
                </p>
            </div>
        </div>
    </div>
    <div className="rightCol ">
        <SignupForm />
    </div>
</div>


    </>
  )
}

export default Section3