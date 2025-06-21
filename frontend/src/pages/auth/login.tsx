import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Background from '../../assets/Bg/Background';
import styles from './auth.module.scss';
import ToggleEye from '../../utils/ToggleEye';
import Spinner from '../../utils/Spinner';
import { validateLoginForm } from '../../utils/validators';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError('');
    setPasswordError('');

    const errors = validateLoginForm(email, password);

    if (errors.email || errors.password) {
      setEmailError(errors.email || '');
      setPasswordError(errors.password || '');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate('/dashboard');
    }, 2000);
  };

  return (
    <div className={styles.container}>
      <Background />
      <form className={styles.loginForm} onSubmit={handleSubmit} noValidate>
        <img src="/logo.svg" alt="App Logo" className={styles.logo} />

        <h1 className={styles.heading}>Welcome to the family!</h1>
        <p className={styles.subheading}>Log in to continue your journey with us.</p>

        <label htmlFor="email" className={styles.label}>Email</label>
        <input
          type="email"
          id="email"
          className={styles.input}
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="you@example.com"
          autoComplete="username"
          aria-invalid={!!emailError}
          aria-describedby="email-error"
          disabled={loading}
        />
        {emailError && <span id="email-error" className={styles.fieldError}>{emailError}</span>}

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
            aria-invalid={!!passwordError}
            aria-describedby="password-error"
            disabled={loading}
          />
          <ToggleEye visible={showPassword} setVisible={setShowPassword} />
        </div>
        {passwordError && <span id="password-error" className={styles.fieldError}>{passwordError}</span>}

        <div className={styles.links}>
          <Link to="/forgot-password" className={styles.link}>Forgot password?</Link>
        </div>

        <button
          type="submit"
          className={styles.submitBtn}
          disabled={loading}
        >
          {loading && <Spinner size={18} color="#fff" />}
          Login
        </button>

        <div className={styles.links}>
          <p className={styles.paragraph}>
            Don’t have an account?{' '}
            <Link to="/signup" className={styles.switchLink}>
              Sign up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
