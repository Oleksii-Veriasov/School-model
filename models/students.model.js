const mongoose = require('mongoose');

const StudentsSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number,
    group: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Students', StudentsSchema);