import { useState, useEffect } from 'react';
import ProductComponent from '../../Components/ProductComponent/ProductComponent'; // Assuming the component is in the same folder

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Your JSON file data
    const jsonData = {
      images: {
        cloudName: "dqtyrjpeh",
        image1: {
          id: "1",
          discount: "",
          url: "https://res.cloudinary.com/dqtyrjpeh/image/upload/v1725972819/shopCol1_wh8sxu.png",
          productName: "Syltherine",
          description: "Stylish cafe chair",
          price: "Rp 2.500.000",
          oldPrice: "Rp 3.500.000",
        },
        image2: {
          id: "2",
          discount: "",
          url: "https://res.cloudinary.com/dqtyrjpeh/image/upload/v1725972820/shopCol2_gx0xw3.png",
          productName: "Leviosa",
          description: "Stylish cafe chair",
          price: "Rp 2.500.000",
          oldPrice: "",
        },
        image3: {
          id: "3",
          discount: "",
          url: "https://res.cloudinary.com/dqtyrjpeh/image/upload/v1725972819/shopCol3_hpumet.png",
          productName: "Lolito",
          description: "Luxury big sofa",
          price: "Rp 7.000.000",
          oldPrice: "Rp 14.000.000",
        },
        image4: {
          id: "4",
          discount: "",
          url: "https://res.cloudinary.com/dqtyrjpeh/image/upload/v1725972820/shopCol4_lwnl2u.png",
          productName: "Respira",
          description: "Outdoor bar table and stool",
          price: "Rp 500.000",
          oldPrice: "",
        },
        image5: {
          id: "5",
          discount: "",
          url: "https://res.cloudinary.com/dqtyrjpeh/image/upload/v1725972819/shopCol1_wh8sxu.png",
          productName: "Syltherine",
          description: "Stylish cafe chair",
          price: "Rp 2.500.000",
          oldPrice: "Rp 3.500.000",
        },
        image6: {
          id: "6",
          discount: "",
          url: "https://res.cloudinary.com/dqtyrjpeh/image/upload/v1725972820/shopCol2_gx0xw3.png",
          productName: "Leviosa",
          description: "Stylish cafe chair",
          price: "Rp 2.500.000",
          oldPrice: "",
        },
        image7: {
          id: "7",
          discount: "",
          url: "https://res.cloudinary.com/dqtyrjpeh/image/upload/v1725972819/shopCol3_hpumet.png",
          productName: "Lolito",
          description: "Luxury big sofa",
          price: "Rp 7.000.000",
          oldPrice: "Rp 14.000.000",
        },
        image8: {
          id: "8",
          discount: "",
          url: "https://res.cloudinary.com/dqtyrjpeh/image/upload/v1725972820/shopCol4_lwnl2u.png",
          productName: "Respira",
          description: "Outdoor bar table and stool",
          price: "Rp 500.000",
          oldPrice: "",
        },
        image9: {
          id: "9",
          discount: "",
          url: "https://res.cloudinary.com/dqtyrjpeh/image/upload/v1725972819/shopCol1_wh8sxu.png",
          productName: "Syltherine",
          description: "Stylish cafe chair",
          price: "Rp 2.500.000",
          oldPrice: "Rp 3.500.000",
        },
        image10: {
          id: "10",
          discount: "",
          url: "https://res.cloudinary.com/dqtyrjpeh/image/upload/v1725972820/shopCol2_gx0xw3.png",
          productName: "Leviosa",
          description: "Stylish cafe chair",
          price: "Rp 2.500.000",
          oldPrice: "",
        },
        image11: {
          id: "11",
          discount: "",
          url: "https://res.cloudinary.com/dqtyrjpeh/image/upload/v1725972819/shopCol3_hpumet.png",
          productName: "Lolito",
          description: "Luxury big sofa",
          price: "Rp 7.000.000",
          oldPrice: "Rp 14.000.000",
        },
        image12: {
          id: "12",
          discount: "",
          url: "https://res.cloudinary.com/dqtyrjpeh/image/upload/v1725972820/shopCol4_lwnl2u.png",
          productName: "Respira",
          description: "Outdoor bar table and stool",
          price: "Rp 500.000",
          oldPrice: "",
        },
        image13: {
          id: "13",
          discount: "",
          url: "https://res.cloudinary.com/dqtyrjpeh/image/upload/v1725972819/shopCol1_wh8sxu.png",
          productName: "Syltherine",
          description: "Stylish cafe chair",
          price: "Rp 2.500.000",
          oldPrice: "Rp 3.500.000",
        },
        image14: {
          id: "14",
          discount: "",
          url: "https://res.cloudinary.com/dqtyrjpeh/image/upload/v1725972820/shopCol2_gx0xw3.png",
          productName: "Leviosa",
          description: "Stylish cafe chair",
          price: "Rp 2.500.000",
          oldPrice: "",
        },
        image15: {
          id: "15",
          discount: "",
          url: "https://res.cloudinary.com/dqtyrjpeh/image/upload/v1725972819/shopCol3_hpumet.png",
          productName: "Lolito",
          description: "Luxury big sofa",
          price: "Rp 7.000.000",
          oldPrice: "Rp 14.000.000",
        },
        image16: {
          id: "16",
          discount: "",
          url: "https://res.cloudinary.com/dqtyrjpeh/image/upload/v1725972820/shopCol4_lwnl2u.png",
          productName: "Respira",
          description: "Outdoor bar table and stool",
          price: "Rp 500.000",
          oldPrice: "",
        },
      },
    };

    // Convert the `images` object into an array of products
    const productArray = Object.keys(jsonData.images)
      .filter(key => key.startsWith("image")) // Only take keys starting with "image"
      .map(key => ({
        ...jsonData.images[key], // Get each product's details
        cloudName: jsonData.images.cloudName, // Add cloudName to each product
      }));

    setProducts(productArray);
  }, []);

  return (
    <div>
      <ProductComponent products={products} />
    </div>
  );
};

export default Shop;
