// import React, { useContext, useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import { ProductContext } from '../context/ProductContext';

// const SearchResults = () => {
//   const { products } = useContext(ProductContext);
//   const location = useLocation();
//   const query = new URLSearchParams(location.search).get('q');
//   const [filteredProducts, setFilteredProducts] = useState([]);

//   useEffect(() => {
//     if (query) {
//       const results = products.filter((product) =>
//         product.title.toLowerCase().includes(query.toLowerCase())
//       );
//       setFilteredProducts(results);
//     }
//   }, [query, products]);

//   return (
//     <div className="container mx-auto py-6">
//       <h2 className="text-2xl font-semibold mb-4">
//         Search Results for "{query}"
//       </h2>
//       {filteredProducts.length > 0 ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           {filteredProducts.map((product) => (
//             <div key={product.id} className="border rounded-lg p-4 shadow-md">
//               <img
//                 src={product.image}
//                 alt={product.title}
//                 className="h-48 w-full object-cover mb-2"
//               />
//               <h3 className="text-lg font-semibold">{product.title}</h3>
//               <p>${product.price}</p>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p>No products found.</p>
//       )}
//     </div>
//   );
// };

// export default SearchResults;

import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';
import Product from '../components/Product';

export default function SearchResults() {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('q') || '';

  const { products, setSearchQuery } = useContext(ProductContext);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setSearchQuery(query);
    if (query.trim() !== '') {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
      navigate('/search', { replace: true });
    }
  }, [query, products, setSearchQuery, navigate]);

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        {query.trim() === '' ? (
          <div className="text-center">
            <h1 className="text-3xl font-light text-gray-600 mb-4">What are you looking for?</h1>
            <p className="text-fuchsia-700">Enter a search term to find products.</p>
          </div>
        ) : (
          <>
            <h1 className="text-3xl font-light text-gray-600 mb-8 text-center">
              Search Results for "{query}"
            </h1>
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
                {filteredProducts.map((product) => (
                  <Product product={product} key={product.id} />
                ))}
              </div>
            ) : (
              <div className="text-center">
                <h2 className="text-2xl font-light text-gray-600 mb-4">No products found.</h2>
                <p className="text-fuchsia-700">Try adjusting your search or browse our categories.</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}