import React from 'react'

const About = () => {
  return (
    <>
    <section className='flex flex-col item-center justify-center m-auto'>
    <h1 className='text-center text-blue-700 text-[28px] border border-green-2'>CareerEx</h1>
    <div className='w-[750px] border border-l-blue-900 m-auto ml-[350px] pl-[30px]'>
      <h2 className='font-bold text-[24px] mb-[15px]'>About us?</h2>
      <div className='text-justify'>
      At CareerEx, we transform career ambitions into achievements. We make you a coveted professional no recruiter can overlook. From your application till you ace that dream interview, we’re with you every step of the way!
      </div>
    </div>
    <div className='w-[750px] border border-l-blue-900 m-auto ml-[350px] pl-[30px] mt-[50px]'>
      <h2 className='font-bold text-[24px] mb-[15px]'>Why subscribe to our newsletter?</h2>
      <div className='text-justify'>
      We publish career tips to help you stay ahead of the curve in your professional journey! Whether you’re just kickstarting your career as a student, a recent graduate; you’re a young professional, or you’re seeking to transition to a new path, our publications are targeted towards making you a coveted professional no recruiter can overlook!
      </div>
    </div>
    </section>
    </>
  )
}

export default About