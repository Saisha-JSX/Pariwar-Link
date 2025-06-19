const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP
};

exports.sendOtp = async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: 'Email is required' });

  const otpCode = generateOTP();
  const otpExpiry = Date.now() + 5 * 60 * 1000; // 5 mins

  let user = await User.findOne({ email });
  if (!user) {
    user = await User.create({ email, otp: { code: otpCode, expiresAt: otpExpiry } });
  } else {
    user.otp = { code: otpCode, expiresAt: otpExpiry };
    await user.save();
  }

  // Simulate sending OTP (in production, use email/SMS)
  console.log(`OTP for ${email}: ${otpCode}`);

  res.status(200).json({ message: 'OTP sent to email' });
};

exports.verifyOtpAndRegister = async (req, res) => {
  const { email, otp, password } = req.body;
  if (!email || !otp || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

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
  user.otp = undefined; // clear OTP
  await user.save();

  res.status(201).json({ message: 'User registered successfully' });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ message: 'Email and password are required' });

  const user = await User.findOne({ email });
  if (!user || !user.password) return res.status(400).json({ message: 'User not found or incomplete signup' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: '7d',
  });

  res.status(200).json({ message: 'Login successful', token });
};
