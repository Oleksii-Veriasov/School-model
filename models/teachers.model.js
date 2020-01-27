const mongoose = require('mongoose');

const TeachersSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('Teachers', TeachersSchema);