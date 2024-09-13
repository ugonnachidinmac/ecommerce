import { useState } from 'react';
import { Image } from 'cloudinary-react'; // Assuming you're using cloudinary-react for images
import iconHigh from '../../assets/iconHigh.png';
import iconWarranty from '../../assets/iconWarranty.png';
import iconFree from '../../assets/iconFree.png';
import iconSupport from '../../assets/iconSupport.png';

function ProductComponent({ products }) {
  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 16; // Define how many products per page

  // Get the index range of products to display
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
<div className="w-full min-h-[2051px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 overflow-hidden pl-10 mt-10 ">

{/* Render current products */}
{currentProducts.map((product, index) => (
  <div key={index} className="w-full max-w-[290px] min-h-[100px]">
    <div>{product.discount}</div>
    <Image
      className="produtImg"
      loading="lazy"
      cloudName={product.cloudName}
      publicId={product.url}
    />
    <div className="productsName">{product.productName}</div>
    <div className="productsDescription">{product.description}</div>
    <div className="spans flex justify-between">
      <div className="mainPrice">{product.price}</div>
      <div className="cancelled line-through">{product.oldPrice}</div>
    </div>
  </div>
  
))}
</div>

{/* Pagination Controls */}
<div className="w-full flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap items-center justify-center gap-10 px-5 py-5 my-auto mb-[250px]">
  {[1, 2, 3].map((number) => (
    <span
      key={number}
      onClick={() => paginate(number)}
      className={`w-[40px] h-[40px] ${
        currentPage === number ? 'bg-[#B88E2F] text-white' : 'bg-red-100'
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
}

export default ProductComponent;
