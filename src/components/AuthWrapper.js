// src/components/AuthWrapper.js
import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Redirect, useLocation } from 'react-router-dom';

export default function AuthWrapper({ children }) {
  const { user } = useAuth();
  const location = useLocation();

  // If not logged in and not already on login page → redirect
  if (!user && location.pathname !== '/auth/login') {
    return <Redirect to="/auth/login" />;
  }

  // If logged in and trying to go back to login → send to docs
  if (user && location.pathname === '/auth/login') {
    return <Redirect to="/docs" />;
  }

  // Otherwise render app
  return <>{children}</>;
}