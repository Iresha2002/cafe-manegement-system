const express = require('express');
const cors = require('cors');

require('dotenv').config();
const MONGO_URI = process.env.MONGO_URI;
const connectDB = require('./config/db');
const app = express();
const authRoutes = require('./routes/authRoutes');

// Connect to MongoDB
connectDB();

// Middleware to parse incoming JSON in request bodies
app.use(express.json());
app.use(cors());
// Use the authentication routes
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Cafe Management System API is running...');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
