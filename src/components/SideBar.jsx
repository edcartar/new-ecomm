// import React, { useContext } from 'react'

// import { Link } from 'react-router-dom';

// import { IoMdArrowBack } from 'react-icons/io';
// import {FiTrash2} from 'react-icons/fi';

// import CartItems from '../components/CartItems';

// import { SideBarContext } from '../context/SideBarContext';

// import { CartContext } from '../context/CartContext';

// const SideBar = () => {
//  const { isOpen, handleClose } = useContext(SideBarContext);
//  const { cart, clearCart, total, itemAmount } = useContext(CartContext)
//   return (
//     <div className={`${isOpen ? 'right-0' : '-right-full'} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
//       <div className='flex items-center justify-between py-6 border-b'>
//         <div className='uppercase text-sm font-semibold'>Cart ({itemAmount})</div>
//         <div onClick={handleClose} className='cursor-pointer w-8 h-8 flex justify-center items-center'>
//           <IoMdArrowBack className='text-2xl'/>
//         </div>
//       </div>
//       <div className='flex flex-col gap-y-2 h-[320px] lg:h-[640px] overflow-y-auto overflow-x-hidden border-b'>
//         {cart.map((item) => {
//         return <CartItems item={item} key={item.id} />;
//       })}
//       </div>
//       <div className='flex flex-col gap-y-3 py-4 mt-4'>
//         <div className='flex w-full justify-between items-center'>
//           <div className='uppercase font-semibold'>
//             <span className='mr-2'>Total:</span>$ {parseFloat(total).toFixed(2)}
//           </div>
//           <div onClick={clearCart} className='cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl'>
//             <FiTrash2 />
//           </div>
//         </div>
//         <Link to='/' className='bg-gray-200 flex p-4 justify-center items-center text-primary w-full font-medium'>View Cart</Link>
//         <Link to='/' className='bg-primary flex p-4 justify-center items-center text-white w-full font-medium'>CheckOut</Link>
//       </div>
//     </div>
//   )
// }

// export default SideBar 


// import React, { useContext, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { IoMdArrowBack } from 'react-icons/io';
// import { FiTrash2 } from 'react-icons/fi';
// import CartItems from '../components/CartItems';
// import { SideBarContext } from '../context/SideBarContext';
// import { CartContext } from '../context/CartContext';

// const SideBar = () => {
//   const { isOpen, handleClose } = useContext(SideBarContext);
//   const { cart, clearCart, total, itemAmount } = useContext(CartContext);

//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'auto';
//     }

//     // Cleanup function to reset the overflow style when the sidebar is closed
//     return () => {
//       document.body.style.overflow = 'auto';
//     };
//   }, [isOpen]);

//   return (
//     <div 
//       className={`${isOpen ? 'right-0' : '-right-full'} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
//     >
//       <div className="flex items-center justify-between py-6 border-b">
//         <div className="uppercase text-sm font-semibold">Cart ({itemAmount})</div>
//         <div onClick={handleClose} className="cursor-pointer w-8 h-8 flex justify-center items-center">
//           <IoMdArrowBack className="text-2xl" />
//         </div>
//       </div>

//       <div className="flex flex-col gap-y-2 h-[320px] lg:h-[320px] overflow-y-auto overflow-x-hidden border-b">
//         {cart.map((item) => (
//           <CartItems item={item} key={item.id} />
//         ))}
//       </div>

//       <div className="flex flex-col gap-y-3 py-4 mt-4">
//         <div className="flex w-full justify-between items-center">
//           <div className="uppercase font-semibold">
//             <span className="mr-2">Total:</span>$ {parseFloat(total).toFixed(2)}
//           </div>
//           <div
//             onClick={clearCart}
//             className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl"
//           >
//             <FiTrash2 />
//           </div>
//         </div>
//         <Link
//           to="/cart"
//           className="bg-gray-200 flex p-4 justify-center items-center text-primary w-full font-medium" onClick={handleClose}
//         >
//           View Cart
//         </Link>
//         <Link
//           to="/checkout"
//           className="bg-primary flex p-4 justify-center items-center text-white w-full font-medium" onClick={handleClose}
//         >
//           CheckOut
//         </Link>
//       </div>
//     </div>
//     // </div>
//   );
// };

