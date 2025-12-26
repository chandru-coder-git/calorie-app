const mongoose = require('mongoose');

const consumeSchema = new mongoose.Schema({
  foodId: { type: mongoose.Schema.Types.ObjectId, ref: 'Food' },
  date: String,
  quantity : Number,
  consume_calories : Number
});

module.exports = mongoose.model('Consume', consumeSchema);
