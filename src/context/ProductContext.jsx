// import React, { createContext, useState, useEffect } from 'react';

// // Create the ProductContext
// export const ProductContext = createContext();

// const ProductProvider = ({ children }) => {
//   const [products, setProducts] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');

//   useEffect(() => {
//     console.log('useEffect triggered'); // To ensure useEffect is running

//     const fetchProducts = async () => {
//       try {
//         const response = await fetch('https://fakestoreapi.com/products');
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         console.log('Fetched data:', data); // Debugging fetched data
//         setProducts(data); // Set the fetched data to the state
//       } catch (error) {
//         console.error('Error fetching products:', error); // Log any errors
//       }
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <ProductContext.Provider value={{ products, searchQuery, setSearchQuery }}>
//       {children}
//     </ProductContext.Provider>
//   );
// }

// export default ProductProvider;

// import React, { createContext } from "react";
// import { useQuery } from '@tanstack/react-query';
// import axios from "axios";
// import { IoHourglassOutline } from "react-icons/io5";

// export const ProductContext = createContext();

// const fetchProducts = async () => {
//   const response = await axios.get('https://fakestoreapi.com/products');
//   return response.data;
// };

// export const ProductProvider = ({ children }) => {
//   const { data: products = [], isPending, error } = useQuery({
//     queryKey: ['products'],
//     queryFn: fetchProducts
//   });

//   if (isPending) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-white scale-2">
//           <IoHourglassOutline className="mr-3 text-fuchsia-700 animate-[rotate_4s_ease-in-out_infinite] w-[100px] h-[100px]" />
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-screen bg- text-fuchsia-700">
//         <p className="font-light capitalize"> NO INTERNET CONNECTION {error.message}.</p>
//         <div className="px-10 sm:px-0">
//           <p>Try:</p>
//           <ul className="list-disc ml-10">
//             {/* <li>Turning off Aeroplane Mode.</li>
//             <li>Reloading the page.</li>
//             <li>Ensure that you are properly connected to a Mobile Data or Wi-Fi.</li>
//             <li>Check the signal in your area.</li> */}
//           </ul>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <ProductContext.Provider value={{ products }}>
//       {children}
//     </ProductContext.Provider>
//   );
// };

// export default ProductProvider;

import React, { createContext, useState } from "react";
import { useQuery } from '@tanstack/react-query';
import axios from "axios";
import loaderGif from '../img/loader.gif';

// Create the ProductContext
export const ProductContext = createContext();

// Fetch products function
const fetchProducts = async () => {
  const response = await axios.get('https://fakestoreapi.com/products');
  return response.data;
};

export const ProductProvider = ({ children }) => {
  // State for search query
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch products using React Query
  const { data: products = [], isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts
  });

  // Filter products based on the search query
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white scale-2">
       <img src={loaderGif} alt="Loading..." className="w-24 h-24" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col text-sm sm:text-base items-center justify-center min-h-screen font-light text-fuchsia-700">
        <p className="capitalize">NO INTERNET CONNECTION</p>
        <div className="px-10 sm:px-0">
    
          <ul className="list-disc mx-auto">
          {error.message}
            <li className="text-sm sm-text:base">Contact your ISP</li>
            <li className="text-sm sm-text:base">Reload this page</li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <ProductContext.Provider value={{ products: filteredProducts, searchQuery, setSearchQuery }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
