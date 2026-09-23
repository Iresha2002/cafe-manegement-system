const express = require('express');


require('dotenv').config();
const MONGO_URI = process.env.MONGO_URI;
const connectDB = require('./config/db');
const app = express();

// Connect to MongoDB
connectDB();

// Middleware to parse incoming JSON in request bodies
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Cafe Management System API is running...');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});