const Timetables = require('../models/timetables.model.js');

// Create and Save a new Timetable
exports.create = (req, res) => {
    console.log(req.body)
    if (!req.body) {
        return res.status(400).send({
            message: "Timetable content can not be empty"
        });
    }
    // Create a timetable
    const timetable = new Timetables({
        lessonNumber: req.body.lessonNumber,
        lessonTime: req.body.lessonTime,
    });

    // Save Timetable in the database
    timetable.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the new Timetable."
            });
        });
};


// Retrieve and return Timetable from the database.
exports.findAll = (req, res) => {
    Timetables.find()
        .then(timetable => {
            res.send(timetable);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving the Timetable."
            });
        });
};

// Find a single timetable with a timetableId
exports.findOne = (req, res) => {
    Timetables.findById(req.params.timetableId)
        .then(timetable => {
            if (!timetable) {
                return res.status(404).send({
                    message: "Not found timetable with id " + req.params.timetableId
                });
            }
            res.send(timetable);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Not found timetable with id " + req.params.timetableId
                });
            }
            return res.status(500).send({
                message: "Error retrieving timetable with id " + req.params.timetableId
            });
        });
};

// Update a timetable 
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        return res.status(400).send({
            message: "Timetable new data can not be empty"
        });
    }

    // Find Timetable and update it with the request body
    Timetables.findByIdAndUpdate(req.params.timetableId, {
            lessonNumber: req.body.lessonNumber,
            lessonTime: req.body.lessonTime,
        }, { new: true })
        .then(timetable => {
            if (!timetable) {
                return res.status(404).send({
                    message: "Not found timetable with id " + req.params.timetableId
                });
            }
            res.send(timetable);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Not found timetable with id " + req.params.timetableId
                });
            }
            return res.status(500).send({
                message: "Error updating timetable data with id " + req.params.timetableId
            });
        });
};

// Delete a timetable with the specified timetableId in the request
exports.delete = (req, res) => {
    Timetables.findByIdAndRemove(req.params.timetableId)
        .then(timetable => {
            if (!timetable) {
                return res.status(404).send({
                    message: "Not found student with id " + req.params.timetableId
                });
            }
            res.send({ message: "Timetable deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Not found timetable with id " + req.params.timetableId
                });
            }
            return res.status(500).send({
                message: "Could not delete timetable with id " + req.params.timetableId
            });
        });
};