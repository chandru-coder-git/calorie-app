const Food = require('../models/Food');

exports.getFoods = async (req, res) => {
  res.json(await Food.find());

};
exports.getFoodById = async(req, res) =>{
  console.log('params id '+req.params.id)
  res.json(await Food.findById(req.params.id));
};

exports.addFood = async (req, res) => {
  res.json(await Food.create(req.body));
};

exports.updateFood = async (req, res) => {
  res.json(await Food.findByIdAndUpdate(req.params.id, req.body, { new: true }));
};

exports.deleteFood = async (req, res) => {
  res.json(await Food.findByIdAndDelete(req.params.id));
};
