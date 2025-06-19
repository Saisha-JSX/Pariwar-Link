const express = require('express');
const cors = require('cors');

const app = express();

// Import your auth routes
const authRoutes = require('./routes/authRoutes');

// Middleware
app.use(cors());
app.use(express.json());

// Use auth routes under /api/auth
app.use('/api/auth', authRoutes);

module.exports = app;
