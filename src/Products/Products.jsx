import React, { useState } from "react";
import { ProductsData } from "../Products/ProductsData";
import shareIcon from '../assets/shareIcon.png'
import love from '../assets/love.png'
import arrowFrontandBack from '../assets/arrowFrontandBack.png'
import { Image } from "cloudinary-react";
import { images } from "../../data/homedata.json"

import { useNavigate } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState(ProductsData);
  const [showToast, setShowToast] = useState(false);
  const [likedProducts, setLikedProducts] = useState({}); // To track liked state of individual products
  const navigate = useNavigate();

  // Handle Compare navigation
  const handleCompareClick = () => {
    navigate('/Compare'); // Assumes you have a route for '/compare'
  };

  // Handle Share functionality
  const handleShareClick = () => {
    const url = window.location.href; // Get the current page URL
    navigator.clipboard.writeText(url); // Copy the URL to the clipboard
    setShowToast(true); // Show the toast message

    // Hide toast after 3 seconds
    setTimeout(() => setShowToast(false), 3000);
  };

  // Handle Like functionality for individual products
  const handleLikeClick = (id) => {
    setLikedProducts((prevState) => ({
      ...prevState,
      [id]: !prevState[id], // Toggle the liked state of the product
    }));
  };

  function ProductList({ products }) {
    function getBackgroundColor(percentage) {
      if (percentage === 'New') return '#2EC1AC'; // New items in green
      const percentValue = parseInt(percentage, 10);
      if (percentValue <= 0 && percentValue <= 100) return '#E97171'; // Discount in red
      return; // Default color if no match
    }

    return (
      <>
        <h4 className="ourProducts">Our Products</h4>
        <div className="products">
          {products.map((each) => (
            <div key={each.id}>
              <div className="theProducts">
                <div className="percentage" style={{ backgroundColor: getBackgroundColor(each.percentage) }}>
                  {each.percentage}
                </div>
                <div className="productImages">{each.image}</div>
                <p className="productsName">{each.productName}</p>
                <p className="productsDescription">{each.description}</p>
                <div className="spans">
                  <span className="mainPrice">{each.price}</span>
                  <span className="cancelled">{each.previousPrice}</span>
                </div>
                <div className="hoverOverlay">
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
                    <div className="iconItems" onClick={() => handleLikeClick(each.id)}>
                      <img src={love} alt="love" />
                      <p>{likedProducts[each.id] ? 'Liked' : 'Like'}</p> {/* Toggle 'Liked' and 'Like' */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="showMoreButton">Show More</button>
        {showToast && <div className="toast">URL Copied to Clipboard!</div>} {/* Display toast */}
      </>
    );
  }

  return <ProductList products={products} />;
};

export default Products;
