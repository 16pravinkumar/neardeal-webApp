const path = require('path');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Merchant = require('../models/signup');

const signup = async (req, res) => {
  try {
    const { email, storeName, password, confirmPassword, dob, contact, category, storeAddress, city, country, zip } = req.body;
    const storeLogo = req.file;  // Access uploaded file
    console.log(req.body);

    // Validate and process form data here
    if (!email || !storeName || !password || !confirmPassword || !dob || !contact || !category || !storeAddress || !city || !country || !zip) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Check if the email is already in use
    const existingMerchant = await Merchant.findOne({ email });
    if (existingMerchant) {
      return res.status(400).json({ message: 'Email is already in use' });
    }

    // Check password confirmation
    if (password !== confirmPassword) {
      return res.status(400).json({ message: 'Passwords do not match' });
    }

    const hashedPassword = await bcrypt.hash(password, 15);

    // Create a new Merchant document
    const newMerchant = new Merchant({
      email,
      storeName,
      password: hashedPassword,
      dob,
      contact,
      category,
      storeAddress,
      city,
      country,
      zip,
      storeLogo // Save the filename or path
    });

    // Save the document to the database
    await newMerchant.save();

    // Respond with success
    res.status(200).json({
      message: 'Merchant account created successfully',
      data: newMerchant
    });
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate and process form data here
    if (!email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Check if the email is already in use
    const existingMerchant = await Merchant.findOne({ email });
    if (!existingMerchant) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Check password
    const isPasswordCorrect = await bcrypt.compare(password, existingMerchant.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate a JWT token
    const token = jwt.sign({ id: existingMerchant._id }, 'jfjkdkjjkjdskjbkjsdbvbjvbsjvbahdhdvhjdjhdc');

    // Respond with success
    res.status(200).json({
      message: 'Login successful',
      token
    });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { signup, login };