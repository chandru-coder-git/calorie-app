const Consume = require('../models/Consume');
const Food = require('../models/Food');

exports.getConsume = async (req, res) => {
  res.json(await Consume.find().populate('foodId'));
};

exports.addConsume = async (req, res) => {
  res.json(await Consume.create(req.body));
};

exports.updateConsume = async (req, res) => {
  res.json(await Consume.findByIdAndUpdate(req.params.id, req.body, { new: true }));
};

exports.deleteConsume = async (req, res) => {
  res.json(await Consume.findByIdAndDelete(req.params.id));
};
