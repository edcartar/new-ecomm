// import React, { useContext } from 'react';
// import { CartContext } from '../context/CartContext';
// import { FiTrash2 } from 'react-icons/fi';
// import CartItems from '../components/CartItems';
// import { FaCartShopping } from "react-icons/fa6";
// import { Link } from 'react-router-dom';

// const ViewCart = () => {
//   const { cart, total, clearCart } = useContext(CartContext);

//   return (
//     <section className='container mx-auto pt-32 flex flex-col items-center min-h-screen relative'>
//   {/* <h2 className='text-xl sm:text-3xl font-medium mb-6'>SHOPPING CART</h2> */}
//   <div className='flex flex-col lg:flex-row w-full lg:w-3/4'>
//     <div className='w-full lg:w-full flex flex-col items-center'>
//       {cart.length === 0 ? (
//         <div className="flex flex-col items-center border rounded-md border-fuchsia-200 shadow-2xl p-4 sm:p-6">

//         <div className="cursor-pointer py-8 bg-white text-fuchsia-600 w-24
//         h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 flex justify-center items-center
//         text-7xl sm:text-10xl border-4 border-fuchsia-500 rounded-full">
//           <FaCartShopping />
//         </div>

//         <p className='font-light text-gray-700 my-2 text-lg sm:text-xl'>Your cart is empty!</p>
//         <p className='font-light my-2 text-gray-700 text-sm sm:text-base'>
//           Browse our categories to discover our best deals!
//         </p>
//         <button
//           className='w-full bg-fuchsia-600 text-white py-2 block text-center font-light rounded-md text-xs sm:text-base my-4'
//           onClick={() => navigate('/shop')}
//         >
//           START SHOPPING
//         </button>

//       </div>

//       ) : (
//         cart.map(item => <CartItems key={item.id} item={item} />)
//       )}
//     </div>
//   </div>

//   {cart.length > 0 && (
//   <div className='w-full lg:w-3/4 justify-center '>
//           <div className='bg-white p-4'>
//             <h3 className='text-sm sm:text-xl font-light mb-4'>CART SUMMARY</h3>
//             <div className='flex justify-between mb-4'>
//               <span className='font-light text-sm sm:text-base uppercase'>SUBTOTAL:</span>
//               <span className='font-medium text-sm sm:text-base'>{`₦ ${(total * 1600).toFixed(1).toLocaleString()}`}</span>
//               <button
//             onClick={clearCart}
//             className="cursor-pointer py-4 bg-white text-rose-500 w-6 h-6 flex justify-center -mt-1 items-center text-sm sm:text-base"
//           >
//             <FiTrash2 />
//           </button>
//             </div>
//             {/* <button
//               onClick={clearCart}
//               className='w-full bg-gray-100 text-orange-500 py-2 mb-4 font-medium'
//             >
//               Clear Cart
//             </button> */}
//             <Link to='/checkout' className='w-full bg-fuchsia-600 text-white py-2 block text-center font-light rounded-md text-sm sm:text-base'>
//               CONFIRM ORDER
//             </Link>
//           </div>
//         </div>
//          )}
// </section>

//   );
// };

// export default ViewCart;

import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FaTrash } from "react-icons/fa";
import CartItems from "../components/CartItems";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ViewCart = () => {
  const { cart, total, clearCart } = useContext(CartContext);

  return (
    <section className="container mx-auto pt-16 pb-1 sm:pb-8 flex flex-col items-center min-h-screen relative">
      <div className="flex flex-col lg:flex-row w-full lg:w-4/4">
        {/* Cart Items Section */}
        <div
          className={`w-full ${
            cart.length === 0
              ? "lg:w-full flex items-center pt-24 justify-center min-h-[400px]"
              : "lg:w-3/5"
          } flex flex-col items-center`}
        >
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center border rounded-md border-fuchsia-300 shadow-2xl p-4 sm:p-6">
              <div
                className="cursor-pointer py-8 bg-white text-fuchsia-600 w-24 
          h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 flex justify-center items-center
          text-7xl sm:text-10xl border-4 border-fuchsia-500 rounded-full"
              >
                <FaCartShopping />
              </div>
              <p className="font-light text-gray-700 my-2 text-lg sm:text-xl">
                Your cart is empty!
              </p>
              <p className="font-light my-2 text-gray-700 text-sm sm:text-base">
                Browse our categories to discover our best deals!
              </p>
              <button
                className="w-full bg-fuchsia-600 hover:bg-fuchsia-700 text-white py-2 h-19 block text-center font-light rounded-md text-xs sm:text-base my-4"
                onClick={() => navigate("/shop")}
              >
                START SHOPPING
              </button>
            </div>
          ) : (
            cart.map((item) => <CartItems key={item.id} item={item} />)
          )}
        </div>

        {/* Cart Summary Section */}
        {cart.length > 0 && (
          <div className="w-full lg:w-2/5 lg:ml-8 mt-8 lg:mt-2">
            <div className="sticky top-24 bg-white p-4 border border-fuchsia-200 rounded-md shadow-lg max-w-md mx-auto flex flex-col justify-between">
              <div>
                <h3 className="text-sm sm:text-xl font-light mb-4">
                  CART SUMMARY
                </h3>

                {/* Subtotal */}
                <div className="flex justify-between items-center mb-4">
                  <span className="font-light text-sm sm:text-base uppercase">
                    SUBTOTAL:
                  </span>
                  <span className="font-normal text-sm sm:text-base">{`₦ ${(
                    total * 1600
                  )
                    .toFixed(1)
                    .toLocaleString()}`}</span>
                </div>

                {/* Percentage Discount */}
                <div className="flex justify-between items-center mb-4">
                  <span className="font-light text-sm sm:text-base uppercase">
                    DISCOUNT (1%):
                  </span>
                  <span className="font-normal text-sm sm:text-base">{`₦ ${(
                    total *
                    1600 *
                    0.001
                  )
                    .toFixed(1)
                    .toLocaleString()}`}</span>
                </div>

                {/* Shipping Cost */}
                <div className="flex justify-between items-center mb-4">
                  <span className="font-light text-sm sm:text-base uppercase">
                    SHIPPING COST:
                  </span>
                  <span className="font-normal text-sm sm:text-base">{`₦ ${5000}`}</span>
                </div>
              </div>

              {/* Total */}
              <div className="flex justify-between items-center mb-4">
                <span className="font-light text-sm sm:text-base uppercase">
                  TOTAL:
                </span>
                <span className="font-normal text-sm sm:text-base">
                  {`₦ ${(total * 1600 - total * 1600 * 0.001 + 5000)
                    .toFixed(1)
                    .toLocaleString()}`}
                </span>
              </div>

              {/* Clear Cart Button */}
              <button
                onClick={clearCart}
                className="cursor-pointer py-4 bg-white text-rose-500 w-6 h-6 flex justify-center items-center text-sm sm:text-base mb-4"
              >
                <FaTrash />
              </button>

              {/* Confirm Order Button */}
              <Link
                to="/checkout"
                className="w-full bg-fuchsia-600 text-white py-2 block text-center font-light rounded-md text-sm sm:text-base hover:bg-fuchsia-700"
              >
                CONFIRM ORDER
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ViewCart;
