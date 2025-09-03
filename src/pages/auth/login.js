// src/pages/auth/login.js
import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import styles from './styles.module.css';

export default function Login() {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img src="/img/logo-light.svg" alt="Levo.ai Logo" className={styles.logo} />
        <h1 className={styles.title}>Sign in to your Levo account</h1>
        <form onSubmit={handleSubmit}>
          <input
            className={styles.input}
            type="text"
            placeholder="Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className={styles.input}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className={styles.button} type="submit">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
