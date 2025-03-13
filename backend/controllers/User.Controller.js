import userModel from '../models/User.Model.js';
import validator from 'validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Function to create a JWT token
const createToken = id => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

// Route for user login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await userModel.findOne({ email });

    // Check if user exists
    if (!user) {
      return res
        .status(401)
        .json({ message: 'User does not exist', success: false });
    }

    // Check if the password is correct
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ message: 'Invalid credentials', success: false });
    }

    // Create and send JWT
    const token = createToken(user._id);
    res.json({ message: 'User logged in successfully', success: true, token });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error', success: false });
  }
};

// Route for user registration
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Checking user already exists or not
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res
        .status(400)
        .json({ message: 'User already exists', success: false });
    }

    // Validating email format & strong password
    if (!validator.isEmail(email)) {
      return res
        .status(400)
        .json({ message: 'Please enter a valid email', success: false });
    }

    if (password.length < 8) {
      return res
        .status(400)
        .json({ message: 'Please enter a strong password', success: false });
    }

    // Hashing password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Creating a new user
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });

    // Saving user to the database
    const user = await newUser.save();

    //Token
    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error', success: false });
  }
};

// Route for Admin Login
const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign(email + password, process.env.JWT_SECRET);
      res.json({
        message: 'Admin logged in successfully',
        success: true,
        token,
      });
    } else {
      return res
        .status(401)
        .json({ message: 'Invalid credentials', success: false });
    }
  } catch (error) {
    console.error('Admin login error:', error);
    res.status(500).json({ message: 'Server error', success: false });
  }
};

export { loginUser, registerUser, adminLogin };
