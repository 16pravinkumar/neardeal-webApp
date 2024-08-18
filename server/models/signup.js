const mongoose = require('mongoose');

const merchantSchema = new mongoose.Schema({
  email: { type: String },
  storeName: { type: String },
  password: { type: String },
  dob: { type: Date },
  contact: { type: String },
  category: { type: String },
  storeAddress: { type: String },
  city: { type: String },
  country: { type: String },
  zip: { type: String },
  storeLogo: { type: String } // URL or path to the stored logo image
}, { timestamps: true });

const Merchant = mongoose.model('Merchant', merchantSchema);

module.exports = Merchant;
