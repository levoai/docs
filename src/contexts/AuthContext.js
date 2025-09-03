import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  const login = (username, password) => {
    // 🔐 Replace with real API call
    if (username === 'rahul.kumar@levo.ai' && password === 'Abcd@123') {
      const newUser = { name: 'Admin' };
      localStorage.setItem('user', JSON.stringify(newUser));
      setUser(newUser);
      window.location.href = '/';
    } else {
      alert('Invalid credentials');
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
