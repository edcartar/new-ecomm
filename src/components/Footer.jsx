import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faTwitter as fabTwitter, faFacebook as fabFacebook, faLinkedin as fabLinkedin, faDribbble as fabDribbble } from '@fortawesome/free-brands-svg-icons';
import { faTwitter, faFacebook, faLinkedin, faDribbble } from '@fortawesome/free-brands-svg-icons'; // Brand icons



const Footer = () => {
  return (
    <footer className="bg-fuchsia-50 py-10">
      <div className="container text-gray-500 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* About Footwear */}
          <div className="footer-col">
            <h4 className="text-base sm:text-lg font-light mb-4">About IMELDA</h4>
            <p className="text-xs font-light sm:text-sm mb-4">A reasonable shopping experience
              </p>
            <div className="flex space-x-2">
              <a href="#" className="text-gray-600 hover:text-blue-400">
                <FontAwesomeIcon icon={fabTwitter} />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-800">
                <FontAwesomeIcon icon={fabFacebook} />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-500">
                <FontAwesomeIcon icon={fabLinkedin} />
              </a>
              <a href="#" className="text-gray-600 hover:text-fuchsia-500">
                <FontAwesomeIcon icon={fabDribbble} />
              </a>
            </div>
          </div>

          {/* Customer Care */}
          <div className="footer-col">
            <h4 className="text-base sm:text-lg font-light mb-4">Customer Care</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><a href="#" className="font-light hover:text-gray-900">Contact</a></li>
            </ul>
          </div>

          {/* Information */}
          <div className="footer-col">
            <h4 className="text-base sm:text-lg font-light mb-4">Information</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><a href="#" className="font-light hover:text-gray-900">About us</a></li>
              <li><a href="#" className="font-light hover:text-gray-900">Order Tracking</a></li>
            </ul>
          </div>

          {/* News */}
          <div className="footer-col">
            <h4 className="text-base sm:text-lg font-light mb-4">News</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
            <li><a href="#" className="font-light hover:text-gray-900">Blog</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="footer-col">
            <h4 className="text-base sm:text-lg font-light mb-4">Contact Information</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li className='font-light'>My street</li>
              <li><a href="tel://1234567920" className=" font-light hover:text-gray-900">0800 000 0000</a></li>
              <li><a href="mailto:@mysite.com" className=" font-light hover:text-gray-900">Info@yoursite.com</a></li>
              <li><a href="#" className=" font-light hover:gray-700">Mysite.com</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Copy */}
        <div className="text-center mt-10">
          <p className="text-xs font-thin sm:text-sm">
            &copy; {new Date().getFullYear()} All rights reserved 
            <FontAwesomeIcon icon={faHeart} className="text-fuchsia-900" /> 
            <a href="" target="_blank" rel="noopener noreferrer" className=" hover:text-rose-500">EDIKAN</a>
          </p>
          <p className="text-xs mt-2">
           
          </p>
        </div>
      </div>

      {/* Go to top button */}
      <div className="fixed bottom-4 right-4">
        <a href="#" className="bg-gray-700 text-white p-2 font-extralight rounded-full hover:bg-gray-900">
          <FontAwesomeIcon icon={faArrowUp} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
