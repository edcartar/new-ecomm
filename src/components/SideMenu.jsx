// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const SideMenu = () => {
//   const [selectedCategory, setSelectedCategory] = useState('all');
//   const navigate = useNavigate();

//   const handleCategoryClick = (category, path) => {
//     setSelectedCategory(category);
//     navigate(path);
//   };

//   return (
//     <div className='w-1/4 p-4 sticky top-20 self-start'>
//       <h2 className='text-xl font-semibold mb-4'>Categories</h2>
//       <section className=''>
//         <button 
//           onClick={() => handleCategoryClick('all', '/products')} 
//           className={`mb-4 w-full py-4 block text-center font-medium ${
//             selectedCategory === 'all' ? 'bg-purple-900 text-purple-100' : 'bg-purple-100 text-purple-900'
//           } hover:text-orange-500`}>
//           All Products
//         </button>
//         <button 
//           onClick={() => handleCategoryClick("men's clothing", '/products/mens-clothing')} 
//           className={`mb-4 w-full py-4 block text-center font-medium ${
//             selectedCategory === "men's clothing" ? 'bg-purple-900 text-purple-100' : 'bg-purple-100 text-purple-900'
//           } hover:text-orange-500`}>
//           Men's Clothing
//         </button>
//         <button 
//           onClick={() => handleCategoryClick("women's clothing", '/products/womens-clothing')} 
//           className={`mb-4 w-full py-4 block text-center font-medium ${
//             selectedCategory === "women's clothing" ? 'bg-purple-900 text-purple-100' : 'bg-purple-100 text-purple-900'
//           } hover:text-orange-500`}>
//           Women's Clothing
//         </button>
//         <button 
//           onClick={() => handleCategoryClick('jewelery', '/products/jewelry')} 
//           className={`mb-4 w-full py-4 block text-center font-medium ${
//             selectedCategory === 'jewelery' ? 'bg-purple-900 text-purple-100' : 'bg-purple-100 text-purple-900'
//           } hover:text-orange-500`}>
//           Jewelry
//         </button>
//         <button 
//           onClick={() => handleCategoryClick('electronics', '/products/electronics')} 
//           className={`mb-4 w-full py-4 block text-center font-medium ${
//             selectedCategory === 'electronics' ? 'bg-purple-900 text-purple-100' : 'bg-purple-100 text-purple-900'
//           } hover:text-orange-500`}>
//           Electronics
//         </button>
//       </section>
//     </div>
//   );
// };

// export default SideMenu;

// import React from 'react';

// const SideMenu = ({ selectedCategory, setSelectedCategory }) => {
//   const categories = ['all', "men's clothing", "women's clothing", 'jewelery', 'electronics'];

//   return (
//     <div className='w-1/4 p-4 sticky top-20 self-start'>
//       <h2 className='text-xl font-semibold mb-4 uppercase'>Categories</h2>
//       <section>
//         {categories.map((category) => (
//           <button
//             key={category}
//             onClick={() => setSelectedCategory(category)}
//             className={`mb-4 w-full py-4 block text-center font-medium ${
//               selectedCategory === category ? 'bg-purple-900 text-purple-100' : 'bg-purple-100 text-purple-900'
//             } hover:text-orange-500`}
//           >
//             {category.replace(/^\w/, (c) => c.toUpperCase())}
//           </button>
//         ))}
//       </section>
//     </div>
//   );
// };

// export default SideMenu;

// import React from 'react';

// const SideMenu = ({ selectedCategory, setSelectedCategory }) => {
//   const categories = ['all', "men's clothing", "women's clothing", 'jewelery', 'electronics'];

//   return (
//     <div className='w-[30%] lg:w-[20%] px-2 py-16 top-20 self-start border- bg-background'>
//       <h2 className='text-base sm:text-2xl text-center font-medium mb-4'>Categories</h2>
//       <section>
//         {categories.map((category) => (
//           <button
//             key={category}
//             onClick={() => setSelectedCategory(category)}
//             className={`mb-1 text-xs sm:text-base border rounded-md w-full lg:w-full py-2 lg:py-2 block text-center font-medium
//               ${selectedCategory === category ? 'bg-teal-900 text-white' : 'bg-teal-100 text-primary'} 
//               hover:text-`}
//           >
//             {category.replace(/^\w/, (c) => c.toUpperCase())}
//           </button>
//         ))}
//       </section>
//     </div>
//   );
// };

// export default SideMenu;

import React from 'react';

const SideMenu = ({ selectedCategory, setSelectedCategory }) => {
  const categories = ['all', "men's clothing", "women's clothing", 'jewelery', 'electronics'];

  return (
    <div className='w-[28%] lg:w-[23%] border-r border-l border-fuchsia-200 bg-white shadow-sm'>
      <div className='top-0 px-1 sm:px-4 flex-grow'>
        <h2 className='text-base sm:text-2xl py-2 sm:py-4 text-center font-semibold text-gray-800'></h2>
        <nav className=''>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`mb-0.5 text-sm sm:text-base w-full py-1 sm:py-1 px-2 sm:px-4 rounded-md font-light
                 border lg:w-full lg:py-2 block text-center transition-all duration-200 ease-in-out
                ${
                  selectedCategory === category
                    ? 'bg-fuchsia-700 text-white shadow-md'
                    : 'bg-white text-gray-700 border border-fuchsia-300 hover:bg-rose-50'
                } 
                focus:outline-none focus:ring-1 focus:ring-rose-500 focus:ring-opacity-50`}
            >
              {category.replace(/^\w/, (c) => c.toUpperCase())}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default SideMenu;

