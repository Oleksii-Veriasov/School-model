const mongoose = require('mongoose');

const GroupsSchema = mongoose.Schema({
  groupsName: String,
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Students' }],
}, {
  timestamps: true,
});

module.exports = mongoose.model('Groups', GroupsSchema);
