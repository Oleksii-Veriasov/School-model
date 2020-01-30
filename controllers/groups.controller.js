const Groups = require('../models/groups.model.js');

// Create and Save a new Group
exports.create = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: 'Groups content can not be empty',
    });
  }
  // Create a Group
  const group = new Groups({
    groupsName: req.body.groupsName,
    members: req.body.members,
  });

  // Save Group in the database
  group.save()
    .then((data) => {
      res.send(data);
    }).catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the new Group.',
      });
    });
};


// Retrieve and return all Groups from the database.
exports.findAll = (req, res) => {
  Groups.find()
    .then((groups) => {
      res.send(groups);
    }).catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving list of groups.',
      });
    });
};

// Find a single group with a groupId
exports.findOne = (req, res) => {
  Groups.findById(req.params.groupId)
    .then((group) => {
      if (!group) {
        return res.status(404).send({
          message: `Not found Group with id ${req.params.groupId}`,
        });
      }
      res.send(group);
    }).catch((err) => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: `Not found Group with id ${req.params.groupId}`,
        });
      }
      return res.status(500).send({
        message: `Error retrieving group with id ${req.params.groupId}`,
      });
    });
};

// Update a Group identified by the groupId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    return res.status(400).send({
      message: 'Group new data can not be empty',
    });
  }

  // Find group and update it with the request body
  Groups.findByIdAndUpdate(req.params.groupId, {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      age: req.body.age,
      experience: req.body.experience,
      startDate: req.body.startDate,
      specialization: req.body.specialization,
    }, { new: true })
    .then((group) => {
      if (!group) {
        return res.status(404).send({
          message: `Not found group with id ${req.params.groupId}`,
        });
      }
      res.send(group);
    }).catch((err) => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: `Not found group with id ${req.params.groupId}`,
        });
      }
      return res.status(500).send({
        message: `Error updating group data with id ${req.params.groupId}`,
      });
    });
};

// Delete a group with the specified groupId in the request
exports.delete = (req, res) => {
  Groups.findByIdAndRemove(req.params.groupId)
    .then((group) => {
      if (!group) {
        return res.status(404).send({
          message: `Not found group with id ${req.params.groupId}`,
        });
      }
      res.send({ message: 'Group deleted successfully!' });
    }).catch((err) => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: `Not found group with id ${req.params.groupId}`,
        });
      }
      return res.status(500).send({
        message: `Could not delete group with id ${req.params.groupId}`,
      });
    });
};
