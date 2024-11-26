// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import * as z from 'zod';
// import { useNavigate } from 'react-router-dom';
// import { FcGoogle } from 'react-icons/fc';
// import { FaApple } from 'react-icons/fa';
// import { Input } from '@/components/ui/input';
// import { Button } from '@/components/ui/button';

// // Zod schema for form validation
// const loginSchema = z.object({
//   emailOrPhone: z.string().min(1, 'Email or phone number is required'),
//   password: z.string().min(6, 'Password must be at least 6 characters'),
// });

// export default function LoginForm() {
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();
//   const { register, handleSubmit, formState: { errors } } = useForm({
//     resolver: zodResolver(loginSchema),
//   });

//   const onSubmit = (data) => {
//     console.log(data);
//     navigate('/dashboard');
//   };

//   return (
//     <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
//       <h1 className="text-2xl font-bold text-center mb-6">Login</h1>

//       <div className="space-y-4 mb-6">
//         <Button variant="outline" className="w-full flex items-center justify-center">
//           <FcGoogle className="mr-2" />
//           Login with Google
//         </Button>
//         <Button variant="outline" className="w-full flex items-center justify-center">
//           <FaApple className="mr-2" />
//           Login with Apple
//         </Button>
//       </div>

//       <div className="relative mb-6">
//         <hr className="border-gray-300" />
//         <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-sm text-gray-500">
//           OR
//         </span>
//       </div>

//       <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//         <div>
//           <label htmlFor="emailOrPhone" className="block text-sm font-medium text-gray-700 mb-1">
//             Email Address or Phone Number
//           </label>
//           <Input
//             id="emailOrPhone"
//             type="text"
//             placeholder="Enter Email Address OR Phone Number"
//             {...register('emailOrPhone')}
//             className={errors.emailOrPhone ? 'border-red-500' : ''}
//           />
//           {errors.emailOrPhone && (
//             <p className="mt-1 text-xs text-red-500">{errors.emailOrPhone.message}</p>
//           )}
//         </div>

//         <div>
//           <div className="flex justify-between items-center mb-1">
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//               Password
//             </label>
//             <a href="/forgot-password" className="text-sm text-pink-600 hover:underline">
//               Forgot Password?
//             </a>
//           </div>
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
//           Login
//         </Button>
//       </form>

//       <div className="mt-6 text-center">
//         <p className="text-sm text-gray-600">Don't have an Account?</p>
//         <Button variant="outline" className="mt-2 w-full border-pink-500 text-pink-500 hover:bg-pink-50">
//           Create an Account
//         </Button>
//       </div>
//     </div>
//   );
// }

// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import * as z from 'zod';
// import { useNavigate } from 'react-router-dom';
// import { FcGoogle } from 'react-icons/fc';
// import { FaApple } from 'react-icons/fa';

// // Zod schema for form validation
// const loginSchema = z.object({
//   emailOrPhone: z.string().min(1, 'Email or phone number is required'),
//   password: z.string().min(6, 'Password must be at least 6 characters'),
// });

// export default function LoginForm() {
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();
//   const { register, handleSubmit, formState: { errors } } = useForm({
//     resolver: zodResolver(loginSchema),
//   });

//   const onSubmit = (data) => {
//     console.log(data);
//     navigate('/checkout');
    
//   };

//   return (
//     <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg border border-fuchsia-300 shadow-2xl mt-28 my-12">
//       <h1 className="text-xl sm:text-2xl font-light text-center mb-6">Login</h1>

//       <div className="space-y-4 font-light mb-6">
//         <button className="w-full flex items-center justify-center border text-sm sm:text-base border-fuchsia-300 p-1 sm:p-2 rounded-md hover:bg-gray-100">
//           <FcGoogle className="mr-2" />
//           Login with Google
//         </button>
//         <button className="w-full flex items-center justify-center text-sm sm:text-base border border-fuchsia-300 p-1 sm:p-2 rounded-md hover:bg-gray-100">
//           <FaApple className="mr-2" />
//           Login with Apple
//         </button>
//       </div>

//       <div className="relative font-light mb-6">
//         <hr className="border-fuchsia-300" />
//         <span className="absolute top-1/2 left-1/2 rounded transform -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-sm sm:text-base text-gray-500">
//           OR
//         </span>
//       </div>

//       <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 font-light rounded-full">
//         <div>
//           <label htmlFor="emailOrPhone" className="block text-sm sm:text-base font-light text-gray-950 mb-1">
//             Email Address or Phone Number
//           </label>
//           <input
//             id="emailOrPhone"
//             type="text"
//             placeholder="Enter Email Address OR Phone Number"
//             {...register('emailOrPhone')}
//             className={`border rounded-md text-sm sm:text-base ${errors.emailOrPhone ? 'border-red-500' : 'border-fuchsia-300'} p-1 sm:p-2 rounded w-full`}
//           />
//           {errors.emailOrPhone && (
//             <p className="mt-1 text-xs text-red-500">{errors.emailOrPhone.message}</p>
//           )}
//         </div>

