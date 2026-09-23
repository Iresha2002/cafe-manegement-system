const jwt = require('jsonwebtoken');

// Helper function to create a signed JWT
const generateToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET, {
    expiresIn: '1d', // Token expires in 1 day
  });
};

module.exports = generateToken;