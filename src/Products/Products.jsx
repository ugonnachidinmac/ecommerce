import React, { useState } from "react";
import { Image } from "cloudinary-react";
import { images } from "../../data/productdata.json";
import { ProductsData } from "../Products/ProductsData";
import shareIcon from "../assets/shareIcon.png";
import love from "../assets/love.png";
import arrowFrontandBack from "../assets/arrowFrontandBack.png";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState(ProductsData);
  const [showToast, setShowToast] = useState(false);
  const [likedProducts, setLikedProducts] = useState({});
  const navigate = useNavigate();

  const handleCompareClick = () => {
    navigate("/Compare");
  };
  const handleShowmoreClick = () => {
    navigate("/ShowMore");
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

  return (
    <>
      <h4 className="ourProducts mb-[25px]">Our Products</h4>
      <div className=" w-[90%] grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 justify-center place-items-center m-auto">
        {Object.keys(images)
          .filter((key) => key.startsWith("image"))
          .map((key) => {
            const product = images[key];
            return (
              <div key={product.id} className="theProducts">
                <div className="flex-1 w-[270px] bg-[#F4F5F7]">
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
                    <button className="network">Add to cart</button>
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
      <button className="showMoreButton grid grid-cols-1 m-auto" onClick={handleShowmoreClick}>Show More</button>
      {showToast && <div className="toast">URL Copied to Clipboard!</div>}
    </>
  );
};

export default Products;
