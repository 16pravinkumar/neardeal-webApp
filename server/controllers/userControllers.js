const path = require('path');
const Merchant = require('../models/signup');

submitForm = async (req, res) => {
    try {
      const { email, storeName, password, confirmPassword, dob, contact, category, storeAddress, city, country, zip } = req.body;
      const storeLogo = req.file;  // Access uploaded file
      console.log(req.body);
  
      // Validate and process form data here
      // if (!email || !storeName || !password || !confirmPassword || !dob || !contact || !category || !storeAddress || !city || !country || !zip) {
      //   return res.status(400).json({ message: 'All fields are required' });
      // }
  
      // Check password confirmation
      // if (password !== confirmPassword) {
      //   return res.status(400).json({ message: 'Passwords do not match' });
      // }
  
      // Create a new Merchant document
      const newMerchant = new Merchant({
        email,
        storeName,
        password,
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


  module.exports = { submitForm };