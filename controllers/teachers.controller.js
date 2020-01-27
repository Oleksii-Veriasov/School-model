const Teachers = require('../models/teachers.model.js');

// Create and Save a new teacher
exports.create = (req, res) => {
    console.log(req.body)
    if (!req.body) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    // Create a Teacher
    const teacher = new Teachers({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age
    });

    // Save Teacher in the database
    teacher.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the new Teacher."
            });
        });
};


// Retrieve and return all teachers from the database.
exports.findAll = (req, res) => {
    Teachers.find()
        .then(teachers => {
            res.send(teachers);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving list of teachers."
            });
        });
};

// Find a single teacher with a teacherId
exports.findOne = (req, res) => {
    Teachers.findById(req.params.teacherId)
        .then(teacher => {
            if (!teacher) {
                return res.status(404).send({
                    message: "Not found Teacher with id " + req.params.teacherId
                });
            }
            res.send(teacher);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Not found Teacher with id " + req.params.teacherId
                });
            }
            return res.status(500).send({
                message: "Error retrieving teacher with id " + req.params.teacherId
            });
        });
};

// Update a teacher identified by the teacherId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        return res.status(400).send({
            message: "Teacher new data can not be empty"
        });
    }

    // Find note and update it with the request body
    Teachers.findByIdAndUpdate(req.params.teacherId, {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            age: req.body.age
        }, { new: true })
        .then(teacher => {
            if (!teacher) {
                return res.status(404).send({
                    message: "Not found teacher with id " + req.params.teacherId
                });
            }
            res.send(teacher);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Not found teacher with id " + req.params.teacherId
                });
            }
            return res.status(500).send({
                message: "Error updating teacher data with id " + req.params.teacherId
            });
        });
};

// Delete a teacher with the specified teacherId in the request
exports.delete = (req, res) => {
    Teachers.findByIdAndRemove(req.params.teacherId)
        .then(teacher => {
            if (!teacher) {
                return res.status(404).send({
                    message: "Not found teacher with id " + req.params.teacherId
                });
            }
            res.send({ message: "Note deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Not found teacher with id " + req.params.teacherId
                });
            }
            return res.status(500).send({
                message: "Could not delete teacher with id " + req.params.teacherId
            });
        });
};