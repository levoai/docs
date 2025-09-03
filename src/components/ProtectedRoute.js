// src/components/ProtectedRoute.js
import React from 'react';
import { Redirect } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function ProtectedRoute({ children }) {
  const { user } = useAuth();

  if (!user) {
    return <Redirect to="/auth/login" />;
  }

  if (!children) {
    return <p>Loading...</p>;
  }

  return <>{children}</>;
}