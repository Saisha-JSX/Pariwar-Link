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

  // Profile Fields
  firstName: String,
  middleName: String,
  lastName: String,
  gender: String,
  nickname: String,
  dob: Date,
  bio: String,
  phone: String,
  address: String,
  hobbies: [String],
  skills: [String],
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
