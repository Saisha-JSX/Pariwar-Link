import React, { useState } from 'react';
import Background from '../../assets/Bg/Background';
import styles from './auth.module.scss';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email) return setError('Email is required');
    if (!password) return setError('Password is required');

    alert(`Logging in with\nEmail: ${email}\nPassword: ${password}`);
  };

  return (
    <div className={styles.container}>
      <Background />
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <img src="/logo.svg" alt="App Logo" className={styles.logo} />

        <h1 className={styles.heading}>Welcome to the family!</h1>
        <p className={styles.subheading}>Log in to continue your journey with us.</p>

        {error && <p className={styles.error}>{error}</p>}

        <label htmlFor="email" className={styles.label}>Email</label>
        <input
          type="email"
          id="email"
          className={styles.input}
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="you@example.com"
          autoComplete="username"
          required
        />

        <label htmlFor="password" className={styles.label}>Password</label>
        <input
          type="password"
          id="password"
          className={styles.input}
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Your password"
          autoComplete="current-password"
          required
        />

        <div className={styles.links}>
          <a href="/forgot-password">Forgot password?</a>
        </div>

        <button type="submit" className={styles.submitBtn}>Login</button>

        <div className={styles.separator}>or</div>

        <button type="button" className={styles.googleBtn}>
          <img src="/google-icon.svg" alt="Google" />
          Register with Google
        </button>
      </form>
    </div>
  );
};

export default Login;
