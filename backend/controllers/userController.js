const User = require('../models/User');

exports.getUser = async (req, res) => {
  const user = await User.findOne();
  res.json(user);
};

exports.updateUser = async (req, res) => {
  let user = await User.findOne();
  if (user) {
    user = await User.findByIdAndUpdate(user._id, req.body, { new: true });
  } else {
    user = await User.create(req.body);
  }
  res.json(user);
};
