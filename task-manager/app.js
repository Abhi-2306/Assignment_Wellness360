const express = require('express');
const mongoose = require('mongoose');
const tasksRoutes = require('./routes/tasksRoutes');
require('dotenv').config();

const app = express();

app.use(express.json());

// MongoDB connection
mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api', tasksRoutes);

// Error handling
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});

// Export app without starting the server
module.exports = app;
