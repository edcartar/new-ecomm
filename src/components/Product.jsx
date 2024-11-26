// import React, { useContext, useState } from "react";
// import { IoMdAdd, IoMdRemove } from "react-icons/io";
// import { Link } from "react-router-dom";
// import { CartContext } from "../context/CartContext";

// const Product = ({ product }) => {
//   const { addToCart, cart, increaseAmount, decreaseAmount } =
//     useContext(CartContext);
//   const { id, image, category, title, price } = product;
//   const [isHovered, setIsHovered] = useState(false);

//   // Check if the product is already in the cart
//   const cartItem = cart.find((item) => item.id === id);



//   return (
//     <div>
//       {/* Product Image and Link */}

//       <div className="border border-fuchsia-300 h-[300px] mb-4 rounded-md relative overflow-hidden group transition">
//         <Link
//           to={`/product/${product.id}`}
//           className="w-full h-full flex justify-center items-center"
//         >
//           <div className="w-[200px] mx-auto flex justify-center items-center">
//             <img
//               className="max-h-[160px] group-hover:scale-110 transition duration-300"
//               src={product.image}
//               alt={product.title}
//             />
//           </div>
//         </Link>

//         {/* Add to Cart / Quantity Buttons */}
//         <div className="absolute rounded-sm bottom-0 left-1/2 transform -translate-x-1/2 w-full group-hover:bottom-5 p-2 flex flex-col items-center justify-end gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
//           {cartItem ? (
//             <div className="absolute -bottom-1.5 flex justify-between items-center text-sm font-light text-black w-[calc(100%-2rem)] h-">
//               <button
//                 onClick={() => decreaseAmount(product.id)}
//                 className="px-2.5 py-2.5 rounded-md bg-fuchsia-700 text-white"
//               >
//                 <IoMdRemove />
//               </button>
//               <span className="text-sm font-light">{cartItem.amount}</span>
//               <button
//                 onClick={() => increaseAmount(product.id)}
//                 className="px-2.5 py-2.5 rounded-md bg-fuchsia-700 text-white"
//               >
//                 <IoMdAdd />
//               </button>

//               {/* <button 
//             onClick={() => decreaseAmount(product.id)}
//             onMouseEnter={() => handleMouseEnter('decrease')}
//             onMouseLeave={() => handleMouseLeave('decrease')}
//             className={`
//               px-2.5 py-2.5 rounded-md text-xs font-light
//               transition-all duration-300
//               ${hoverStates.decrease
//                 ? 'bg-fuchsia-700 text-white'
//                 : 'bg-white text-fuchsia-700 border border-fuchsia-700'}
//             `}
//             aria-label="Decrease quantity"
//           >
//             <IoMdRemove />
//           </button>
//           <span className='text-sm font-light'>{cartItem.amount}</span>
//           <button 
//             onClick={() => increaseAmount(product.id)}
//             onMouseEnter={() => handleMouseEnter('increase')}
//             onMouseLeave={() => handleMouseLeave('increase')}
//             className={`
//               px-2.5 py-2.5 rounded-md text-xs font-light
//               transition-all duration-300
//               ${hoverStates.increase
//                 ? 'bg-fuchsia-700 text-white'
//                 : 'bg-white text-fuchsia-700 border border-fuchsia-700'}
//             `}
//             aria-label="Increase quantity"
//           >
//             <IoMdAdd />
//           </button> */}
//             </div>
//           ) : (
//             <button
//               onClick={() => addToCart(product, product.id)}
//               className="absolute -bottom-1.5 flex justify-center text-xs font-light rounded-md items-center text-white w-[calc(100%-2rem)] h-9 bg-fuchsia-700"
//             >
//               ADD TO CART
//             </button>

//             //   <button
//             //   onClick={() => addToCart(product, product.id)}
//             //   onMouseEnter={() => setIsHovered(true)}
//             //   onMouseLeave={() => setIsHovered(false)}
//             //   className={`
//             //     absolute -bottom-1.5 left-1/2 transform -translate-x-1/2
//             //     w-[calc(100%-2rem)] h-9 rounded-md text-xs font-primary
//             //     flex justify-center items-center transition-all duration-300
//             //     ${isHovered
//             //       ? 'bg-fuchsia-700 text-white'
//             //       : 'bg-white text-fuchsia-700 border border-fuchsia-700'}
//             //   `}
//             // >
//             //   ADD TO CART
//             // </button>
//           )}
//         </div>
//       </div>

