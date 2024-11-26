// import React, { useContext, useEffect, useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { SideBarContext } from '../context/SideBarContext';
// import { CartContext } from '../context/CartContext';
// import { FiSearch  } from 'react-icons/fi';
// import { FaCartShopping } from "react-icons/fa6";
// import Logo from '../img/logo.svg';
// import { ProductContext } from '../context/ProductContext'; // Import the ProductContext

// const Header = () => {
//   const [isActive, setIsActive] = useState(false);
//   const { isOpen, setIsOpen } = useContext(SideBarContext);
//   const { itemAmount } = useContext(CartContext);
//   const { setSearchQuery } = useContext(ProductContext); // Get setSearchQuery from context

//   const [localSearch, setLocalSearch] = useState(''); // Local search state
//   const navigate = useNavigate(); // To navigate to search page

//   useEffect(() => {
//     const handleScroll = () => {
//       window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   // Debounce search query
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setSearchQuery(localSearch);
//     }, 500); // Adjust the debounce timing as needed

//     return () => clearTimeout(timer);
//   }, [localSearch, setSearchQuery]);

//   const handleSearchChange = (e) => {
//     setLocalSearch(e.target.value); // Update local search query
//   };

//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     navigate(`/search?q=${encodeURIComponent(localSearch)}`); // Navigate to search page with query
//   };

//   return (
//     <header className={`${isActive ? 'bg-rose-200 py-3 fixed top-0 left-0 w-full z-10 shadow-md' : 'bg-fuchsia-100 py-3'} fixed w-full z-10 transition-all`}>
//   <div className='container mx-auto flex items-center justify-between h-full'>
//     {/* Logo */}
//     <Link to={'/'}>
//       <div>
//         <p className='text-xs sm:text-3xl font-light text-white hidden md:block'>IMELDA'S</p>
//       </div>
//     </Link>

//     <div className='flex-grow flex justify-center space-x-6 md:flex'>
//       <Link to={'/'} className='md
//      relative text-xl text-blue-900 group hover:text-orange-500 transition-colors'>HOME

//       </Link>

//       <Link to={'/shop'} className='relative text-xl text-blue-900 group hover:text-orange-500 transition-colors'>SHOP

//       </Link>

//       <Link to={'/login'} className='relative text-xl text-blue-900 group hover:text-orange-500 transition-colors'>PROFILE

//       </Link>
//     </div>

// {/* <AiOutlineUser className='hover:text-orange-500 transition-colors duration-300' /> */}

//     <div className='flex items-center space-x-2'>
//     <form onSubmit={handleSearchSubmit} className="relative w-full max-w-md mx-auto">
//       <div className="relative flex items-center">
//         <input
//           type="search"
//           placeholder="Search Products"
//           value={localSearch}
//           onChange={handleSearchChange}
//           className="w-full max-w-xs py-1.5 px-3 pr-10 text-sm text-gray-700 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-fuchsia-600 focus:border-transparent transition-all duration-300 ease-in-out leading-normal"
//         />
//         <button
//           type="submit"
//           className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-fuchsia-600 transition-colors duration-300"
//           aria-label="Search"
//         >
//           <FiSearch className="w-3.5 h-3.5" />
//         </button>
//       </div>
//     </form>

//       <div onClick={() => setIsOpen(!isOpen)} className='relative cursor-pointer flex group'>
//         <FaCartShopping  className='text-base sm:text-xl text-fuchsia-900 hover:text-rose-500 transition-colors duration-300' />
//         <div className='bg-fuchsia-500 absolute -right-2 -bottom-1 text-[12px] w-[15px] h-[15px] text-white rounded-full flex justify-center items-center'>
//           {itemAmount}
//         </div>
//       </div>
//     </div>
//   </div>
// </header>

//   );
// };

// export default Header;

