import React, { useContext, useState, useEffect } from 'react';
import { ProductContext } from '../context/ProductContext';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { IoMdAdd, IoMdRemove } from 'react-icons/io';
import SideMenu from '../components/SideMenu';

const Shop = () => {
  const { products, searchQuery } = useContext(ProductContext);
  const { addToCart, cart, increaseAmount, decreaseAmount } = useContext(CartContext);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    let filtered = products;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product =>
        product.category.toLowerCase() === selectedCategory
      );
    }

    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [products, selectedCategory, searchQuery]);

  return (
    <main className="w-full mt-16 mb-24 border border-fuchsia-200 rounded-md flex">
      <SideMenu selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

      <div className="w-3/4 mx-auto pl-1 sm:pl- pt-4 text-center">
        <h1 className="text-xl sm:text-2xl font-light text-gray-950 mb-4">
          {selectedCategory !== 'all' ? selectedCategory.replace(/^\w/, (c) => c.toUpperCase()) : 'All Products'}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px]">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => {
              const cartItem = cart.find((item) => item.id === product.id);

              return (
                <div key={product.id}>
                  <div className='border border-fuchsia-200 h-[300px] mb-4 rounded-md relative overflow-hidden group transition'>
                    <Link to={`/product/${product.id}`} className='w-full h-full flex justify-center items-center'>
                      <div className='w-[200px] mx-auto flex justify-center items-center'>
                        <img className='max-h-[160px] group-hover:scale-110 transition duration-300' src={product.image} alt={product.title} />
                      </div>
                    </Link>

                    <div className='absolute rounded-lg bottom-0 left-1/2 transform -translate-x-1/2 w-full group-hover:bottom-5 p-2 flex flex-col items-center justify-end gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300'>
                      {cartItem ? (
                        <div className='absolute -bottom-1 flex justify-between items-center text-sm font-light text-black w-[calc(100%-2rem)] h-'>
                          <button onClick={() => decreaseAmount(product.id)} className='px-2.5 py-2.5 rounded-md bg-fuchsia-700 text-white'>
                            <IoMdRemove />
                          </button>
                          <span className='text-sm font-light'>{cartItem.amount}</span>
                          <button onClick={() => increaseAmount(product.id)} className='px-2.5 py-2.5 rounded-md bg-fuchsia-700 text-white'>
                            <IoMdAdd />
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => addToCart(product, product.id)}
                          className='absolute -bottom-1.5 flex justify-center text-xs font-light rounded-md items-center text-white w-[calc(100%-2rem)] h-9 bg-fuchsia-700'
                        >
                          ADD TO CART
                        </button>
                      )}
                    </div>
                  </div>

                  <div>
                    <Link to={`/product/${product.id}`}>
                      <h2 className='font-light text-gray-950 text-center text-sm sm:text-base mb-1'>{product.title}</h2>
                    </Link>
                    <div className='font-light text-slate-800 text-center text-xs mb- sm:text-sm'>
                      ₦ {(product.price * 1600).toLocaleString()}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className='justify-center items-center'>
            <p className='text-xs sm:text-base font-semibold mb-4'>No products found.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Shop;



// import React, { useContext, useState, useEffect, useCallback } from 'react';
// import { ProductContext } from '../context/ProductContext';
// import { CartContext } from '../context/CartContext';
// import { Link } from 'react-router-dom';
// import { IoMdAdd, IoMdRemove } from 'react-icons/io';
// import SideMenu from '../components/SideMenu';

// const ProductCard = React.memo(({ product, cartItem, addToCart, increaseAmount, decreaseAmount }) => {
//   const [isAdding, setIsAdding] = useState(false);

//   useEffect(() => {
//     if (isAdding) {
//       const timer = setTimeout(() => {
//         addToCart(product, product.id);
//         setIsAdding(false);
//       }, 400);
//       return () => clearTimeout(timer);
//     }
//   }, [isAdding, addToCart, product]);

