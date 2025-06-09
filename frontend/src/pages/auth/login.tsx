import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // import useNavigate
import Background from '../../assets/Bg/Background';
import styles from './auth.module.scss';
import ToggleEye from '../../utils/ToggleEye';
import Spinner from '../../utils/Spinner';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // initialize navigate

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  setError('');
  const emailRegex = /\S+@\S+\.\S+/;

  if (!email) return setError('Email is required');
  if (!emailRegex.test(email)) return setError('Please enter a valid email address');
  if (!password) return setError('Password is required');

  setLoading(true);

  // simulate API call
  setTimeout(() => {
    setLoading(false);
    navigate('/dashboard');
  }, 2000);
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
          disabled={loading}
        />

        <label htmlFor="password" className={styles.label}>Password</label>
        <div className={styles.inputWrapper}>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            className={styles.input}
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Your password"
            autoComplete="current-password"
            required
            disabled={loading}
          />
          <ToggleEye visible={showPassword} setVisible={setShowPassword} />
        </div>

        <div className={styles.links}>
          <a href="/forgot-password" className={styles.link}>Forgot password?</a>
        </div>

        <button
          type="submit"
          className={styles.submitBtn}
          disabled={loading}
          style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}
        >
          {loading && <Spinner size={18} color="#fff" />}
          Login
        </button>

        <div className={styles.links}>
          <p className={styles.paragraph}>
            Don't have an account?{' '}
            <a href="/signup" className={styles.switchLink}>
              Sign up
            </a>
          </p>
        </div>

        <div className={styles.separator}>or</div>

        <button type="button" className={styles.googleBtn} disabled={loading}>
          <img src="/google-icon.svg" alt="Google" />
          Register with Google
        </button>
      </form>
    </div>
  );
};

export default Login;
