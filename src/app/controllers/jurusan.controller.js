const db = require("../models");
const Jurusan = db.jurusan;
const Op = db.Sequelize.Op;
// Create and Save a new Jurusan
exports.create = (req, res) => {
  // Validate request
  if (!req.body.kode_jurusan) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Create a Jurusan
  const jurusan = {
    kode_jurusan: req.body.kode_jurusan,
    nama_jurusan: req.body.nama_jurusan,
    jenjang_jurusan: req.body.jenjang_jurusan
  };
  // Save Jurusan in the database
  Jurusan.create(jurusan)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Jurusan."
      });
    });
};
// Retrieve all Jurusan from the database.
exports.findAll = (req, res) => {
  const kode_jurusan = req.query.kode_jurusan;
  var condition = kode_jurusan ? { kode_jurusan: { [Op.like]: `%${kode_jurusan}%` } } : null;
  Jurusan.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving jurusan."
      });
    });
};
// Find a single Jurusan with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Jurusan.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Jurusan with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Jurusan with id=" + id
      });
    });
};
// Update a Jurusan by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  Jurusan.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Jurusan was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Jurusan with id=${id}. Maybe Jurusan was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Jurusan with id=" + id
      });
    });
};
// Delete a Jurusan with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  Jurusan.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Jurusan was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Jurusan with id=${id}. Maybe Jurusan was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Jurusan with id=" + id
      });
    });
};
// Delete all Jurusan from the database.
exports.deleteAll = (req, res) => {
  Jurusan.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Jurusan were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all jurusan."
      });
    });
};
