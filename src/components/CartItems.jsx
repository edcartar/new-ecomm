// import React, { useContext } from 'react'
// import { Link } from 'react-router-dom';

// import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io'

// import {CartContext} from '../context/CartContext'

// const CartItems = ({ item }) => {
//   const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext);

//   const {id, title, image, price, amount } = item;
//   return (
//     <div className='flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500'>
//       <div className='w-full min-h[150px] flex items-center gap-x-4'>
//           <Link to={`/product/${id}`}>
//           <img className='max-w-[80px]' src={image} alt='' />
//           </Link>
//           <div className='w-full flex flex-col'>
//             <div className='flex justify-between mb-2'>
//               <Link to={`/product/${id}`} className='text-xs sm:text-sm uppercase font-light max-w-[240px] text-primary'>{title}</Link>

//               <div onClick={() => removeFromCart(id)} className='mb-4 text-xl cursor-pointer'>
//                 <IoMdClose className='text-gray-500 hover:text-orange-500 transition' />
//               </div>
//             </div>
//             <div className='flex gap-x-2 h-[36px] text-xs sm:text-sm'>
//               <div className='flex flex-1 max-w-[100px] justify-center items-center text-primary font-medium'>
//                 <div onClick={() => decreaseAmount(id)} className='flex-1 px-0 py-0 rounded-md bg-teal-100 flex justify-center items-center cursor-pointer h-full'>
//                   <IoMdRemove />
//                 </div>

//                 <div className='h-full flex justify-center items-center px-2'>{amount}</div>

//                 <div onClick={() => increaseAmount(id)} className='flex-1 px-0. py-0 rounded-md bg-cyan-100 h-full flex justify-center items-center cursor-pointer'>
//                   <IoMdAdd />
//                 </div>
//               </div>


//               {/* <div className='flex-1 flex items-center justify-around'> ₦ {(price * 1600).toLocaleString()}</div> */}

//               <div className='flex-1 flex justify-end items-center text-primary font-medium'>{`₦ ${(price * 1600 * amount).toFixed(1).toLocaleString()}`}
//               </div>
//             </div>
//           </div>
//       </div>
//     </div>
//   )
// }

// export default CartItems

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { CartContext } from "../context/CartContext";

const CartItems = ({ item }) => {
  const { removeFromCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);
  const { id, title, image, price, amount } = item;

  return (
    <div className="flex py-1 lg:px-6 border-b mb-0.5 shadow-sm border-fuchsia-200 w-full font-light text-gray-500">
      <div className="w-full min-h-[75px] flex items-center gap-x-4">
        <Link to={`/product/${id}`}>
          <img className="max-w-[80px]" src={image} alt="" />
        </Link>
        <div className="w-full flex flex-col">
          <div className="flex justify-between mb-2">
            <Link
              to={`/product/${id}`}
              className="text-xs sm:text-sm uppercase font-light max-w-[240px] text-gray-700"
            >
              {title}
            </Link>

            <div
              onClick={() => removeFromCart(id)}
              className="mb-4 text-sm sm:text-base cursor-pointer"
            >
              <IoMdClose className="text-gray-500 hover:text-rose-500 transition" />
            </div>
          </div>
          <div className="flex gap-x-2 min-h-[36px] text-xs sm:text-sm">
            <div className="flex flex-1 max-w-[100px] justify-center items-center text-gray-600 font-light">
              {/* <div
                onClick={amount > 1 ? () => decreaseAmount(id) : null}
                className={`flex-1 rounded-md h-6 flex justify-center items-center cursor-pointer ${amount === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-teal-100'}`}
              >
                <IoMdRemove />
              </div>

              <div className='h-full flex justify-center items-center px-2'>{amount}</div>

              <div onClick={() => increaseAmount(id)} className='flex-1 rounded-md h-6 flex justify-center items-center cursor-pointer bg-cyan-100'>
  
                <IoMdAdd />
              </div> */}

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => amount > 1 && decreaseAmount(id)}
                  className={`w-6 h-6 rounded-md flex justify-center items-center ${
                    amount === 1
                      ? "bg-gray-300 cursor-not-allowed"
                      : "bg-fuchsia-600 hover:bg-fuchsia-700 cursor-pointer"
                  }`}
                  disabled={amount === 1}
                  aria-label="Decrease quantity"
                >
                  <IoMdRemove className="text-xs text-white sm:text-sm" />
                </button>

                <div className="w-1 text-xs sm:text-sm text-gray-700 text-center">
                  {amount}
                </div>

                <button
                  onClick={() => increaseAmount(id)}
                  className="w-6 h-6 rounded-md flex justify-center items-center bg-fuchsia-600 hover:bg-fuchsia-700 cursor-pointer"
                  aria-label="Increase quantity"
                >
                  <IoMdAdd className="text-xs text-white sm:text-sm" />
                </button>
              </div>
            </div>

            <div className="flex-1 flex justify-end items-center text-primary text-xs sm:text-sm font-normal">
              {`₦ ${(price * 1600 * amount).toFixed(1).toLocaleString()}`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
