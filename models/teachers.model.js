const mongoose = require('mongoose');

const TeachersSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number,
    experience: Number,
    startDate: Date,
    specialization: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Teachers', TeachersSchema);