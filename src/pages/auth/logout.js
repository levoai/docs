// src/pages/auth/logout.js
import React, { useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';

export default function Logout() {
  const { logout } = useAuth();

  useEffect(() => {
    logout();
    if (typeof window !== 'undefined') {
      window.location.href = '/auth/login';
    }
  }, []);

  return <p>Logging out...</p>;
}
