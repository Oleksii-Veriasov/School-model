const mongoose = require('mongoose');

const StudentsSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number,
    group: { type: mongoose.Schema.Types.ObjectId, ref: 'Groups' }
}, {
    timestamps: true
});

module.exports = mongoose.model('Students', StudentsSchema);