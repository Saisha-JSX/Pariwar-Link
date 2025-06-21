const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { sendEmail } = require('../utils/email');
const { generateOTP } = require('../utils/otp');
const otpEmailTemplate = require('../utils/otpEmailTemplate');

// Helper: Basic email format validation
const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

exports.sendOtp = async (req, res) => {
  const email = req.body.email?.trim();
  if (!email) return res.status(400).json({ message: 'Email is required' });
  if (!isValidEmail(email)) return res.status(400).json({ message: 'Invalid email format' });

  const otpCode = generateOTP();
  const otpExpiry = Date.now() + 5 * 60 * 1000; // 5 minutes

  try {
    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({ email, otp: { code: otpCode, expiresAt: otpExpiry } });
    } else {
      if (user.otp && user.otp.expiresAt > Date.now()) {
        return res.status(429).json({ message: 'OTP already sent. Please wait before requesting a new one.' });
      }
      user.otp = { code: otpCode, expiresAt: otpExpiry };
      await user.save();
    }

    const htmlContent = otpEmailTemplate(otpCode);

    await sendEmail({
      to: email,
      subject: 'Your OTP Code for PariwarLink',
      html: htmlContent,
    });

    res.status(200).json({ message: 'OTP sent to email' });
  } catch (error) {
    console.error('Error sending OTP email:', error);
    res.status(500).json({ message: 'Failed to send OTP email' });
  }
};

exports.verifyOtpAndRegister = async (req, res) => {
  const { email, otp, password } = req.body;
  if (!email || !otp || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const user = await User.findOne({ email });
    if (!user || !user.otp) {
      return res.status(400).json({ message: 'Invalid or expired OTP' });
    }

    const isOtpValid = user.otp.code === otp && user.otp.expiresAt > Date.now();
    if (!isOtpValid) {
      return res.status(400).json({ message: 'Invalid or expired OTP' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;
    user.otp = undefined;
    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error verifying OTP and registering:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    const user = await User.findOne({ email });
    if (!user || !user.password) {
      return res.status(400).json({ message: 'User not found or incomplete signup' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '7d',
    });

    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
