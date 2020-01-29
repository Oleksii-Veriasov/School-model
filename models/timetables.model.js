const mongoose = require('mongoose');

const TimetablesSchema = mongoose.Schema({
    lessonNumber: Number,
    lessonTime: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('Timetables', TimetablesSchema);