//       <div>
//         {/* <div className='text-xs capitalize font-ligh text-center text-gray-500 mb-1'>{category}</div> */}
//         <Link to={`/product/${product.id}`}>
//           <h2 className="font-light text-gray-900 text-center text-sm sm:text-base mb-1">
//             {product.title}
//           </h2>
//         </Link>
//         <div className="font-light text-slate-900 text-center text-xs sm:text-sm">
//           ₦ {(product.price * 1600).toLocaleString()}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Product;




import React, { useContext, useState } from "react";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { FcOk } from 'react-icons/fc';

const CartNotification = ({ message, isVisible, type }) => {
  if (!isVisible) return null;

  const bgColor = type === 'add' ? 'bg-fuchsia-700' : 'bg-rose-700';

  return (
    <div className="fixed top-0 left-0 right-0 bottom- flex items-center justify-center bg-black bg-opacity-5 z-20">
      <div className={`${bgColor} p-2 shadow rounded-md  relative mx-4 mb- slide-in`}>
        <div className="flex items-center gap-2">
          <p className="uppercase font-semibold">{message}</p>
          <FcOk />
        </div>
      </div>
    </div>
  );
};

const Product = ({ product }) => {
  const { addToCart, cart, increaseAmount, decreaseAmount } = useContext(CartContext);
  const { id, image, title, price } = product;
  const [isCartAdded, setIsCartAdded] = useState(false);
  const [isCartRemoved, setIsCartRemoved] = useState(false);

  const cartItem = cart.find((item) => item.id === id);

  const handlePopup = (type) => {
    if (type === 'add') {
      setIsCartAdded(true);
      setTimeout(() => setIsCartAdded(false), 3000);
    } else {
      setIsCartRemoved(true);
      setTimeout(() => setIsCartRemoved(false), 3000);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, id);
    handlePopup('add');
  };

  const handleRemoveFromCart = () => {
    decreaseAmount(id);
    if (cartItem.amount === 1) {
      handlePopup('remove');
    }
  };

  return (
    <div className="relative">
      <div className="border border-fuchsia-300 h-[300px] mb-4 rounded-md relative overflow-hidden group transition">
        <Link
          to={`/product/${id}`}
          className="w-full h-full flex justify-center items-center"
        >
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
              src={image}
              alt={title}
            />
          </div>
        </Link>

        <div className="absolute rounded-sm bottom-0 left-1/2 transform -translate-x-1/2 w-full group-hover:bottom-5 p-2 flex flex-col items-center justify-end gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          {cartItem ? (
            <div className="absolute -bottom-1.5 flex justify-between items-center text-sm font-light text-black w-[calc(100%-2rem)]">
              <button
                onClick={handleRemoveFromCart}
                className="px-2.5 py-2.5 rounded-md bg-fuchsia-700 text-white"
              >
                <IoMdRemove />
              </button>
              <span className="text-sm font-light">{cartItem.amount}</span>
              <button
                onClick={() => increaseAmount(id)}
                className="px-2.5 py-2.5 rounded-md bg-fuchsia-700 text-white"
              >
                <IoMdAdd />
              </button>
            </div>
          ) : (
            <button
              onClick={handleAddToCart}
              className="absolute -bottom-1.5 flex justify-center text-xs font-light rounded-md items-center text-white w-[calc(100%-2rem)] h-9 bg-fuchsia-700"
            >
              ADD TO CART
            </button>
          )}
        </div>
      </div>

      <div>
        <Link to={`/product/${id}`}>
          <h2 className="font-light text-gray-900 text-center text-sm sm:text-base mb-1">
            {title}
          </h2>
        </Link>
        <div className="font-normal text-slate-900 text-center text-xs sm:text-sm">
          ₦ {(price * 1600).toLocaleString()}
        </div>
      </div>

      <CartNotification 
        message="Item added to cart!"
        isVisible={isCartAdded}
        type="add"
      />
      <CartNotification 
        message="Item removed from cart!"
        isVisible={isCartRemoved}
        type="remove"
      />
    </div>
  );
};

export default Product;