import React, { useContext, useEffect, useState, useRef } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { SideBarContext } from "../context/SideBarContext";
import { CartContext } from "../context/CartContext";
import { FiSearch } from "react-icons/fi";
import { FaCartShopping } from "react-icons/fa6";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { ProductContext } from "../context/ProductContext";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SideBarContext);
  const { itemAmount } = useContext(CartContext);
  const { setSearchQuery } = useContext(ProductContext);
  const [localSearch, setLocalSearch] = useState("");
  const navigate = useNavigate();
  const [nav, setNav] = useState(false);
  const location = useLocation();

  const NavRef = useRef(null);

  const navItems = [
    { id: 1, text: "HOME", path: "/" },
    { id: 2, text: "SHOP", path: "/shop" },
    { id: 3, text: "ACCOUNT", path: "/login" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchQuery(localSearch);
    }, 500);

    return () => clearTimeout(timer);
  }, [localSearch, setSearchQuery]);

  const handleSearchChange = (e) => {
    setLocalSearch(e.target.value);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (nav && navRef.current && !navRef.current.contains(event.target)) {
        setNav(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [nav]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${encodeURIComponent(localSearch)}`);
  };

  const handleNav = () => {
    setNav(!nav);
  };

  const handleClose = () => {
    setNav(false);
  };

  return (
    <header
      className={`${
        isActive ? "bg-rose-200 py-3" : "bg-fuchsia-200 py-3"
      } fixed w-full z-10 transition-all`}
    >
      <div className="container mx-auto px-4 space-x-2 flex items-center justify-between">
        <div onClick={handleNav} className="block md:hidden">
          {nav ? (
            <AiOutlineClose size={20} className="text-fuchsia-900" />
          ) : (
            <AiOutlineMenu size={20} className="text-fuchsia-900" />
          )}
        </div>
        <Link
          to={"/"}
          className="text-lg sm:text-2xl font-primary text-rose-900"
        >
          IMELDA'S
        </Link>

        <div className="flex items-center space-x-1 sm:space-x-3">
          <nav className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className={`text-fuchsia-900 hover:text-rose-500 transition-colors duration-300 ${
                  location.pathname === item.path
                    ? "font-semibold border-b-2 border-rose-500"
                    : ""
                }`}
              >
                {item.text}
              </Link>
            ))}
          </nav>

          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              type="search"
              placeholder="Search Products"
              value={localSearch}
              onChange={handleSearchChange}
              className="w-full max-w-xs py-1.5 pl-4 pr-8 text-sm text-gray-700 border bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-fuchsia-700 focus:bg-white transition-all duration-300 focus:border-transparent ease-in-out leading-normal border-gray-300"
            />
            <button
              type="submit"
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-fuchsia-600 transition-colors duration-300"
              aria-label="Search"
            >
              <FiSearch className="w-3.5 h-3.5" />
            </button>
          </form>

          <div
            onClick={() => setIsOpen(!isOpen)}
            className="relative cursor-pointer"
          >
            <FaCartShopping className="text-lg sm:text-xl text-fuchsia-900 hover:text-rose-500 transition-colors duration-300" />
            <div className="bg-fuchsia-500 absolute -right-2 -top-2 text-[12px] w-[15px] h-[15px] text-white rounded-full flex justify-center items-center text-xs">
              {itemAmount}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`${
          nav ? "md:hidden fixed left-0 top-0 w-full h-full bg-black/70" : ""
        }`}
        onClick={handleClose}
      >
        <div ref={NavRef}
          className={
            nav
              ? "fixed left-0 top-0 w-[85%] sm:w-[60%] md:w-[45%] h-full bg-white p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 h-full p-10 ease-in duration-700"
          }
          onClick={(e) => e.stopPropagation()} // This prevents closing the sidebar when clicking inside it
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link to="/" className="text-lg font-primary text-fuchsia-900">
                IMELDA'S
              </Link>
              <div onClick={handleNav} className="p-3 cursor-pointer">
                <AiOutlineClose className="text-fuchsia-900" />
              </div>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className={`py-4 px-2 text-sm font-light text-rose-900 border rounded-md mb-0.5 border-rose-950 hover:text-rose-950 transition-colors duration-300 ${
                  location.pathname === item.path
                    ? "font-semibold bg-fuchsia-50 text-fuchsia-900"
                    : ""
                }`}
                onClick={() => setNav(false)}
              >
                {item.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

// import React, { useContext, useEffect, useState, useRef } from "react";
// import { useNavigate, Link, useLocation } from "react-router-dom";
// import { SideBarContext } from "../context/SideBarContext";
// import { CartContext } from "../context/CartContext";
// import { FiSearch } from "react-icons/fi";
// import { FaCartShopping } from "react-icons/fa6";
// import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
// import { ProductContext } from "../context/ProductContext";
// import { AuthContext } from "../context/AuthContext";
// import AccountInfo from "./AccountInfo";

// const Header = () => {
//   const [isActive, setIsActive] = useState(false);
//   const { isOpen, setIsOpen } = useContext(SideBarContext);
//   const { itemAmount } = useContext(CartContext);
//   const { setSearchQuery } = useContext(ProductContext);
//   const { isAuthenticated } = useContext(AuthContext);
//   const [localSearch, setLocalSearch] = useState("");
//   const navigate = useNavigate();
//   const [nav, setNav] = useState(false);
//   const location = useLocation();

//   const NavRef = useRef(null);

//   const navItems = [
//     { id: 1, text: "HOME", path: "/" },
//     { id: 2, text: "SHOP", path: "/shop" },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setSearchQuery(localSearch);
//     }, 500);

//     return () => clearTimeout(timer);
//   }, [localSearch, setSearchQuery]);

//   const handleSearchChange = (e) => {
//     setLocalSearch(e.target.value);
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (nav && NavRef.current && !NavRef.current.contains(event.target)) {
//         setNav(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [nav]);

//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     navigate(`/search?q=${encodeURIComponent(localSearch)}`);
//   };

//   const handleNav = () => {
//     setNav(!nav);
//   };

//   const handleClose = () => {
//     setNav(false);
//   };

//   return (
//     <header
//       className={`${
//         isActive ? "bg-rose-200 py-3" : "bg-fuchsia-200 py-3"
//       } fixed w-full z-10 transition-all`}
//     >
//       <div className="container mx-auto px-4 space-x-2 flex items-center justify-between">
//         <div onClick={handleNav} className="block md:hidden">
//           {nav ? (
//             <AiOutlineClose size={20} className="text-fuchsia-900" />
//           ) : (
//             <AiOutlineMenu size={20} className="text-fuchsia-900" />
//           )}
//         </div>
//         <Link
//           to={"/"}
//           className="text-lg sm:text-2xl font-primary text-rose-900"
//         >
//           IMELDA'S
//         </Link>

//         <div className="flex items-center space-x-1 sm:space-x-3">
//           <nav className="hidden md:flex items-center space-x-4">
//             {navItems.map((item) => (
//               <Link
//                 key={item.id}
//                 to={item.path}
//                 className={`text-fuchsia-900 hover:text-rose-500 transition-colors duration-300 ${
//                   location.pathname === item.path
//                     ? "font-semibold border-b-2 border-rose-500"
//                     : ""
//                 }`}
//               >
//                 {item.text}
//               </Link>
//             ))}
//             {isAuthenticated ? (
//               <AccountInfo />
//             ) : (
//               <Link
//                 to="/login"
//                 className="text-fuchsia-900 hover:text-rose-500 transition-colors duration-300"
//               >
//                 LOGIN
//               </Link>
//             )}
//           </nav>

//           <form onSubmit={handleSearchSubmit} className="relative">
//             <input
//               type="search"
//               placeholder="Search Products"
//               value={localSearch}
//               onChange={handleSearchChange}
//               className="w-full max-w-xs py-1.5 pl-4 pr-8 text-sm text-gray-700 border bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-fuchsia-700 focus:bg-white transition-all duration-300 focus:border-transparent ease-in-out leading-normal border-gray-300"
//             />
//             <button
//               type="submit"
//               className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-fuchsia-600 transition-colors duration-300"
//               aria-label="Search"
//             >
//               <FiSearch className="w-3.5 h-3.5" />
//             </button>
//           </form>

//           <div
//             onClick={() => setIsOpen(!isOpen)}
//             className="relative cursor-pointer"
//           >
//             <FaCartShopping className="text-lg sm:text-xl text-fuchsia-900 hover:text-rose-500 transition-colors duration-300" />
//             <div className="bg-fuchsia-500 absolute -right-2 -top-2 text-[12px] w-[15px] h-[15px] text-white rounded-full flex justify-center items-center text-xs">
//               {itemAmount}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navigation Menu */}
//       <div
//         className={`${
//           nav ? "md:hidden fixed left-0 top-0 w-full h-full bg-black/70" : ""
//         }`}
//         onClick={handleClose}
//       >
//         <div ref={NavRef}
//           className={
//             nav
//               ? "fixed left-0 top-0 w-[85%] sm:w-[60%] md:w-[45%] h-full bg-white p-10 ease-in duration-500"
//               : "fixed left-[-100%] top-0 h-full p-10 ease-in duration-700"
//           }
//           onClick={(e) => e.stopPropagation()} // This prevents closing the sidebar when clicking inside it
//         >
//           <div>
//             <div className="flex w-full items-center justify-between">
//               <Link to="/" className="text-lg font-primary text-fuchsia-900">
//                 IMELDA'S
//               </Link>
//               <div onClick={handleNav} className="p-3 cursor-pointer">
//                 <AiOutlineClose className="text-fuchsia-900" />
//               </div>
//             </div>
//           </div>
//           <div className="py-4 flex flex-col">
//             {navItems.map((item) => (
//               <Link
//                 key={item.id}
//                 to={item.path}
//                 className={`py-4 px-2 text-sm font-light text-rose-900 border rounded-md mb-0.5 border-rose-950 hover:text-rose-950 transition-colors duration-300 ${
//                   location.pathname === item.path
//                     ? "font-semibold bg-fuchsia-50 text-fuchsia-900"
//                     : ""
//                 }`}
//                 onClick={() => setNav(false)}
//               >
//                 {item.text}
//               </Link>
//             ))}
//             {isAuthenticated ? (
//               <AccountInfo />
//             ) : (
//               <Link
//                 to="/login"
//                 className="py-4 px-2 text-sm font-light text-rose-900 border rounded-md mb-0.5 border-rose-950 hover:text-rose-950 transition-colors duration-300"
//                 onClick={() => setNav(false)}
//               >
//                 LOGIN
//               </Link>
//             )}
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;