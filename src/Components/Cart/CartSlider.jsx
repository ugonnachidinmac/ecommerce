import React from "react";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import cartCloseIcon from "../../assets/cartCloseIcon.png";
import cartblockIcon from "../../assets/cartblockIcon.png";
import { useRecoilState } from "recoil";
import { cartData } from "../../Components/Atom/Cart";

const CartSlider = ({ show, setShow }) => {
  let redir = useNavigate();
  let [cart, setCart] = useRecoilState(cartData);

  const handleRemoveProduct = (productId) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart); // Assuming setCart is your state updater function
  };
  

  const subtotal = cart.reduce((total, item) => total + item.price, 0)

  let handleClose = (e) => {
    e.stopPropagation();
    setShow((prev) => !prev);
  };

  return (
    <>
      {/* Overlay Background */}
      <div
        onClick={handleClose}
        className={classNames(
          "w-full h-[3107px] bg-[#00000033] fixed top-0 left-0 z-40",
          {
            hidden: !show,
          }
        )}
      >
        {/* Cart Slider */}
        <div
          onClick={(e) => e.stopPropagation()}
          className="parent w-[417px]  min-h-[746px] bg-white text-black fixed right-0 top-0 pt-[25px]"
        >
          {/* Cart Header */}
          <div className="w-[350px] flex items-center justify-between pl-[30px] mb-[35px]">
            <h4 className="font-[Poppins] text-[24px]">Shopping Cart</h4>
            <button onClick={(e) => handleClose(e)} className="">
              <img src={cartCloseIcon} alt="Close" />
            </button>
          </div>


          {/* Cart Items */}
          <div className="cart-items pl-[30px] pr-[30px]">
            {cart.length > 0 ? (
              cart.map((product) => (
                <div key={product.id} className="cart-item mb-[20px]">
                  <div className="flex items-center gap-[30px]">
                    <img
                    
                     src={product.url}
                     alt={product.productName}
                      className="w-[95px] h-[85px] rounded-md"
                    />
                    <div className="w-[145px]"><p className="font-[Poppins] text-[16px]">{product.productName}</p>
                    <p className="font-[Poppins] text-[16px] font-bold text-[#b49651]">{`Rs. ${product.price}`}</p></div>

                    <div onClick={() => handleRemoveProduct(product.id)}><img src={cartblockIcon} alt="" /></div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-[16px] font-[Poppins] text-center mt-[20px]">
                Your cart is empty.
              </p>
            )}
          </div>

          {/* Subtotal and Buttons */}
          <div className="bottomContainer relative mt-[45px]">
            <div className="flex items-center gap-[140px] pb-[25px] pr-[40px] mb-[20px] border-none border-b-2 border-b-[#9F9F9F] pl-[30px]">
              <p className="font-[Poppins] text-[16px] font-bold">Subtotal</p>
              <p className="font-[Poppins] text-[16px] font-bold text-[#b49651]">
              {`Rs. ${subtotal.toLocaleString('en-IN')}`}
              </p>
            </div>

            <div className="buttonDiv flex flex-col lg:flex-row gap-[25px] pl-[30px] pr-[60px]">
              <button
                onClick={(e) => {
                  handleClose(e);
                  redir("/Cart");
                }}
                className="outline outline-black-300 p-2 rounded-[20px] w-[87px] font-[Poppins] text-[12px] font-bold"
              >
                Cart
              </button>
              <button
                onClick={(e) => {
                  handleClose(e);
                  redir("/CheckOut");
                }}
                className="w-[118px] outline outline-black-300 p-2 rounded-[20px] font-[Poppins] text-[12px] font-bold"
              >
                Checkout
              </button>
              <button
                onClick={(e) => {
                  handleClose(e);
                  redir("/Comparison");
                }}
                className="w-[135px] outline outline-black-300 p-2 rounded-[20px] font-[Poppins] text-[12px] font-bold"
              >
                Comparison
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartSlider;
