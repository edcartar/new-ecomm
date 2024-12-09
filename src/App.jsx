

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './pages/Home';
// import ProductDetails from './pages/ProductDetails';
// import ViewCart from './pages/ViewCart';
// import Checkout from './pages/Checkout';
// import Shop from './pages/Shop';
// import LoginForm from './pages/LoginForm';  // Import your Login page
// import CreateAccountForm from './pages/CreateAccountForm';  // Import CreateAccountForm
// import { AuthProvider } from './context/AuthContext';  // Import AuthProvider
// import PrivateRoute from './routes/PrivateRoute';  // Import PrivateRoute

// import SideBar from './components/SideBar';
// import Header from './components/Header';
// import Footer from './components/Footer';

// const App = () => {
//   return (
//     <div className='flex flex-col min-h-screen'>
//       <AuthProvider>
//         <Router>
//           <Header />
//           <div className='flex-grow'>
//             <Routes>
//               <Route path='/' element={<Home />} />
//               <Route path='/shop' element={<Shop />} />
//               <Route path='/product/:id' element={<ProductDetails />} />
//               <Route path='/cart' element={<ViewCart />} />
              
//               {/* Wrap protected routes with PrivateRoute */}
//               <Route path='/checkout' element={
//                 <PrivateRoute>
//                   <Checkout />
//                 </PrivateRoute>
//               } />
              
//               <Route path='/login' element={<LoginForm />} />
//               <Route path='/register' element={<CreateAccountForm />} /> {/* Add this line */}
//             </Routes>
//             <SideBar />
//           </div>
//           <Footer />
//         </Router>
//       </AuthProvider>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import ViewCart from './pages/ViewCart';
import Checkout from './pages/Checkout';
import Shop from './pages/Shop';
import LoginForm from './pages/LoginForm';
import CreateAccountForm from './pages/CreateAccountForm';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './routes/PrivateRoute';

import SideBar from './components/SideBar';
import Header from './components/Header';
import Footer from './components/Footer';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='flex flex-col min-h-screen'>
        <AuthProvider>
          <Router>
            <Header />
            <div className='flex-grow'>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/shop' element={<Shop />} />
                <Route path='/product/:id' element={<ProductDetails />} />
                <Route path='/cart' element={<ViewCart />} />
                
                <Route path='/checkout' element={
                  <PrivateRoute>
                    <Checkout />
                  </PrivateRoute>
                } />
                
                <Route path='/login' element={<LoginForm />} />
                <Route path='/register' element={<CreateAccountForm />} />
              </Routes>
              <SideBar />
            </div>
            <Footer />
          </Router>
        </AuthProvider>
      </div>
    </QueryClientProvider>
  );
}

export default App;