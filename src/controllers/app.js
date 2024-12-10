const express = require('express');
const routes = require('./routes');
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/', routes);

// Error handling for unknown routes
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

module.exports = app;
