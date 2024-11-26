import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    console.log('Subscribing email:', email);
    setEmail('');
  };

  return (
    <footer className="bg-rose-300 text-white py-4 px-6 flex flex-wrap items-center justify-between">
      <div className="flex items-center space-x-2">
        <div className="flex items-center space-x-2">
          <FaEnvelope className="text-pink-500" />
          <div>
            <p className="text-sm font-semibold">EMAIL SUPPORT</p>
            <p className="text-xs">help@konga.com</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <FaPhone className="text-pink-500" />
          <div>
            <p className="text-sm font-semibold">PHONE SUPPORT</p>
            <p className="text-xs">07080635700, 02018883435</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <FaWhatsapp className="text-pink-500" />
          <div>
            <p className="text-sm font-semibold">WHATSAPP</p>
            <p className="text-xs">0907 0038 400, 0809 460 5555</p>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-4 mt-4 lg:mt-0">
        <div>
          <p className="text-sm font-semibold">GET LATEST DEALS</p>
          <p className="text-xs">Our best promotions sent to your inbox.</p>
        </div>
        <form onSubmit={handleSubmit} className="flex">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 text-gray-800 rounded-l-md focus:outline-none"
            required
          />
          <button
            type="submit"
            className="bg-pink-500 text-white px-4 py-2 rounded-r-md hover:bg-pink-600 transition duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </footer>
  );
};

export default Contact;