//         <div>
//           <div className="flex justify-between items-center mb-1">
//             <label htmlFor="password" className="block text-sm sm:text-base font-light text-gray-950">
//               Password
//             </label>
//             <a href="/forgot-password" className="text-xs sm:text-sm text-pink-600 hover:underline">
//               Forgot Password?
//             </a>
//           </div>
//           <div className="relative">
//             <input
//               id="password"
//               type={showPassword ? 'text' : 'password'}
//               placeholder="Enter Password"
//               {...register('password')}
//               className={`border rounded-lg text-sm ${errors.password ? 'border-red-500' : 'border-fuchsia-300'} p-1 sm:p-2 rounded w-full`}
//             />
//             <button
//               type="button"
//               onClick={() => setShowPassword(!showPassword)}
//               className="absolute inset-y-0 right-0 pr-3 flex items-center text-xs sm:text-sm leading-5"
//             >
//               {showPassword ? 'Hide' : 'Show'}
//             </button>
//           </div>
//           {errors.password && (
//             <p className="mt-1 text-xs text-red-500">{errors.password.message}</p>
//           )}
//         </div>

//         <button type="submit" className="w-full bg-fuchsia-600 text-sm sm:text-base hover:bg-fuchsia-700 text-white p-1 sm:p-2 rounded-md">
//           Login
//         </button>
//       </form>

//       <div className="mt-6 font-light text-center">
//         <p className="text-xs sm:text-sm text-gray-600">Don't have an Account?</p>
//         <button 
//         className="mt-2 w-full border text-sm sm:text-base border-pink-500 text-rose-500 hover:bg-pink-50 p-1 sm:p-1.5 rounded-md"
//         onClick={() => navigate('/register')}
//       >
//         Create an Account
//       </button>
//       </div>
//     </div>
//   );
// }


import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useNavigate, useLocation } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';
import { AuthContext } from '../context/AuthContext';

// Zod schema for form validation
const loginSchema = z.object({
  username: z.string().min(1, 'Username is required'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { login, error } = useContext(AuthContext);
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    try {
      await login(data.username, data.password);
      const from = location.state?.from?.pathname || '/checkout';
      navigate(from, { replace: true });
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg border border-fuchsia-300 shadow-2xl mt-28 my-12">
      <h1 className="text-xl sm:text-2xl font-light text-center mb-6">Login</h1>

      <div className="space-y-4 font-light mb-6">
        <button className="w-full flex items-center justify-center border text-sm sm:text-base border-fuchsia-300 p-1 sm:p-2 rounded-md hover:bg-gray-100">
          <FcGoogle className="mr-2" />
          Login with Google
        </button>
        <button className="w-full flex items-center justify-center text-sm sm:text-base border border-fuchsia-300 p-1 sm:p-2 rounded-md hover:bg-gray-100">
          <FaApple className="mr-2" />
          Login with Apple
        </button>
      </div>

      <div className="relative font-light mb-6">
        <hr className="border-fuchsia-300" />
        <span className="absolute top-1/2 left-1/2 rounded transform -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-sm sm:text-base text-gray-500">
          OR
        </span>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 font-light rounded-full">
        <div>
          <label htmlFor="username" className="block text-sm sm:text-base font-light text-gray-950 mb-1">
            Username
          </label>
          <input
            id="username"
            type="text"
            placeholder="Enter Username"
            {...register('username')}
            className={`border rounded-md text-xs sm:text-sm ${errors.username ? 'border-red-500' : 'border-fuchsia-300'} p-1 sm:p-2 rounded w-full`}
          />
          {errors.username && (
            <p className="mt-1 text-xs text-red-500">{errors.username.message}</p>
          )}
        </div>

        <div>
          <div className="flex justify-between items-center mb-1">
            <label htmlFor="password" className="block text-sm sm:text-base font-light text-gray-950">
              Password
            </label>
            <a href="/forgot-password" className="text-xs sm:text-sm text-pink-600 hover:underline">
              Forgot Password?
            </a>
          </div>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter Password"
              {...register('password')}
              className={`border rounded-lg text-sm ${errors.password ? 'border-red-500' : 'border-fuchsia-300'} p-1 sm:p-2 rounded w-full`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-xs sm:text-sm leading-5"
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
          {errors.password && (
            <p className="mt-1 text-xs text-red-500">{errors.password.message}</p>
          )}
        </div>

        {error && (
          <p className="text-red-500 text-sm">{error}</p>
        )}

        <button type="submit" className="w-full bg-fuchsia-600 text-sm sm:text-base hover:bg-fuchsia-700 text-white p-1 sm:p-2 rounded-md">
          Login
        </button>
      </form>

      <div className="mt-6 font-light text-center">
        <p className="text-xs sm:text-sm text-gray-600">Don't have an Account?</p>
        <button 
          className="mt-2 w-full border text-sm sm:text-base border-pink-500 text-rose-500 hover:bg-pink-50 p-1 sm:p-1.5 rounded-md"
          onClick={() => navigate('/register')}
        >
          Create an Account
        </button>
      </div>
    </div>
  );
}

// johnd m38rmF$