// export default SideBar;


// import React, { useContext, useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import { IoMdArrowBack } from 'react-icons/io';
// import { FiTrash2 } from 'react-icons/fi';
// import CartItems from '../components/CartItems';
// import { SideBarContext } from '../context/SideBarContext';
// import { CartContext } from '../context/CartContext';

// const SideBar = () => {
//   const { isOpen, handleClose } = useContext(SideBarContext);
//   const { cart, clearCart, total, itemAmount } = useContext(CartContext);
//   const sidebarRef = useRef(null);
 
//   return (
//   //   <div
//   //   className={`fixed top-0 left-0 w-full h-full bg-[#0867430e] z-20 ${isOpen ? 'block' : 'hidden'}`}
//   //   onClick={handleClose}
//   // >
//   //   <div
//   //     ref={sidebarRef}
//   //     className={`${isOpen ? 'right-0' : '-right-full'} w-[100vw] md:w-[35vw] xl:max-w-[30vw] bg-white fixed top-0 h-full shadow-2xl transition-all duration-900 ease-in-out z-20 px-4 lg:px-[35px]`}
//   //     onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside the sidebar
//   //   >
//   //     <div className="flex items-center justify-between py-6 border-b">
//   //       <div className="uppercase text-sm font-semibold">Cart ({itemAmount})</div>
//   //       <div onClick={handleClose} className="cursor-pointer w-8 h-8 flex justify-center items-center">
//   //         <IoMdArrowBack className="text-2xl" />
//   //       </div>
//   //     </div> 
  
//   //     <div className="flex flex-col gap-y-2 h-[550px] lg:h-[430px] overflow-y-auto overflow-x-hidden border-b">
//   //       {cart.map((item) => (
//   //         <CartItems item={item} key={item.id} />
//   //       ))}
//   //     </div>
  
//   //     <div className="flex flex-col gap-y-3 py-2 mt-4 bottom-0 px-4">
//   //       <div className="flex w-full justify-between items-center">
//   //         <div className="uppercase font-semibold">
//   //           <span className="mr-2">Total:</span>{`₦ ${(total * 1600).toFixed(1).toLocaleString()}`}
//   //         </div>
//   //         <div
//   //           onClick={clearCart}
//   //           className="cursor-pointer py-4 bg-white text-orange-500 w-6 h-6 flex justify-center items-center text-xl"
//   //         >
//   //           <FiTrash2 />
//   //         </div>
//   //       </div>
//   //       <Link
//   //         to="/cart"
//   //         className="bg-cyan-100 flex p-2 justify-center rounded-md items-center text-teal-900 w-full font-medium"
//   //         onClick={handleClose}
//   //       >
//   //         CheckOut
//   //       </Link>
//   //       {/* <Link
//   //         to="/checkout"
//   //         className="bg-cyan-900 flex p-2 justify-center rounded-md items-center text-white w-full font-medium"
//   //         onClick={handleClose}
//   //       ><div className="flex flex-col gap-y-3 py-2 mt-4 bottom-0 px-4 flex w-full justify-between items-center uppercase font-semibold">
//   //         CheckOut
//   //       </Link> */}
//   //     </div>
//   //   </div>
//   // </div>

//   <div
//       className={`fixed inset-0 bg-black/20 z-50 ${isOpen ? 'block' : 'hidden'}`}
//       onClick={handleClose}
//     >
//       <div
//         ref={sidebarRef}
//         className={`${
//           isOpen ? 'translate-x-0' : 'translate-x-full'
//         } fixed right-0 top-0 h-full w-[90%] sm:w-[450px] bg-white shadow-2xl transition-transform duration-900 ease-in-out z-50 flex flex-col px-4`}
//         onClick={(e) => e.stopPropagation()}
//       >
//         <div className="flex items-center justify-between p-6 border-b">
//           <div className="text-sm sm:text-base font-semibold uppercase">Cart ({itemAmount})</div>
//           <button onClick={handleClose} className="p-2">
//             <IoMdArrowBack className="text-base sm:text-xl" />
//           </button>
//         </div>

