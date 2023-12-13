const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'please fill required details'],
  },
  password: {
    type: String,
    required: [true, 'please fill required details'],
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