//   return (
//     <div className='border border-rose-100 h-[300px] mb-4 rounded-lg relative overflow-hidden group transition'>
//       <Link to={`/product/${product.id}`} className='w-full h-full flex justify-center items-center'>
//         <div className='w-[200px] mx-auto flex justify-center items-center'>
//           <img className='max-h-[160px] group-hover:scale-110 transition duration-300' src={product.image} alt={product.title} />
//         </div>
//       </Link>

//       <div className='absolute rounded-lg bottom-0 left-1/2 transform -translate-x-1/2 w-full group-hover:bottom-5 p-2 flex flex-col items-center justify-end gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300'>
//         {cartItem || isAdding ? (
//           <div className={`absolute -bottom-2 flex justify-between items-center text-sm font-medium text-primary w-[calc(100%-2rem)] h-10 transition-opacity duration-300 ${isAdding ? 'opacity-0' : 'opacity-100'}`}>
//             <button onClick={() => decreaseAmount(product.id)} className='px-2 py-2 rounded-md bg-fuchsia-600 text-white'>
//               <IoMdRemove />
//             </button>
//             <span className='text-xs sm:text-sm font-medium'>{cartItem ? cartItem.amount : 1}</span>
//             <button onClick={() => increaseAmount(product.id)} className='px-2 py-2 rounded-md bg-fuchsia-600 text-white'>
//               <IoMdAdd />
//             </button>
//           </div>
//         ) : (
//           <button
//             onClick={() => setIsAdding(true)}
//             className={`absolute -bottom-1 flex justify-center text-xs font-light rounded-md items-center text-white w-[calc(100%-2rem)] h-8 bg-fuchsia-700 transition-all duration-300 hover:bg-fuchsia-800 ${isAdding ? 'opacity-0' : 'opacity-100'}`}
//           >
//             ADD TO CART
//           </button>
//         )}
//       </div>

//       <div>
//         <Link to={`/product/${product.id}`}>
//           <h2 className='font-medium text-center text-xs sm:text-sm mb-1'>{product.title}</h2>
//         </Link>
//         <div className='font-medium text-center text-xs sm:text-sm text-cyan-500'>
//           ₦ {(product.price * 1600).toLocaleString()}
//         </div>
//       </div>
//     </div>
//   );
// });

// const Shop = () => {
//   const { products, searchQuery } = useContext(ProductContext);
//   const { addToCart, cart, increaseAmount, decreaseAmount } = useContext(CartContext);
//   const [selectedCategory, setSelectedCategory] = useState('all');
//   const [filteredProducts, setFilteredProducts] = useState(products);

//   useEffect(() => {
//     let filtered = products;

//     if (selectedCategory !== 'all') {
//       filtered = filtered.filter(product =>
//         product.category.toLowerCase() === selectedCategory.toLowerCase()
//       );
//     }

//     if (searchQuery) {
//       filtered = filtered.filter(product =>
//         product.title.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }

//     setFilteredProducts(filtered);
//   }, [products, selectedCategory, searchQuery]);

//   const memoizedAddToCart = useCallback(addToCart, [addToCart]);
//   const memoizedIncreaseAmount = useCallback(increaseAmount, [increaseAmount]);
//   const memoizedDecreaseAmount = useCallback(decreaseAmount, [decreaseAmount]);

//   return (
//     <main className="w-full mt-16 mb-24 border flex">
//       <SideMenu selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

//       <div className="w-3/4 pl-1 sm:pl-4 pt-4 text-center">
//         <h1 className="text-base sm:text-2xl font-semibold mb-4">
//           {selectedCategory !== 'all' ? selectedCategory.replace(/^\w/, (c) => c.toUpperCase()) : 'All Products'}
//         </h1>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px]">
//           {filteredProducts.length > 0 ? (
//             filteredProducts.map((product) => {
//               const cartItem = cart.find((item) => item.id === product.id);
//               return (
//                 <ProductCard
//                   key={product.id}
//                   product={product}
//                   cartItem={cartItem}
//                   addToCart={memoizedAddToCart}
//                   increaseAmount={memoizedIncreaseAmount}
//                   decreaseAmount={memoizedDecreaseAmount}
//                 />
//               );
//             })
//           ) : (
//             <div className='col-span-full flex justify-center items-center'>
//               <p className='text-xs sm:text-base font-semibold mb-4'>No products found.</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Shop;