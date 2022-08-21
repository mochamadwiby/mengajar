const db = require("../models");
const Dosen = db.dosen;
const Op = db.Sequelize.Op;
// Create and Save a new Dosen
exports.create = (req, res) => {
  // Validate request
  if (!req.body.nip_dosen) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Create a Dosen
  const dosen = {
    nip_dosen: req.body.nip_dosen,
    nama_dosen: req.body.nama_dosen,
    alamat_dosen: req.body.alamat_dosen
  };
  // Save Dosen in the database
  Dosen.create(dosen)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Dosen."
      });
    });
};
// Retrieve all Dosen from the database.
exports.findAll = (req, res) => {
  const nip_dosen = req.query.nip_dosen;
  var condition = nip_dosen ? { nip_dosen: { [Op.like]: `%${nip_dosen}%` } } : null;
  Dosen.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving dosen."
      });
    });
};
// Find a single Dosen with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Dosen.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Dosen with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Dosen with id=" + id
      });
    });
};
// Update a Dosen by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  Dosen.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Dosen was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Dosen with id=${id}. Maybe Dosen was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Dosen with id=" + id
      });
    });
};
// Delete a Dosen with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  Dosen.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Dosen was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Dosen with id=${id}. Maybe Dosen was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Dosen with id=" + id
      });
    });
};
// Delete all Dosen from the database.
exports.deleteAll = (req, res) => {
  Dosen.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Dosen were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all dosen."
      });
    });
};
