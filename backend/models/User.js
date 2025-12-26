const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  weight: Number,
  height: Number,
  gender: String,
  calorieGoal: Number
});

module.exports = mongoose.model('User', userSchema);
