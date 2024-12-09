// import React, { createContext, useContext, useState } from 'react';

// // Create AuthContext
// const AuthContext = createContext();

// // Custom hook to use AuthContext
// export const useAuth = () => useContext(AuthContext);

// // AuthProvider component to wrap your app and provide auth state
// export const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   // Mock login function
//   const login = () => setIsAuthenticated(true);

//   // Mock logout function
//   const logout = () => setIsAuthenticated(false);

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };


import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create the AuthContext
export const AuthContext = createContext();

// Custom hook to use AuthContext
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check if user is authenticated on initial load
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (username, password) => {
    try {
      const response = await axios.post('https://fakestoreapi.com/auth/login', {
        username,
        password
      });

      if (response.data.token) {
        const userData = { id: 1, username, token: response.data.token };
        setUser(userData);
        setIsAuthenticated(true);
        localStorage.setItem('user', JSON.stringify(userData));
        setError(null);
      } else {
        throw new Error('Login failed');
      }
    } catch (err) {
      setError(err.response?.data || 'Login failed');
      setIsAuthenticated(false);
      setUser(null);
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem('user');
    setError(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;