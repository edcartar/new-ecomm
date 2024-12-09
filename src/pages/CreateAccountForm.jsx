// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import * as z from 'zod';
// import { useNavigate } from 'react-router-dom';
// import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"

// // Zod schema for form validation
// const createAccountSchema = z.object({
//   firstName: z.string().min(1, 'First name is required'),
//   lastName: z.string().min(1, 'Last name is required'),
//   email: z.string().email('Invalid email address'),
//   phoneNumber: z.string().min(10, 'Phone number must be at least 10 digits'),
//   password: z.string().min(8, 'Password must be at least 8 characters'),
// });

// export default function CreateAccountForm() {
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();
//   const { register, handleSubmit, formState: { errors } } = useForm({
//     resolver: zodResolver(createAccountSchema),
//   });

//   const onSubmit = (data) => {
//     console.log(data);
//     // Here you would typically send a request to your API to create the account
//     navigate('/login');
//   };

//   return (
//     <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
//       <h1 className="text-2xl font-bold text-center mb-6">Create An Account</h1>
      
//       <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//         <div>
//           <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
//             First Name
//           </label>
//           <Input
//             id="firstName"
//             type="text"
//             placeholder="Enter First Name"
//             {...register('firstName')}
//             className={errors.firstName ? 'border-red-500' : ''}
//           />
//           {errors.firstName && (
//             <p className="mt-1 text-xs text-red-500">{errors.firstName.message}</p>
//           )}
//         </div>

//         <div>
//           <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
//             Last Name
//           </label>
//           <Input
//             id="lastName"
//             type="text"
//             placeholder="Enter Last Name"
//             {...register('lastName')}
//             className={errors.lastName ? 'border-red-500' : ''}
//           />
//           {errors.lastName && (
//             <p className="mt-1 text-xs text-red-500">{errors.lastName.message}</p>
//           )}
//         </div>

//         <div>
//           <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//             Email Address
//           </label>
//           <Input
//             id="email"
//             type="email"
//             placeholder="Enter Email Address"
//             {...register('email')}
//             className={errors.email ? 'border-red-500' : ''}
//           />
//           {errors.email && (
//             <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
//           )}
//         </div>

//         <div>
//           <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
//             Phone Number
//           </label>
//           <Input
//             id="phoneNumber"
//             type="tel"
//             placeholder="Enter Phone Number"
//             {...register('phoneNumber')}
//             className={errors.phoneNumber ? 'border-red-500' : ''}
//           />
//           {errors.phoneNumber && (
//             <p className="mt-1 text-xs text-red-500">{errors.phoneNumber.message}</p>
//           )}
//         </div>

//         <div>
//           <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
//             Password
//           </label>
//           <div className="relative">
//             <Input
//               id="password"
//               type={showPassword ? 'text' : 'password'}
//               placeholder="Enter Password"
//               {...register('password')}
//               className={errors.password ? 'border-red-500' : ''}
//             />
//             <button
//               type="button"
//               onClick={() => setShowPassword(!showPassword)}
//               className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
//             >
//               {showPassword ? 'Hide' : 'Show'}
//             </button>
//           </div>
//           {errors.password && (
//             <p className="mt-1 text-xs text-red-500">{errors.password.message}</p>
//           )}
//         </div>

//         <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white">
//           Create an Account
//         </Button>
//       </form>

//       <p className="mt-4 text-xs text-center text-gray-500">
//         By signing up you accept our{' '}
//         <a href="/terms" className="text-blue-500 hover:underline">terms and conditions</a>
//         {' & '}
//         <a href="/privacy" className="text-blue-500 hover:underline">privacy policy</a>
//       </p>

//       <div className="mt-6 text-center">
//         <p className="text-sm text-gray-600">Already have an Account?</p>
//         <Button 
//           variant="outline" 
//           className="mt-2 w-full border-pink-500 text-pink-500 hover:bg-pink-50"
//           onClick={() => navigate('/login')}
//         >
//           Login
//         </Button>
//       </div>
//     </div>
//   );
// }

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useNavigate } from 'react-router-dom';

