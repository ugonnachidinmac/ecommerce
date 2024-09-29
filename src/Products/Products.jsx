import React, { useState } from "react";
import { Image } from "cloudinary-react";
import { images } from "../../data/productdata.json";
import { ProductsData } from "../Products/ProductsData";
import shareIcon from "../assets/shareIcon.png";
import love from "../assets/love.png";
import arrowFrontandBack from "../assets/arrowFrontandBack.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart as addToCartAction } from "../Components/Cart/CartSlice"; // Rename to avoid conflict
import { useRecoilState } from "recoil";
import { cartData } from "../Components/Atom/Cart";

const Products = () => {
  const [products, setProducts] = useState(ProductsData);
  const [showToast, setShowToast] = useState(false);
  const [likedProducts, setLikedProducts] = useState({});
  const [cart, setCart] = useRecoilState(cartData);
  const [viewedItems, setViewedItems] = useState([]);
  const navigate = useNavigate();

  function handleAddToCart(data) { // Rename to avoid conflict with imported addToCartAction
    if (cart.find((x) => x.id === data.id)) {
      console.log("found");
    } else {
      console.log("not found");
      setCart([...cart, data]);
      setViewedItems([...viewedItems, data.id]);
    }
  }

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
      <div className="w-full grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-5 justify-center items-center m-auto overflow-hidden">
        {Object.keys(images)
          .filter((key) => key.startsWith("image"))
          .map((key) => {
            const product = images[key];
            return (
              <div key={product.id} className="theProducts">
                <div className="flex-1 bg-[#F4F5F7] w-full">
                  <Image
                    cloudName={images.cloudName}
                    publicId={product.url}
                    loading="lazy"
                    alt={product.productName}
                    className="productImages w-full object-cover"
                  />
                  <div className="product-details w-full pl-[15px]">
                    <span
                      className="percentage"
                      style={{
                        backgroundColor: getBackgroundColor(product.percentage),
                      }}
                    >
                      {product.percentage}
                    </span>
                    <h5 className="productsName">{product.productName}</h5>
                    <p className="productsDescription">{product.description}</p>
                    <div className="spans w-full">
                      <p className="mainPrice">Rp {product.price}</p>
                      {product.previousPrice && (
                        <p className="cancelled">Rp {product.previousPrice}</p>
                      )}
                    </div>
                  </div>
                  {/* Hover overlay */}
                  <div className="hoverOverlay w-full">
                    <button
                      className="network"
                      onClick={(e) => handleAddToCart(product)}
                    >
                      {viewedItems.includes(product.id) ? "Viewed" : "Add to Cart"}
                    </button>
                    <div className="overlayIcons pl-[15px] pr-[15px]">
                      <div className="iconItems" onClick={handleShareClick}>
                        <img src={shareIcon} alt="shareIcon" />
                        <p>Share</p>
                      </div>

                      <div className="iconItems" onClick={(e) => navigate("/single/" + product.id)}>
                        <img src={arrowFrontandBack} alt="arrowFrontandBack" />
                        <p>Compare</p>
                      </div>

                      <div
                        className="iconItems"
                        onClick={() => handleLikeClick(product.id)}
                      >
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
      <button
        className="showMoreButton grid grid-cols-1 m-auto"
        onClick={handleShowmoreClick}
      >
        Show More
      </button>
      {showToast && <div className="toast">URL Copied to Clipboard!</div>}
    </>
  );
};

export default Products;
