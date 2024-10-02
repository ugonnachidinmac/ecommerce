import React from 'react';

const About = () => {
  return (
    <section className="flex flex-col items-center justify-center m-auto w-full max-w-screen-lg px-4">
      {/* Header Section */}
      <h1 className="text-center text-blue-700 text-2xl lg:text-3xl font-semibold border-b-2 border-red-500 w-full my-6">
        CareerEx
      </h1>

      {/* About Us Section */}
      <div className="border-l-4 border-blue-900 w-full lg:w-3/4 p-6 mb-8">
        <h2 className="font-bold text-xl lg:text-2xl mb-4">About us</h2>
        <p className="text-justify text-gray-700">
          At CareerEx, we transform career ambitions into achievements. We make you a coveted professional no recruiter can overlook. From your application till you ace that dream interview, we’re with you every step of the way!
        </p>
      </div>

      {/* Newsletter Section */}
      <div className="border-l-4 border-blue-900 w-full lg:w-3/4 p-6 mt-8">
        <h2 className="font-bold text-xl lg:text-2xl mb-4">Why subscribe to our newsletter?</h2>
        <p className="text-justify text-gray-700">
          We publish career tips to help you stay ahead of the curve in your professional journey! Whether you’re just kickstarting your career as a student, a recent graduate, a young professional, or you’re seeking to transition to a new path, our publications are targeted towards making you a coveted professional no recruiter can overlook!
        </p>
      </div>
    </section>
  );
};

export default About;
