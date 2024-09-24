import React, { useState } from "react";
import { Image } from "cloudinary-react";
import { images as blogImages } from "../../../data/bolgdata.json"; // Renamed to avoid conflict
import Intro from '../../Components/Blog/Intro'
import adminIcon from "../../assets/adminIcon.png";
import calenderIcon from "../../assets/calenderIcon.png";
import blogsideimg1 from "../../assets/blogsideimg1.png";
import blogsideimg2 from "../../assets/blogsideimg2.png";
import blogsideimg3 from "../../assets/blogsideimg3.png";
import blogsideimg4 from "../../assets/blogsideimg4.png";
import blogsideimg5 from "../../assets/blogsideimg5.png";
import wood from "../../assets/wood.png";
import searchIcon from "../../assets/searchIcon.png";
import LastStion from "../../Components/ReuseSection/LastStion";
import { useNavigate } from "react-router-dom";
// starts


const BlogSec2 = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 3; // Customize the number of products per page
  const navigate = useNavigate();

  // Paginate products
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = Object.keys(blogImages)
    .filter((key) => key.startsWith("image"))
    .slice(indexOfFirstProduct, indexOfLastProduct);


  return (
    <>
    <div className="flex flex-col lg:flex-row mt-[90px] gap-[15px] lg:px-[57px] overflow-hidden">
  {/* Left Column - Product List */}
  <div className="leftCol px-4 lg:px-[25px] w-full lg:w-[60%]">
    <div className="grid grid-cols-1 gap-5">
      {currentProducts.map((key) => {
        const product = blogImages[key];
        return (
          <div
            key={product.id}
            className="product-card p-4 border rounded-md shadow-md w-full"
          >
            <div className="w-full">
              <Image
                cloudName={blogImages.cloudName}
                publicId={product.url}
                loading="lazy"
                alt={product.productName}
                className="productImages w-full"
              />
            </div>

            <div className="mt-4">
              <div className="flex flex-col lg:flex-row gap-4">
                <span className="flex items-center gap-2">
                  <img src={adminIcon} alt="admin" className="w-4 h-4" />
                  {product.admin}
                </span>
                <span className="calendar flex items-center gap-2">
                  <img src={calenderIcon} alt="calendar" className="w-4 h-4" />
                  {product.calender}
                </span>
                <span className="wood flex items-center gap-2">
                  <img src={wood} alt="Made in" className="w-4 h-4" />
                  {product.made}
                </span>
              </div>
              <h4 className="product-title font-bold mt-2">{product.heading}</h4>
              <p className="description mt-1 text-sm">{product.discription}</p>
              <button className="readmore rounded text-black px-4 py-2 mt-2">
                {product.readmore}
              </button>
            </div>
          </div>
        );
      })}
    </div>

    {/* Pagination Controls */}
    <div className="pagination-controls w-full flex items-center justify-end gap-5 py-16">
      {[1, 2, 3].map((number) => (
        <span
          key={number}
          onClick={() => paginate(number)}
          className={`w-[40px] h-[40px] flex items-center justify-center rounded-xl cursor-pointer ${
            currentPage === number ? "bg-[#B88E2F] text-white" : "bg-red-100"
          }`}
        >
          {number}
        </span>
      ))}
      <span
        onClick={() => paginate(currentPage + 1)}
        className="w-[60px] h-[40px] bg-red-100 rounded-xl flex items-center justify-center cursor-pointer"
      >
        Next
      </span>
    </div>
  </div>

  {/* Right Column - Search Box */}
  <div className="rightCol w-full lg:w-[40%] lg:px-[97px] px-4 border-slate-800">
    <div className="search-box flex items-center gap-2 border p-2 rounded">
      <input
        type="text"
        name="search box"
        placeholder="Search..."
        className="w-full p-2 border-none focus:outline-none"
      />
      <img src={searchIcon} alt="search" className="w-5 h-5" />
    </div>

    {/* Categories and Recent Posts */}
    <div className="ml-4">
      <p className="font-[Poppins] text-[24px] mt-10 mb-10">Categories</p>
      {/* Categories List */}
      <div className="flex justify-between mb-[30px]">
        <p>Crafts</p>
        <p>2</p>
      </div>
      <div className="flex justify-between mb-[30px]">
        <p>Design</p>
        <p>8</p>
      </div>
      <div className="flex justify-between mb-[30px]">
        <p>Interior</p>
        <p>1</p>
      </div>
      <div className="flex justify-between mb-[30px]">
        <p>Wood</p>
        <p>6</p>
      </div>

      {/* Recent Posts */}
      <p className="w-[250px] mb-[20px] text-[24px] font-[poppins] font-bold">
        Recent Posts
      </p>
      {/* Recent Post List */}
      <div className="flex gap-5 mb-10">
        <img src={blogsideimg1} alt="" />
        <div className="mt-2">
          <p className="text-[14px] font-[poppins]">Going all-in with...</p>
          <p className="text-[12px] font-[poppins] text-[#9F9F9F]">03 Aug 2022</p>
        </div>
      </div>
      <div className="flex w-[300px] gap-5 mb-[50px]">
              <div>
                <img src={blogsideimg2} alt="" />
              </div>
              <div className="mt-[10px]">
                <p className="text-[14px] font-[poppins] mb-[8px]">
                  Exploring new ways <br /> of decorating
                </p>
                <p className="text-[12px] font-[poppins] text-[#9F9F9F]">
                  03 Aug 2022
                </p>
              </div>
            </div>
            <div className="flex w-[300px] gap-5 mb-[50px]">
              <div>
                <img src={blogsideimg3} alt="" />
              </div>
              <div className="mt-[10px]">
                <p className="text-[14px] font-[poppins] mb-[8px]">
                  Handmade pieces <br /> that took time to make
                </p>
                <p className="text-[12px] font-[poppins] text-[#9F9F9F]">
                  03 Aug 2022
                </p>
              </div>
            </div>
            <div className="flex w-[300px] gap-5 mb-[50px]">
              <div>
                <img src={blogsideimg4} alt="" />
              </div>
              <div className="mt-[10px]">
                <p className="text-[14px] font-[poppins] mb-[8px]">
                  Modern home in <br /> Milan
                </p>
                <p className="text-[12px] font-[poppins] text-[#9F9F9F]">
                  03 Aug 2022
                </p>
              </div>
            </div>
            <div className="flex w-[300px] gap-5 mb-[50px]">
              <div>
                <img src={blogsideimg5} alt="" />
              </div>
              <div className="mt-[10px]">
                <p className="text-[14px] font-[poppins] mb-[8px]">
                  Colorful office <br /> redesign
                </p>
                <p className="text-[12px] font-[poppins] text-[#9F9F9F]">
                  03 Aug 2022
                </p>
              </div>
            </div>

    </div>
  </div>
</div>

    </>
  )
}
export default BlogSec2;