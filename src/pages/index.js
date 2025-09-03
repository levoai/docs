// src/pages/index.js
import React, { useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';

export default function Home() {
  const { user } = useAuth();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (user) {
        window.location.href = '/docs';   // redirect logged-in users to docs
      } else {
        window.location.href = '/auth/login'; // send others to login
      }
    }
  }, [user]);

  return <p>Redirecting...</p>;
}