//         <div className="flex-grow overflow-y-auto p-4">
//           {cart.map((item) => (
//             <CartItems item={item} key={item.id} />
//           ))}
//         </div>

//         <div className="border-t p-4">
//           <div className="flex justify-between items-center mb-4">
//             <div className="font-semibold uppercase text-xs sm:text-base">
//               <span className="mr-2">Total:</span>₦ {(total * 1600).toFixed(1).toLocaleString()}
//             </div>
//             <button
//               onClick={clearCart}
//               className="text-cyan-500 p-2"
//               aria-label="Clear cart"
//             >
//               <FiTrash2 className="text-base sm:text-xl" />
//             </button>
//           </div>
//           <Link
//             to="/cart"
//             className="bg-cyan-100 text-teal-900 w-full p-2 rounded-md font-medium text-center block text-sm sm:text-base"
//             onClick={handleClose}
//           >
//             Checkout
//           </Link>
//         </div>
//       </div>
//     </div>

//   );
//  };

// export default SideBar;

import React, { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { RxCross2 } from 'react-icons/rx';
import { FaTrash } from 'react-icons/fa';
import { FaCartShopping } from "react-icons/fa6";
import CartItems from '../components/CartItems';
import { SideBarContext } from '../context/SideBarContext';
import { CartContext } from '../context/CartContext';

const SideBar = () => {
  const { isOpen, handleClose } = useContext(SideBarContext);
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);
  const sidebarRef = useRef(null);

  return (
    <div
      className={`fixed inset-0 bg-black/20 z-50 ${isOpen ? 'block' : 'hidden'}`}
      onClick={handleClose}
    >
      <div
        ref={sidebarRef}
        className={`${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } fixed right-0 top-0 h-full w-[90%] sm:w-[450px] bg-white shadow-2xl 
        transition-transform duration-300 ease-in-out z-50 flex flex-col`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-6 border-b border-fuchsia-200 shadow-md">
          <div className="text-base sm:text-base font-light uppercase">Cart ({itemAmount})</div>
          <button onClick={handleClose} className="p-2">
            <RxCross2 className="text-lg sm:text-xl" />
          </button>
        </div>

       <div className="flex-grow flex flex-col items-center overflow-y-auto p-2">
          {cart.length === 0 ? (
      <div className="flex-grow flex flex-col items-center justify-center py-8">
      <div className="border border-fuchsia-300 shadow-lg rounded-lg p-6 flex flex-col 
      items-center justify-center">
        <div className="w-20 h-20 rounded-full bg-fuchsia-100 flex items-center justify-center mb-4">
          <FaCartShopping size={40} className="text-fuchsia-500" />
        </div>
        <h3 className="text-base sm:text-lg font-light mb-2">Your cart is empty.</h3>
        <p className="text-gray-500 text-xs sm:text-sm font-light text-center">
          You have not added any item to your cart.
        </p>
      </div>
    </div>
          ) : (
            cart.map((item) => (
              <CartItems item={item} key={item.id} />
            ))
          )}
        </div>

        <div className="border-t border-fuchsia-200 shadow-md p-4">
          <div className="flex justify-between items-center mb-4">
            <div className="font-light uppercase text-sm sm:text-base">
              <span className="mr-2">Total:</span>₦ {(total * 1600).toFixed(1).toLocaleString()}
            </div>
            <button
              onClick={clearCart}
              className="text-rose-500 p-2"
              aria-label="Clear cart"
            >
              <FaTrash className="text-sm sm:text-lg" />
            </button>
          </div>
          <Link
  to="/cart"
  className={`bg-fuchsia-600 text-white w-full p-2 rounded-md font-light text-center 
    block text-sm sm:text-base ${
    cart.length === 0
      ? 'bg-gray-300 text-gray-950 cursor-not-allowed'
      : 'bg-fuchsia-600 text-white hover:bg-fuchsia-700'
  } transition-colors duration-200`}
  onClick={cart.length === 0 ? (e) => e.preventDefault() : handleClose}
>
  Checkout
</Link>

        </div>
      </div>
    </div>
  );
};

export default SideBar;
