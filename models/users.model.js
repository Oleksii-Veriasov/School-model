const mongoose = require('mongoose');

const UsersSchema = mongoose.Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
}, {
  timestamps: true,
});

module.exports = mongoose.model('Users', UsersSchema);
