import { useState, useEffect, useRef } from 'react';

const Cart = ({ cartCloseIcon, cartblockIcon, images }) => {
  const [isOpen, setIsOpen] = useState(false); // Controls cart open state
  const cartRef = useRef(null);

  // Function to toggle cart visibility
  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  // Close cart when clicking outside
  const handleClickOutside = (event) => {
    if (cartRef.current && !cartRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      {/* Assume cart icon is part of the navbar */}
      {/* When the existing navbar cart icon is clicked, it should call toggleCart() */}

      {/* Apply a blur effect on the main content when the cart is open */}
      <div className={`main-content ${isOpen ? 'blur-md' : ''}`}>
        {/* This is where the main page content goes */}
        {/* Rest of the page that should be blurred when cart is open */}
      </div>

      {/* Show the full cart page when isOpen is true */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-center items-center">
          {/* Partially transparent background to blur the rest of the page */}
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>

          {/* Cart container centered on the page, with a fixed width of 417px */}
          <div
            ref={cartRef}
            className="relative w-[417px] h-auto bg-white p-6 shadow-lg z-10"
          >
            {/* Cart Header */}
            <div className="flex justify-between items-center mb-4">
              <p className="text-lg font-semibold">Shopping Cart</p>
              <img
                src={cartCloseIcon}
                alt="Close"
                className="cursor-pointer"
                onClick={toggleCart}
              />
            </div>

            <hr className="w-[287px] border border-1-[#D9D9D9] mt-[50px]" />

            {/* Cart Items */}
            <div className="flex items-center justify-center gap-[78px] overflow-hidden mt-[45px]">
              <img
                className="w-[108px] h-[105px]"
                loading="lazy"
                src={images.image1.url}
                alt="Product Image"
              />
              <div className="w-[130px]">
                <p>Asgaard sofa</p>
                <div className="flex items-center justify-between">
                  <p>1</p>
                  <p>X</p>
                  <p>Rs. 250,000.00</p>
                </div>
              </div>
              <div>
                <img className="w-[20px] h-[20px]" src={cartblockIcon} alt="" />
              </div>
            </div>

            <div className="flex items-center justify-center gap-[78px] overflow-hidden mt-[40px] mb-[120px]">
              <img
                loading="lazy"
                src={images.image2.url}
                alt="Product Image"
              />
              <div className="w-[130px]">
                <p>Casaliving Wood</p>
                <div className="flex items-center justify-between">
                  <p>1</p>
                  <p>X</p>
                  <p>Rs. 270,000.00</p>
                </div>
              </div>
              <div>
                <img className="w-[20px] h-[20px]" src={cartblockIcon} alt="" />
              </div>
            </div>

            {/* Subtotal Section */}
            <div className="flex items-center justify-between mr-[40px] mb-[20px]">
              <p>Subtotal</p>
              <p>Rs. 520,000.00</p>
            </div>

            <hr className="border border-[#D9D9D9]" />
            <div className="flex items-center gap-[15px] mt-[35px]">
              <button className="pt-[6px] pr-[30px] pb-[6px] pl-[30px] rounded-[50px] border border-black">
                Cart
              </button>
              <button className="pt-[6px] pr-[30px] pb-[6px] pl-[30px] rounded-[50px] border border-black">
                Checkout
              </button>
              <button className="pt-[6px] pr-[30px] pb-[6px] pl-[30px] rounded-[50px] border border-black">
                Comparison
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
