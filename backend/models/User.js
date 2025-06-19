const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
  },
  otp: {
    code: String,
    expiresAt: Date,
  },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