// Zod schema for form validation
const createAccountSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phoneNumber: z.string().min(10, 'Phone number must be at least 10 digits'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

export default function CreateAccountForm() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(createAccountSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    // Here you would typically send a request to your API to create the account
    navigate('/login');
  };

  return (
    <div className="w-full max-w-md mx-auto mt-28 my-12 p-6 bg-white rounded-lg border border-fuchsia-200 shadow-2xl overflow-hidden">
      <div className=''>
        <h1 className="text-xl sm:text-2xl font-light text-center mb-6">Create An Account</h1></div>
      {/* <hr className='w-full my-4 border-t border-fuchsia-200'/> */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="firstName" className="block text-sm sm:text-base font-light text-gray-900 mb-1">
            First Name
          </label>
          <input
            id="firstName"
            type="text"
            placeholder="Enter First Name"
            {...register('firstName')}
            className={`border border-fuchsia-300 rounded font-light text-sm sm:text-base p-1 sm:p-2 w-full ${errors.firstName ? 'border-red-500' : ''} `}
          />
          {errors.firstName && (
            <p className="mt-1 text-xs text-rose-500">{errors.firstName.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm sm:text-base font-light text-gray-950 mb-1">
            Last Name
          </label>
          <input
            id="lastName"
            type="text"
            placeholder="Enter Last Name"
            {...register('lastName')}
            className={`border border-fuchsia-300 rounded font-light text-sm sm:text-base p-1 sm:p-2 w-full ${errors.lastName ? 'border-red-500' : ''}`}
          />
          {errors.lastName && (
            <p className="mt-1 text-xs text-rose-500">{errors.lastName.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block font-light text-sm sm:text-base text-gray-950 mb-1">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter Email Address"
            {...register('email')}
            className={`border rounded border-fuchsia-300 font-light text-sm sm:text-base p-1 sm:p-2 w-full ${errors.email ? 'border-red-500' : ''}`}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-rose-500">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="phoneNumber" className="block text-sm sm:text-base font-light text-gray-9500 mb-1">
            Phone Number
          </label>
          <input
            id="phoneNumber"
            type="tel"
            placeholder="Enter Phone Number"
            {...register('phoneNumber')}
            className={`border border-fuchsia-300 rounded font-light text-sm sm:text-base p-1 sm:p-2 w-full ${errors.phoneNumber ? 'border-red-500' : ''}`}
          />
          {errors.phoneNumber && (
            <p className="mt-1 text-xs text-rose-500">{errors.phoneNumber.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="password" className="block text-sm sm:text-base font-light text-gray-950 mb-1">
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter Password"
              {...register('password')}
              className={`border border-fuchsia-300 rounded text-sm font-light sm:text-base p-1 sm:p-2 w-full ${errors.password ? 'border-red-500' : ''}`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 font-light flex items-center text-xs sm:text-sm leading-5"
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
          {errors.password && (
            <p className="mt-1 text-xs text-rose-500">{errors.password.message}</p>
          )}
        </div>

        <button type="submit" className="w-full bg-fuchsia-600 hover:bg-fuchsia-700 font-light text-white text-sm sm:text-base rounded p-1 sm:p-2">
          Create an Account
        </button>
      </form>

      <p className="mt-4 text-xs text-center font-light text-gray-950">
        By signing up you accept our{' '}
        <a href="/terms" className="text-fuchsia-500 hover:underline">terms and conditions</a>
        {' & '}
        <a href="/privacy" className="text-fuchsia-500 hover:underline">privacy policy</a>
      </p>

      <hr className='w-full my-4 border-t border-gray-200'/>

      <div className="mt-6 font-light text-center">
        <p className="text-xs sm:text-sm text-gray-600">Already have an Account?</p>
        <button 
          className="mt-2 w-full text-sm sm:text-base border border-rose-500 text-rose-500  hover:text-whit hover:bg-rose-100 rounded p-1 sm:p-2"
          onClick={() => navigate('/login')}
        >
          Login
        </button>
      </div>
    </div>
  );
}
