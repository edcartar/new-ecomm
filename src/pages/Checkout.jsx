// import React, { useContext } from 'react';
// import { CartContext } from '../context/CartContext';

// const Checkout = () => {
//   const { cart, total } = useContext(CartContext);

//   return (
//     <section className='container mx-auto pt-24 flex flex-col items-center min-h-screen relative'>
//       <h2 className='text-3xl font-semibold mb-6'>Checkout</h2>
//       <div className='flex flex-col lg:flex-row'>
//         <div className='w-full lg:w-3/'>
//           <h3 className='text-xl font-semibold mb-4'>Order Summary</h3>
//           {cart.map(item => (
//             <div key={item.id} className='flex justify-between mb-4'>
//               <span>{item.title}</span>
//               <span className='text-orange-500 flex-shrink-0'>$ {item.price.toFixed(2)}</span>
//             </div>
//           ))}
//         </div>
//         <div className='w-full lg:w-2/4 justify-center items-center mx-auto flex flex-col lg:flex-row bottom-0'>
//           <div className='bg-gray-10 p-4 sticky top-20'>
//             <h3 className='text-xl font-semibold mb-4'>Payment Information</h3>
//             <div className='flex justify-between mb-4'>
//               <span className='font-semibold'>Total:</span>
//               <span>{`₦ ${(total * 1600).toFixed(1).toLocaleString()}`}</span>
//             </div>
//             <button className='w-full bg-purple-900 text-white py-2 font-medium'>
//               Place Order
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Checkout;


import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';

const Checkout = () => {
  const { cart, total, clearCart } = useContext(CartContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the order to your backend
    console.log('Order placed:', { ...formData, cart, total });
    clearCart();
    // Redirect to a thank you page or show a success message
  };

  return (
    <section className='container mx-auto font-light pt-24 flex flex-col items-center min-h-screen relative'>
      <h2 className='text-3xl font-semibold mb-6'></h2>
      <form onSubmit={handleSubmit} className='w-full max-w-4xl'>
        <div className='flex flex-col lg:flex-row'>
          <div className='w-full lg:w-1/2 pr-0 lg:pr-4'>
            <h3 className='text-xl font-normal mb-4'>Order Summary</h3>
            {cart.map(item => (
              <div key={item.id} className='flex justify-between mb-4'>
                <span>{item.title} (x{item.amount})</span>
                <span className='text-slate-500 flex-shrink-0'>₦ {(item.price * 1600 * item.amount).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className='w-full lg:w-1/2 pl-0 lg:pl-4'>
            <h3 className='text-xl font-normal mb-4'>Shipping Information</h3>
            <div className='mb-4'>
              <label htmlFor='name' className='block mb-2'>Full Name</label>
              <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleInputChange}
                required
                className='w-full p-2 border rounded'
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='email' className='block mb-2'>Email</label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleInputChange}
                required
                className='w-full p-2 border rounded'
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='address' className='block mb-2'>Shipping Address</label>
              <textarea
                id='address'
                name='address'
                value={formData.address}
                onChange={handleInputChange}
                required
                className='w-full p-2 border rounded'
              ></textarea>
            </div>
          </div>
        </div>
        <div className='mt-8 bg-gray-10 p-4 sticky bottom-0'>
          <div className='flex justify-between mb-4'>
            <span className='font-semibold'>Total:</span>
            <span>{`₦ ${(total * 1600).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</span>
          </div>
          <button type='submit' className='w-full bg-fuchsia-700 text-white py-2 font-primary hover:bg-fuchsia-800 rounded-md transition-colors'>
            Place Order
          </button>
        </div>
      </form>
    </section>
  );
};

export default Checkout;