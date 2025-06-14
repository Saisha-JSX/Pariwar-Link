import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Background from '../../assets/Bg/Background';
import styles from './auth.module.scss';
import Spinner from '../../utils/Spinner';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSubmitted(false);

    const emailRegex = /\S+@\S+\.\S+/;

    if (!email) return setError('Email is required');
    if (!emailRegex.test(email)) return setError('Please enter a valid email address');

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 2000);
  };

  return (
    <div className={styles.container}>
      <Background />
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <img src="/logo.svg" alt="App Logo" className={styles.logo} />
        <h1 className={styles.heading}>Forgot your password?</h1>
        <p className={styles.subheading}>
          Enter your email and we’ll send you instructions to reset your password.
        </p>

        {error && <p className={styles.error}>{error}</p>}
        {submitted && (
          <p className={styles.paragraph} style={{ color: 'green' }}>
            Reset link sent! Please check your email.
          </p>
        )}

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
          disabled={loading || submitted}
        />

        <button
          type="submit"
          className={styles.submitBtn}
          disabled={loading || submitted}
          style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}
        >
          {loading && <Spinner size={18} color="#fff" />}
          {submitted ? 'Sent' : 'Send'}
        </button>

        <div className={styles.links}>
          <p className={styles.paragraph}>
            Remember your password?{' '}
            <a href="/login" className={styles.switchLink}>Back to Login</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
