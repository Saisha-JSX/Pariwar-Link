import React, { useState, useEffect } from 'react';
import Background from '../../assets/Bg/Background';
import styles from './auth.module.scss';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ToggleEye from '../../utils/ToggleEye'; // Adjust path if needed
import { useNavigate } from 'react-router-dom';

const Signup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [otpError, setOtpError] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const emailRegex = /\S+@\S+\.\S+/;

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (otpSent && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      setCanResend(true);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [otpSent, timer]);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email) {
      toast.error('Email is required');
      return setError('Email is required');
    }
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address');
      return setError('Please enter a valid email address');
    }

    setLoading(true);
    setTimeout(() => {
      setOtpSent(true);
      setLoading(false);
      setTimer(60);
      setCanResend(false);
      toast.info('OTP sent to your email.');
    }, 1500);
  };

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOtpError('');

    if (otp.length !== 6 || !/^\d{6}$/.test(otp)) {
      toast.error('Please enter a valid 6-digit OTP code');
      return setOtpError('Please enter a valid 6-digit OTP code');
    }

    if (!password || password.length < 6) {
      toast.error('Password must be at least 6 characters');
      return setOtpError('Password must be at least 6 characters');
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success('User Register successful.');
      navigate('/profile-setup');  
    }, 1000);
  };

  const handleResendOtp = () => {
    setOtp('');
    setOtpError('');
    setCanResend(false);
    setTimer(60);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.info('OTP resent to your email.');
    }, 1000);
  };

  return (
    <div className={styles.container}>
      <Background />
      {!otpSent ? (
        <form className={styles.loginForm} onSubmit={handleEmailSubmit}>
          <img src="/logo.svg" alt="App Logo" className={styles.logo} />
          <h1 className={styles.heading}>Join the family!</h1>
          <p className={styles.subheading}>Enter your email to get started.</p>

          {error && <p className={styles.error}>{error}</p>}

          <label htmlFor="email" className={styles.label}>Email</label>
          <input
            type="email"
            id="email"
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            autoComplete="username"
            required
            disabled={loading}
          />

          <button type="submit" disabled={loading} className={styles.submitBtn}>
            {loading ? 'Sending OTP...' : 'Send OTP'}
          </button>

          <div className={styles.links}>
            <p className={styles.paragraph}>
              Already have an account?{' '}
              <a href="/login" className={styles.switchLink}>Log in</a>
            </p>
          </div>
        </form>
      ) : (
        <form className={styles.loginForm} onSubmit={handleOtpSubmit}>
          <img src="/logo.svg" alt="App Logo" className={styles.logo} />
          <h1 className={styles.heading}>Verify & Set Password</h1>
          <p className={styles.subheading}>
            Enter the 6-digit OTP sent to <strong>{email}</strong> and set your password.
          </p>

          {otpError && <p className={styles.error}>{otpError}</p>}

          <label htmlFor="otp" className={styles.label}>OTP Code</label>
          <input
            type="text"
            id="otp"
            className={styles.input}
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
            maxLength={6}
            inputMode="numeric"
            pattern="\d{6}"
            required
            disabled={loading}
          />

          <label htmlFor="password" className={styles.label}>Password</label>
          <div className={styles.passwordInputWrapper} style={{ position: 'relative' }}>
            <input
              type={passwordVisible ? 'text' : 'password'}
              id="password"
              className={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password"
              autoComplete="new-password"
              required
              disabled={loading}
              style={{ paddingRight: '2.5rem' }}
            />
            <ToggleEye
              visible={passwordVisible}
              setVisible={setPasswordVisible}
              className={styles.toggleEye}
            />
          </div>

          <button type="submit" disabled={loading} className={styles.submitBtn}>
            {loading ? 'Verifying...' : 'Verify & Register'}
          </button>

          <div className={styles.timerContainer}>
            <p className={styles.timerText}>
              {canResend ? (
                <button
                  type="button"
                  onClick={handleResendOtp}
                  className={styles.resendBtn}
                  disabled={loading}
                >
                  Resend OTP
                </button>
              ) : (
                `Resend OTP in ${timer}s`
              )}
            </p>
          </div>
        </form>
      )}

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        closeButton={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Signup;
