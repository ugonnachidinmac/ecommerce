import React from 'react';

const About = () => {
  return (
    <section className="flex flex-col items-center justify-center m-auto w-full max-w-screen-lg px-4">
      {/* Header Section */}
      <h1 className="text-center text-blue-700 text-2xl lg:text-3xl font-bold border-b-2 border-red-500 w-full my-6">
        Furniro
      </h1>

      {/* About Us Section */}
      <div className="border-l-4 border-blue-900 w-full lg:w-3/4 p-6 mb-8">
        <h2 className="font-bold text-xl lg:text-2xl mb-4">About us</h2>
        <p className="text-gray-600 leading-7 text-justify">
  At <span className="font-semibold">Furniro</span>, we believe that every home
  deserves furniture that combines style, comfort, and functionality. We offer
  a carefully curated collection of modern and timeless pieces designed to
  transform your living spaces. Our commitment is to provide high-quality
  furniture at affordable prices while delivering an exceptional shopping
  experience for every customer.
</p>
      </div>

      {/* Newsletter Section */}
      <div className="border-l-4 border-blue-900 w-full lg:w-3/4 p-6 mt-8">
        <h2 className="font-bold text-xl lg:text-2xl mb-4">Why subscribe to our newsletter?</h2>
        <p className="text-justify text-gray-700">
         At Furniro, we bring you stylish, high-quality furniture designed to transform your house into a home. Whether you're furnishing a new space, upgrading your living room, or adding the perfect finishing touch, our carefully curated collection combines comfort, elegance, and durability to suit every lifestyle and taste.
        </p>
      </div>
    </section>
  );
};

export default About;
