import React, { useState } from "react";
import { Image } from "cloudinary-react";
import { images } from "../../../data/showmoredata.json";
import shareIcon from "../../assets/shareIcon.png";
import love from "../../assets/love.png";
import arrowFrontandBack from "../../assets/arrowFrontandBack.png";
import iconHigh from '../../assets/iconHigh.png';
import iconWarranty from '../../assets/iconWarranty.png';
import iconFree from '../../assets/iconFree.png';
import iconSupport from '../../assets/iconSupport.png';
import { useNavigate } from "react-router-dom";

const ShowMore = () => {
  const [product, setProduct] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [likedProducts, setLikedProducts] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 18; // Customize the number of products per page
  const navigate = useNavigate();

  const handleCompareClick = () => {
    navigate("/Compare");
  };

  const handleShareClick = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleLikeClick = (id) => {
    setLikedProducts((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const getBackgroundColor = (percentage) => {
    if (percentage === "New") return "#2EC1AC"; // New product in green
    if (percentage && percentage.includes("-")) return "#E97171"; // Discount (negative percentage) in red
    return "transparent"; // No background if percentage is empty or undefined
  };

  // Paginate products
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = Object.keys(images)
    .filter((key) => key.startsWith("image"))
    .slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <>
      <div className="products w-[90%] grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 justify-center place-items-center m-auto">
        {currentProducts.map((key) => {
          const product = images[key];
          return (
            <div key={product.id} className="theProducts">
              <div className="flex-1 w-[285px] bg-[#F4F5F7]">
                <Image
                  cloudName={images.cloudName}
                  publicId={product.url}
                  loading="lazy"
                  alt={product.productName}
                  className="productImages"
                />
                <div className="product-details">
                  <span
                    className="percentage"
                    style={{ backgroundColor: getBackgroundColor(product.percentage) }}
                  >
                    {product.percentage}
                  </span>
                  <h5 className="productsName">{product.productName}</h5>
                  <p className="productsDescription">{product.description}</p>
                  <div className="spans">
                    <p className="mainPrice">{product.price}</p>
                    {product.previousPrice && (
                      <p className="cancelled">{product.previousPrice}</p>
                    )}
                  </div>
                </div>
                {/* Hover overlay */}
                <div className="hoverOverlay w-[100%]">
                  <div className="network">Add to cart</div>
                  <div className="overlayIcons">
                    <div className="iconItems" onClick={handleShareClick}>
                      <img src={shareIcon} alt="shareIcon" />
                      <p>Share</p>
                    </div>
                    <div className="iconItems" onClick={handleCompareClick}>
                      <img src={arrowFrontandBack} alt="arrowFrontandBack" />
                      <p>Compare</p>
                    </div>
                    <div className="iconItems" onClick={() => handleLikeClick(product.id)}>
                      <img src={love} alt="love" />
                      <p>{likedProducts[product.id] ? "Liked" : "Like"}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {showToast && <div className="toast">URL Copied to Clipboard!</div>}

      {/* Pagination Controls */}
      <div className="w-full flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap items-center justify-center gap-10 px-5 py-5 my-auto mb-[250px]">
        {[1, 2, 3].map((number) => (
          <span
            key={number}
            onClick={() => paginate(number)}
            className={`w-[40px] h-[40px] ${
              currentPage === number ? "bg-[#B88E2F] text-white" : "bg-red-100"
            } rounded-xl flex items-center justify-center cursor-pointer`}
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

      {/* SectionTwo */}
      <div className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap justify-between gap-10 px-10 py-20 bg-red-100">
        <div className="flex gap-4">
          <img className="max-w-[60px] h-[60px]" src={iconHigh} alt="" />
          <div className="mt-1 max-w-[267px] h-[70px]">
            <p>High Quality</p>
            <p>crafted from top materials</p>
          </div>
        </div>
        <div className="flex gap-4">
          <img className="max-w-[60px] h-[60px]" src={iconWarranty} alt="" />
          <div className="mt-1 max-w-[267px] h-[70px]">
            <p>Warranty Protection</p>
            <p>Over 2 years</p>
          </div>
        </div>
        <div className="flex gap-4">
          <img className="max-w-[60px] h-[60px]" src={iconFree} alt="" />
          <div className="mt-1 max-w-[267px] h-[70px]">
            <p>Free Shipping</p>
            <p>Order over 150 $</p>
          </div>
        </div>
        <div className="flex gap-4">
          <img className="max-w-[60px] h-[60px]" src={iconSupport} alt="" />
          <div className="mt-1 max-w-[267px] h-[70px]">
            <p>24 / 7 Support</p>
            <p>Dedicated support</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowMore;
