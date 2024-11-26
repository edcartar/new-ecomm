// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext'; // Adjust the path to your context file

// // PrivateRoute component to guard protected routes
// const PrivateRoute = ({ children }) => {
//   const { isAuthenticated } = useAuth();

//   // If the user is not authenticated, redirect them to the login page
//   if (!isAuthenticated) {
//     return <Navigate to="/login" />;
//   }

//   // If authenticated, render the child component
//   return children;
// };

// export default PrivateRoute;

import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    // Redirect to login page, but save the intended destination
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;