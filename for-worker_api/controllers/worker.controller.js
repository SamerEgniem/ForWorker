const db = require("../db/models");
const Worker = db.worker;
const Op = db.Sequelize.Op;

// Create and Save a new Worker
exports.create = (req, res) => {
    // Validate request
    if (!req.body.firstName && !req.body.lastName && !req.body.phoneNumber && !req.body.email && !req.body.password) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Worker
    const worker = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
        password: req.body.password
    };

    // Save Worker in the database
    Worker.create(worker)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Tutorial."
            });
        });
};

// Retrieve all Workers from the database.
exports.findAll = (req, res) => {
    const firstName = req.query.firstName;
    var condition = firstName ? {firstName: {[Op.iLike]: `%${firstName}%`}} : null;

    Worker.findAll({where: condition})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving workers."
            });
        });
};

// Find a single Worker with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Worker.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Worker with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Worker with id=" + id
            });
        });
};

// Update a Worker by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Worker.update(req.body, {
        where: {id: id}
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Worker was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Worker with id=${id}. Maybe Worker was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Worker with id=" + id
            });
        });
};

// Delete a Worker with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Worker.destroy({
        where: {id: id}
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Worker was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Worker with id=${id}. Maybe Worker was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Worker with id=" + id
            });
        });
};

// Delete all Workers from the database.
exports.deleteAll = (req, res) => {
    Worker.destroy({
        where: {}, truncate: false
    })
        .then(nums => {
            res.send({message: `${nums} Workers were deleted successfully!`});
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while removing all workers."
            });
        });
};
// Find all published Tutorials
exports.findAllPublished = (req, res) => {
    Worker.findAll({where: {published: true}})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving workers."
            });
        });
};