const mongoose = require('mongoose');

const LectionsSchema = mongoose.Schema({
    topic: String,
    teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'Teachers' },
    group: { type: mongoose.Schema.Types.ObjectId, ref: 'Groups' },
    classroom: Number,
    timetable: { type: mongoose.Schema.Types.ObjectId, ref: 'Timetables' },
}, {
    timestamps: true
});

module.exports = mongoose.model('Lections', LectionsSchema);