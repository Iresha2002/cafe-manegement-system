const User = require('../models/User');
const generateToken = require('../utils/generateToken');

// @desc    Register a new user
// @route   POST /api/auth/register
// @access  Public
const registerUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // 1. Check for missing required fields
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Please provide name, email, and password' });
    }

     // 2. Check if user already exists in database
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists with this email' });
    }


    // // Send back what we received just to verify it works!
    // res.status(200).json({
    //   message: 'Registration endpoint hit successfully!',
    //   receivedData: { name, email, role },
    // });
    // 3. Create the user in MongoDB
    const user = await User.create({
      name,
      email,
      password,
      role,
    });

    // 4. Send back the newly created user (without password!)
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user._id, user.role),
      message: 'User registered successfully',
    });



  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  registerUser,
};