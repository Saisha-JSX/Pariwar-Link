const express = require('express');
const router = express.Router();
const {
  sendOtp,
  verifyOtpAndRegister,
  login,
} = require('../controllers/authController');

router.post('/send-otp', sendOtp);
router.post('/verify-otp', verifyOtpAndRegister);
router.post('/login', login);

module.exports = router;
