import React, { useState } from "react";
import { images as blogImages } from "../../../data/bolgdata.json"; // Renamed to avoid conflict
import Intro from '../../Components/Blog/Intro'
import BlogSec2 from '../../Components/Blog/BlogSec2'
import LastStion from "../../Components/ReuseSection/LastStion";
import { useNavigate } from "react-router-dom";
// starts

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 3; // Customize the number of products per page
  const navigate = useNavigate();

  // Paginate products
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = Object.keys(blogImages)
    .filter((key) => key.startsWith("image"))
    .slice(indexOfFirstProduct, indexOfLastProduct);

  return (
  <>
     <Intro />
      <BlogSec2 />     
      <LastStion />
      </>
  
  );
};

export default Blog;
