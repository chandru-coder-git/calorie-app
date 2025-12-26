const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  name: String,
  calories: Number,
  category: String
});

module.exports = mongoose.model('Food', foodSchema);
