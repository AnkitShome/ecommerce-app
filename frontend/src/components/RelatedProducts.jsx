import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const RelatedProducts = ({ category, subCategory }) => {
   const { products } = useContext(ShopContext);
   const [related, setRelated] = useState([]);
   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

   const handleResize = () => {
      setWindowWidth(window.innerWidth);
   };

   useEffect(() => {
      if (products.length > 0) {
         const productsCopy = products.filter(
            (item) => item.category === category && item.subCategory === subCategory
         );
         const numberToShow = windowWidth < 640 ? 4 : 5;
         setRelated(productsCopy.slice(0, numberToShow));
      }
   }, [products, category, subCategory, windowWidth]);

   useEffect(() => {
      window.addEventListener('resize', handleResize);
      return () => {
         window.removeEventListener('resize', handleResize);
      };
   }, []);

   return (
      <div className='my-24'>
         <div className='text-center text-3xl py-2'>
            <Title text1={'RELATED'} text2={'PRODUCTS'} />
         </div>
         <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {related.map((item, index) => (
               <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image} />
            ))}
         </div>
      </div>
   );
};

export default RelatedProducts;
