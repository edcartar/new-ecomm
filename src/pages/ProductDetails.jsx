// import React, { useContext, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { CartContext } from '../context/CartContext';
// import { ProductContext } from '../context/ProductContext';

// const ProductDetails = () => {
//   const { id } = useParams();
//   const { products } = useContext(ProductContext);
//   const { addToCart } = useContext(CartContext);

//   useEffect(() => {
//     // Scroll to the top when the component is mounted
//     window.scrollTo(0, 0);
//   }, []);

//   const product = products.find((item) => {
//     return item.id === parseInt(id);
//   });

//   if (!product) {
//     return (
//       <section className='h-screen flex justify-center items-center font-bold'>
//         Loading...
//       </section>
//     );
//   }

//   const { title, price, description, image } = product;

//   const cartItem = cart.find(item => item.id === id);

//   return (

//   <section className='pt-32 pb-12 min-h-screen'>
//       <div className='container mx-auto'>
//         <div className='flex flex-col lg:flex-row items-center border border-fuchsia-200 rounded-md shadow-lg overflow-hidden'>
//           {/* Image Section */}
//           <div className='w-full lg:w-2/5 flex justify-center items-center p-6 bg-white'>
//             <img className='max-w-[250px] lg:max-w-full lg:h-[400px] object-contain rounded-md' src={image} alt={title} />
//           </div>

//           <div className='hidden lg:block w-px bg-fuchsia-200 self-stretch mx-8'></div>

//           {/* Product Info Section */}
//           <div className='w-full lg:w-3/5 text-center items-center lg:text-left p-6 bg-gray-5'>
//             <h1 className='text-2xl font-light mb-4'>{title}</h1>
//             <div className='text-gray-600 text-sm sm:text-base font-medium mb-4'>$ {price}</div>
//             <p className='text-gray-700 font-light text-sm sm:text-base mb-6'>{description}</p>

//             <div className='flex justify-center lg:justify-start space-x-4'>
//               {/* Add to Cart Button */}
//               <button
//                 onClick={() => addToCart(product, product.id)}
//                 className='bg-fuchsia-700 font-light text-sm sm:text-base text-white py-2 px-6 rounded-md hover:bg-fuchsia-700 transition'>
//                 Add to Cart
//               </button>
//             </div>
//             <div className='absolute rounded-lg bottom-0 left-1/2 transform -translate-x-1/2 w-full group-hover:bottom-5 p-2 flex flex-col items-center justify-end gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300'>
//                       {cartItem ? (
//                         <div className='absolute -bottom-2 flex justify-between items-center text-sm font-light text-black w-[calc(100%-2rem)] h-10'>
//                           <button onClick={() => decreaseAmount(product.id)} className='px-2 py-2 rounded-md bg-fuchsia-600 text-black'>
//                             <IoMdRemove />
//                           </button>
//                           <span className='text-sm font-light'>{cartItem.amount}</span>
//                           <button onClick={() => increaseAmount(product.id)} className='px-2 py-2 rounded-md bg-fuchsia-600 text-black'>
//                             <IoMdAdd />
//                           </button>
//                         </div>
//                       ) : (
//                         <button
//                           onClick={() => addToCart(product, product.id)}
//                           className='absolute -bottom-1 flex justify-center text-xs font-light rounded-md items-center text-white w-[calc(100%-2rem)] h-8 bg-fuchsia-700'
//                         >
//                           ADD TO CART
//                         </button>
//           )}
//         </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductDetails;

import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IoMdAdd, IoMdRemove } from 'react-icons/io';
import { CartContext } from '../context/CartContext';
import { ProductContext } from '../context/ProductContext';

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart, cart, increaseAmount, decreaseAmount } = useContext(CartContext);

  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return (
      <section className='h-screen flex justify-center items-center font-bold'>
        Loading...
      </section>
    );
  }

  const { title, price, description, image } = product;

  // Check if the product is already in the cart
  const cartItem = cart.find(item => item.id === product.id);

  return (
    <section className='pt-32 pb-12 min-h-screen'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row items-center border border-fuchsia-200 rounded-md shadow-lg overflow-hidden'>
          {/* Image Section */}
          <div className='w-full lg:w-2/5 flex justify-center items-center p-6 bg-white'>
            <img className='max-w-[250px] lg:max-w-full lg:h-[400px] object-contain rounded-md' src={image} alt={title} />
          </div>

          <div className='w-[0.5px] bg-fuchsia-200 self-stretch mx-2 sm:mx-4 md:mx-6 lg:mx-8'></div>
          

          {/* Product Info Section */}
          <div className='w-full lg:w-3/5 text-center lg:text-left p-6 bg-gray-5'>
            <h1 className='text-2xl font-light mb-4'>{title}</h1>
            <div className='text-gray-600 text-sm sm:text-base font-medium mb-4'> ₦ {(product.price * 1600).toLocaleString()}</div>
            <p className='text-gray-700 font-light text-sm sm:text-base mb-6'>{description}</p>

            <div className='flex justify-center lg:justify-start space-x-4'>
              {/* Add to Cart Button */}
              {cartItem ? (
                <div className='flex items-center'>
                  <button onClick={() => decreaseAmount(product.id)} className='px-2 py-2 rounded-md bg-fuchsia-600 text-white hover:bg-fuchsia-700'>
                    <IoMdRemove />
                  </button>
                  <span className='text-sm font-light mx-4'>{cartItem.amount}</span>
                  <button onClick={() => increaseAmount(product.id)} className='px-2 py-2 rounded-md bg-fuchsia-600 text-white hover:bg-fuchsia-700'>
                    <IoMdAdd />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => addToCart(product, product.id)}
                  className='bg-fuchsia-700 font-light text-sm sm:text-base text-white py-1.5 px-6 rounded-md hover:bg-fuchsia-800 transition'>
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
