const express = require('express');
const cors = require('cors');

const app = express();

// Import your auth routes
const authRoutes = require('./routes/authRoutes');
const profileRoutes = require('./routes/profileRoutes');

// Middleware
app.use(cors());
app.use(express.json());

// Use auth routes under /api/auth
app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);

module.exports = app;
