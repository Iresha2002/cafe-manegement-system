const dns = require('dns');
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI || '';

    // Only use public DNS fallbacks for Atlas cloud connections (mongodb+srv://).
    // For local Docker MongoDB (mongodb://mongo:27017 or localhost), preserve Docker's internal DNS.
    if (uri.startsWith('mongodb+srv://')) {
      dns.setServers(['8.8.8.8', '1.1.1.1']);
    }

    const conn = await mongoose.connect(uri);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Database connection error: ${error.message}`);
    process.exit(1); // Stop the server if database connection fails
  }
};

module.exports = connectDB;
