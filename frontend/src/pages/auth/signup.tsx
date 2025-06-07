import React, { useState } from 'react';
import Background from '../../assets/Bg/Background';
import styles from './auth.module.scss';

const Signup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [otpError, setOtpError] = useState('');
  const [loading, setLoading] = useState(false);

  const emailRegex = /\S+@\S+\.\S+/;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email) return setError('Email is required');
    if (!emailRegex.test(email)) return setError('Please enter a valid email address');
    if (!password) return setError('Password is required');
    if (password.length < 6) return setError('Password must be at least 6 characters');

    setLoading(true);
    setTimeout(() => {
      setOtpSent(true);
      setLoading(false);
      setError('');
    }, 1500);
  };

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOtpError('');

    if (otp.length !== 6 || !/^\d{6}$/.test(otp)) {
      return setOtpError('Please enter a valid 6-digit OTP code');
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert('Signup successful! Your account is verified.');
    }, 1000);
  };

  const handleGoogleSignup = () => {
    alert('Google signup clicked');
  };

  return (
    <div className={styles.container}>
      <Background />
      {!otpSent ? (
        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <img src="/logo.svg" alt="App Logo" className={styles.logo} />

          <h1 className={styles.heading}>Join the family!</h1>
          <p className={styles.subheading}>Create your account to start your journey with us.</p>

          {error && (
            <p className={styles.error} role="alert" aria-live="assertive">
              {error}
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
            disabled={loading}
          />

          <label htmlFor="password" className={styles.label}>Password</label>
          <input
            type="password"
            id="password"
            className={styles.input}
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Create a password"
            autoComplete="new-password"
            required
            disabled={loading}
          />

          <button type="submit" disabled={loading} className={styles.submitBtn}>
            {loading ? 'Sending OTP...' : 'Sign Up'}
          </button>

          <div className={styles.links}>
            <p className={styles.paragraph}>
              Already have an account?{' '}
              <a href="/login" className={styles.switchLink}>Log in</a>
            </p>
          </div>

          <div className={styles.separator}>or</div>

          <button
            type="button"
            className={styles.googleBtn}
            onClick={handleGoogleSignup}
            disabled={loading}
          >
            <img src="/google-icon.svg" alt="Google" />
            Sign up with Google
          </button>
        </form>
      ) : (
        <form className={styles.loginForm} onSubmit={handleOtpSubmit}>
          <img src="/logo.svg" alt="App Logo" className={styles.logo} />

          <h1 className={styles.heading}>Verify your email</h1>
          <p className={styles.subheading}>
            Enter the 6-digit code sent to <strong className={styles.strong}>{email}</strong>.
          </p>

          {otpError && (
            <p className={styles.error} role="alert" aria-live="assertive">
              {otpError}
            </p>
          )}

          <label htmlFor="otp" className={styles.label}>OTP Code</label>
          <input
            type="text"
            id="otp"
            className={styles.input}
            value={otp}
            onChange={e => setOtp(e.target.value)}
            placeholder="Enter OTP"
            maxLength={6}
            required
            disabled={loading}
            inputMode="numeric"
            pattern="\d{6}"
            autoFocus
          />

          <button type="submit" disabled={loading} className={styles.submitBtn}>
            {loading ? 'Verifying...' : 'Verify OTP'}
          </button>
        </form>
      )}
    </div>
  );
};

export default Signup;
