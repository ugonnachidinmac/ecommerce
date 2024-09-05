import React, { useState } from "react";
import { ProductsData } from "../Products/ProductsData";

const Products = () => {
  let [products,setProducts] = useState(ProductsData);
  
  return (
    <>
        <h4 className="ourProducts">Our Products</h4>
  
        <div className="products">
          {
          products.map((each) => (
            <div key={each.id}>
              <div className="theProducts">
                <div className="percentage">{each.percentage}</div>
                <div className="prodeuctImages">{each.image}</div>
                <p className="productsName">{each.productName}</p>
                <p className="productsDescription">{each.description}</p>
              <div className="spans">
              <span className="mainPrice">{each.price}</span>
              <span className="cancelled"Price>{each.previousPrice}</span>
              </div>
              </div>
            </div>
          ))}
        </div>
        <button className="showMoreButton">Show More</button>
      
    </>
  );
};

export default Products;
