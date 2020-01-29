const Lectures = require('../models/lectures.model.js');

// Create and Save a new lecture
exports.create = (req, res) => {
    console.log(req.body)
    if (!req.body) {
        return res.status(400).send({
            message: "Lecture content can not be empty"
        });
    }
    // Create a lecture
    const lecture = new Lectures({
        topic: req.body.topic,
        teacher: req.body.teacher,
        group: req.body.group,
        classroom: req.body.classroom,
        timetable: req.body.timetable,
    });

    // Save lecture in the database
    lecture.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the new Lecture."
            });
        });
};


// Retrieve and return all lecture from the database.
exports.findAll = (req, res) => {
    Lectures.find().populate('teacher').populate('group').populate('timetable')
        .then(lectures => {
            res.send(lectures);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving list of lectures."
            });
        });
};

// Find a single lecture with a lectureId
exports.findOne = (req, res) => {
    Lectures.findById(req.params.lectureId).populate('teacher').populate('group').populate('timetable')
        .then(lecture => {
            if (!lecture) {
                return res.status(404).send({
                    message: "Not found lecture with id " + req.params.lectureId
                });
            }
            res.send(lecture);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Not found lecture with id " + req.params.lectureId
                });
            }
            return res.status(500).send({
                message: "Error retrieving lecture with id " + req.params.lectureId
            });
        });
};

// Update a lecture identified by the lectureId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        return res.status(400).send({
            message: "Lecture new data can not be empty"
        });
    }

    // Find the lecture and update it with the request body
    Lectures.findByIdAndUpdate(req.params.lectureId, {
            topic: req.body.topic,
            teacher: req.body.teacher,
            group: req.body.group,
            classroom: req.body.classroom,
            timetable: req.body.timetable,
        }, { new: true })
        .then(lecture => {
            if (!lecture) {
                return res.status(404).send({
                    message: "Not found lecture with id " + req.params.lectureId
                });
            }
            res.send(lecture);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Not found lecture with id " + req.params.lectureId
                });
            }
            return res.status(500).send({
                message: "Error updating lecture data with id " + req.params.lectureId
            });
        });
};

// Delete a lecture with the specified lectureId in the request
exports.delete = (req, res) => {
    Lectures.findByIdAndRemove(req.params.lectureId)
        .then(lecture => {
            if (!lecture) {
                return res.status(404).send({
                    message: "Not found lecture with id " + req.params.lectureId
                });
            }
            res.send({ message: "Lecture deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Not found lecture with id " + req.params.lectureId
                });
            }
            return res.status(500).send({
                message: "Could not delete lecture with id " + req.params.lectureId
            });
        });
};