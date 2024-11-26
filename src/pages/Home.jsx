

import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../context/ProductContext';
import { Link } from 'react-router-dom';
import Product from '../components/Product';
import Hero from '../components/Hero';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Home = () => {
  const { products, searchQuery } = useContext(ProductContext);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [featuredProduct, setFeaturedProduct] = useState(null);

  useEffect(() => {
    let result = [...products];

    if (searchQuery) {
      result = result.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    } else {
      result = result.filter((item) =>
        item.category === "men's clothing" || item.category === "women's clothing"
      );
    }

    setFilteredProducts(result);

    // Set a random featured product
    if (result.length > 0) {
      setFeaturedProduct(result[Math.floor(Math.random() * result.length)]);
    }
  }, [products, searchQuery]);

  return (
    <div>
      <Hero />
      
      {!searchQuery && featuredProduct && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-normal text-gray-800 mb-8 text-center">Featured Product</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <motion.img 
                src={featuredProduct.image} 
                alt={featuredProduct.title} 
                className="w-64 h-64 object-cover rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              />
              <div className="md:w-1/2">
                <h3 className="text-2xl font-normal mb-4">{featuredProduct.title}</h3>
                {/* <p className="text-gray-600 mb-4">{featuredProduct.description}</p> */}
                <Link 
                  to={`/product/${featuredProduct.id}`}
                  className="inline-block bg-fuchsia-700 text-white px-6 py-2 rounded-md hover:bg-rose-800 transition duration-300"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light text-gray-800 mb-8 text-center">
            {searchQuery ? 'Search Results' : 'Best Sellers'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Product product={product} />
                </motion.div>
              ))
            ) : (
              <h1 className='col-span-full text-3xl text-center font-bold uppercase text-gray-500'>No products found.</h1>
            )}
          </div>
        </div>
      </section>

      {!searchQuery && (
        <section className="py-8 bg-stone-5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-normal text-gray-800 mb-6">Ready to Explore?</h2>
            <Link 
              to="/shop" 
              className="inline-flex items-center font-light gap-2 bg-fuchsia-700 h-10 text-white px-8 py-2 rounded-md text-xl hover:bg-fuchsia-800 transition duration-300"
            >
              Start Shopping 
              <FaArrowRight className='text-sm'/>
            </Link>
          </div>
        </section>
      )}

{/* <section className="py-12 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-xl sm:text-3xl font-light text-gray-600 mb-8 text-center">What Our Customers Say</h2>
          <div className="flex flex-col md:flex-row md:justify-around space-y-4 md:space-y-0">
            <blockquote className="p-4 rounded bg-white shadow">
              <p className="italic">"Great products and amazing service!"</p>
              <footer className="mt-2 text-sm text-gray-500">- Sarah L.</footer>
            </blockquote>
            <blockquote className="p-4 rounded bg-white shadow">
              <p className="italic">"Fast shipping and quality items. Highly recommend!"</p>
              <footer className="mt-2 text-sm text-gray-500">- John D.</footer>
            </blockquote>
            <blockquote className="p-4 rounded bg-white shadow">
              <p className="italic">"Always satisfied with my purchases."</p>
              <footer className="mt-2 text-sm text-gray-500">- Emily R.</footer>
            </blockquote>
          </div>
        </div>
      </section>       */}

      <section className="py-8 bg-slate-50 text-center">
  <div className="container mx-auto min-w-2xl flex flex-col items-center space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4">
    <div className="sm:w-1/2 text-left">
      <h2 className="text-xl sm:text-3xl font-light text-gray-800 mb-2 sm:mb-4">Stay Updated!</h2>
      <p className="text-gray-600 mb-4 sm:mb-0">Sign up for our newsletter to receive the latest news and exclusive offers.</p>
    </div>
    <div className="sm:w-1/2 relative flex items-center">
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full px-4 py-2.5 border rounded-full mb- sm:mb-0 sm:w-full pr-24"
      />
      <button className="absolute right-1.5 top-1/2 transform -translate-y-1/2 bg-fuchsia-700 hover:bg-fuchsia-800 text-white font-medium text-base rounded-full px-4 py-1.5">
        Subscribe
      </button>
    </div>
  </div>
</section>



      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Quality Products', description: 'We offer only the finest, hand-picked items for our customers.' },
              { title: 'Fast Shipping', description: 'Get your orders delivered quickly and efficiently.' },
              { title: 'Customer Satisfaction', description: "Our top priority is ensuring you're happy with you're purchase." },
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="text-center p-6 bg-white rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

