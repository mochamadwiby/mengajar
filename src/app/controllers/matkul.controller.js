const db = require("../models");
const Matkul = db.matkul;
const Op = db.Sequelize.Op;
// Create and Save a new Matkul
exports.create = (req, res) => {
  // Validate request
  if (!req.body.kode_matkul) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Create a Matkul
  const matkul = {
    kode_matkul: req.body.kode_matkul,
    nama_jurusan: req.body.nama_jurusan,
    jenjang_jurusan: req.body.jenjang_jurusan
  };
  // Save Matkul in the database
  Matkul.create(matkul)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Matkul."
      });
    });
};
// Retrieve all Matkul from the database.
exports.findAll = (req, res) => {
  const kode_matkul = req.query.kode_matkul;
  var condition = kode_matkul ? { kode_matkul: { [Op.like]: `%${kode_matkul}%` } } : null;
  Matkul.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving matkul."
      });
    });
};
// Find a single Matkul with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Matkul.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Matkul with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Matkul with id=" + id
      });
    });
};
// Update a Matkul by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  Matkul.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Matkul was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Matkul with id=${id}. Maybe Matkul was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Matkul with id=" + id
      });
    });
};
// Delete a Matkul with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  Matkul.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Matkul was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Matkul with id=${id}. Maybe Matkul was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Matkul with id=" + id
      });
    });
};
// Delete all Matkul from the database.
exports.deleteAll = (req, res) => {
  Matkul.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Matkul were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all matkul."
      });
    });
};
