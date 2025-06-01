const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
  res.send('PariwarLink backend is live ✨');
});

module.exports = app;
