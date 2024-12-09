import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import the images from the src/img folder
import img1 from '../../public/assets/man-woman.jpg';
import img2 from '../../public/assets/jewel1.jpg';
import img3 from '../../public/assets/electronics.jpg';

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} z-`}
      style={{ ...style, display: "block", right: "20px" }}
      onClick={onClick}
    >
      {/* <ChevronRight className="w-8 h-8 text-white" /> */}
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} z-`}
      style={{ ...style, display: "block", left: "20px" }}
      onClick={onClick}
    >
      {/* <ChevronLeft className="w-8 h-8 text-white" /> */}
    </div>
  );
};

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: dots => (
      <div style={{ position: "absolute", bottom: "10px", width: "100%" }}>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div className="w-2 h-2 mx-1 bg-white rounded-full opacity-50 hover:opacity-100 transition-opacity duration-200"></div>
    )
  };

  const slides = [
    {
      bgImage: img1,
      head1: "Men & Women's",
      head2: 'Cloth',
      head3: 'Collection',
      category: 'New trending clothes',
    },
    {
      bgImage: img2,
      head1: 'Jewelery',
      head2: "Sale's",
      head3: '50% Off',
      category: 'Big jewelery sale',
    },
    {
      bgImage: img3,
      head1: 'New',
      head2: 'Arrival',
      head3: 'up to 30% off',
      category: "Electronic's",
    },
  ];

  return (
    <div className="w-full h-full relative">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative h-[800px]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.bgImage})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-10"></div>
              <div className="container mx-auto h-full flex items-center justify-center">
                <div className="text-center text-white z-10">
                  <h1 className="text-4xl md:text-6xl font-primary mb-2">{slide.head1}</h1>
                  <h2 className="text-3xl md:text-5xl font-extralight mb-2">{slide.head2}</h2>
                  <h2 className="text-3xl md:text-5xl font-extralight mb-4">{slide.head3}</h2>
                  <p className="text-xl mb-6">{slide.category}</p>
                  {/* <a
                    href="#"
                    className="bg-white text-black py-2 px-6 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300"
                  >
                    Shop Collection
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlider;



// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// // Import the images from the src/img folder
// import img1 from '../img/man-woman.jpg';
// import img2 from '../img/jewel1.jpg';
// import img3 from '../img/electronics.jpg';

// const HeroSlider = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     arrows: true
//   };

//   const slides = [
//     {
//       bgImage: img1,
//       head1: "Men's",
//       head2: 'Shoes',
//       head3: 'Collection',
//       category: 'New trending shoes',
//     },
//     {
//       bgImage: img2,
//       head1: 'Huge',
//       head2: 'Sale',
//       head3: '50% Off',
//       category: 'Big sale sandals',
//     },
//     {
//       bgImage: img3,
//       head1: 'New',
//       head2: 'Arrival',
//       head3: 'up to 30% off',
//       category: 'New stylish shoes for men',
//     },
//   ];

//   return (
//     <div className="w-full h-full">
//       <Slider {...settings}>
//         {slides.map((slide, index) => (
//           <div key={index} className="relative h-[800px]">
//             <div
//               className="absolute inset-0 bg-cover bg-center"
//               style={{ backgroundImage: `url(${slide.bgImage})` }}
//             >
//               <div className="absolute inset-0 bg-black bg-opacity-15"></div>
//               <div className="container mx-auto h-full flex items-center justify-center">
//                 <div className="text-center text-white z-10">
//                   <h1 className="text-4xl md:text-6xl font-bold mb-2">{slide.head1}</h1>
//                   <h2 className="text-3xl md:text-5xl font-semibold mb-2">{slide.head2}</h2>
//                   <h2 className="text-3xl md:text-5xl font-semibold mb-4">{slide.head3}</h2>
//                   <p className="text-xl mb-6">{slide.category}</p>
//                   {/* Uncomment the following if you want to add the Shop Collection button */}
//                   {/* <a
//                     href="#"
//                     className="bg-white text-black py-2 px-6 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300"
//                   >
//                     Shop Collection
//                   </a> */}
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default HeroSlider;