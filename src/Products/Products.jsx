import React, { useState } from "react";
import { ProductsData } from "../Products/ProductsData";

const Products = () => {
  const [products, setProducts] = useState(ProductsData);

  function ProductList({ products }) {
    function getBackgroundColor(percentage) {
      if (percentage === 'New') return '#2EC1AC'; // New items in blue color
      const percentValue = parseInt(percentage, 10);
      if (percentValue <= 0 && percentValue <= 100) return '#E97171'; // 0% - 100% in red color
      return null; // Default color if no match
    }

    return (
      <>
        <h4 className="ourProducts">Our Products</h4>
        <div className="products">
          {products.map((each) => (
            <div key={each.id}>
              <div className="theProducts">
                <div className="percentage" style={{ backgroundColor: getBackgroundColor(each.percentage) }}>{each.percentage}</div>
                <div className="productImages">{each.image}</div>
                <p className="productsName">{each.productName}</p>
                <p className="productsDescription">{each.description}</p>
                <div className="spans">
                  <span className="mainPrice">{each.price}</span>
                  <span className="cancelledPrice">{each.previousPrice}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="showMoreButton">Show More</button>
      </>
    );
  }

  return <ProductList products={products} />;
};

export default Products;