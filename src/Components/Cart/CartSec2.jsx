import React from "react";
import deleteIconCart from "../../assets/deleteIconCart.png";
import { Image } from "cloudinary-react";
import { images } from "../../../data/cartdata.json";

const CartSec2 = () => {
  return (
    <div className="w-full lg:max-w-[90%] max-w-[100%] mt-8 flex flex-col lg:flex-row gap-10 min-h-[525px] m-auto overflow-hidden">
      {/* Column A (Product Table) */}
      <div className="colA w-full lg:w-[65%] flex flex-col overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead className="hidden lg:table-header-group">
            {/* Show thead only on large screens */}
            <tr className="bg-[#F9F1E7]">
              <th className="w-1/2 lg:w-1/3 px-4 py-2 text-left text-sm font-medium text-gray-900">
                Product
              </th>
              <th className="w-1/6 px-4 py-2 text-left text-sm font-medium text-gray-900">
                Price
              </th>
              <th className="w-1/6 px-4 py-2 text-left text-sm font-medium text-gray-900">
                Quantity
              </th>
              <th className="w-1/6 px-4 py-2 text-left text-sm font-medium text-gray-900">
                Subtotal
              </th>
              <th className="w-1/12 px-4 py-2"></th>
            </tr>
          </thead>
          <tbody>
            {/* Responsive stacked layout for small screens */}
            <tr className="border-b border-gray-300 block lg:table-row">
            <td className="px-4 py-4 flex items-center space-x-4">
  <span className="lg:hidden font-bold">Product</span>
  <div className="flex items-center space-x-4">
    <Image
      loading="lazy"
      cloudName={images.cloudName}
      publicId={images.image2.url}
      className="w-16 h-16 object-cover"
    />
    <p>Asgaard sofa</p>
  </div>
</td>

              <td className="px-4 py-4 flex flex-col lg:table-cell">
                <span className="lg:hidden font-bold">Price</span>
                Rs. 250,000.00
              </td>
              <td className="px-4 py-4 flex flex-col lg:table-cell">
                <span className="lg:hidden font-bold">Quantity</span>
                1
              </td>
              <td className="px-4 py-4 flex flex-col lg:table-cell">
                <span className="lg:hidden font-bold">Subtotal</span>
                Rs. 250,000.00
              </td>
              <td className="px-4 py-4 flex flex-col lg:table-cell">
                <span className="lg:hidden font-bold">Action</span>
                <img
                  src={deleteIconCart}
                  alt="Delete Icon"
                  className="w-5 h-5 cursor-pointer"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Column B (Cart Totals) */}
      <div className="colB w-full flex flex-col lg:w-[35%] bg-[#F9F1E7] lg:p-8">
        <div className="mb-6 text-center">
          <p className="font-bold text-lg">Cart Totals</p>
        </div>
        <div className="flex flex-col lg:flex-row justify-between mb-4 px-2">
          <p className="font-bold">Subtotal</p>
          <p className="text-gray-500">Rs. 250,000.00</p>
        </div>
        <div className="flex flex-col lg:flex-row justify-between mb-12 px-2">
          <p className="font-bold">Total</p>
          <p className="text-[#B88E2F]">Rs. 250,000.00</p>
        </div>
        <button className="w-full lg:w-2/3 mx-auto p-2 bg-black text-white rounded-lg font-semibold">
          Check Out
        </button>
      </div>
    </div>
  );
};

export default CartSec2;
