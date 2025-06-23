const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/send-otp', authController.sendOtp);
router.post('/verify-otp', authController.verifyOtpAndRegister);
router.post('/login', authController.login);
router.post('/logout', authController.logout); 

module.exports = router;
