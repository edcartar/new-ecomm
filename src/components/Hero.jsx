// import React from 'react'

// import WomanImg from '../img/woman_hero.png';
// // import WomanImg from '../img/young_couple.png';

// import { Link } from 'react-router-dom';

// const Hero = () => {
//   return (
//     <section className='h-[800px] bg-her bg-no-repeat bg-cover bg-center bg-blue-10 py-24'>
//       <div className='container mx-auto flex justify-around h-full'>
//         <div className='flex flex-col justify-center'>
//           {/* <div className='font-semibold flex items-center uppercase mb-10 '>
//             <div className='w-10 h-[2px] bg-orange-900 mr-3'>New Trend</div>
//           </div>
//           <h1 className='text-[70px] leading-[1.1] font-light mb-4'>
//             CLEARANCE SALES <br />
//             <span className='font-semibold'>EVERYTHING</span>
//           </h1> */}
//           <Link to={'/'} className='self-start uppercase font-semibold border-b-2 border-primary'>
//             Discover More
//           </Link>
//         </div>
//         <div className='hidden lg:block'>
//           <img src={WomanImg} alt='' />
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Hero


// import React from 'react';
// import HeroSlider from './HeroSlider'; // Adjust path if necessary


// const Hero = () => {
//   return (
//     <section className='h-[800px] bg-her bg-no-repeat bg-cover bg-center py-24'>
//       <div className='container mx-auto'>
//         <HeroSlider />
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React from 'react';
import HeroSlider from './HeroSlider'; // Adjust path if necessary

const Hero = () => {
  return (
    <section className='relative h-[700px] w-full overflow-hidden'>
      <div className='absolute inset-0'>
        <HeroSlider />
      </div>
      
    </section>
  );
};

export default Hero;
