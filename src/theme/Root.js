// src/theme/Root.js
import React from 'react';
import { AuthProvider } from '../contexts/AuthContext';  // ✅ import provider
import AuthWrapper from '../components/AuthWrapper';

export default function Root({ children }) {
  return (
    <AuthProvider>
      <AuthWrapper>{children}</AuthWrapper>
    </AuthProvider>
  );
}