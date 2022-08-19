const db = require("../models");
const Mahasiswa = db.mahasiswa;
const Op = db.Sequelize.Op;
// Create and Save a new Mahasiswa
exports.create = (req, res) => {
  // Validate request
  if (!req.body.nim_mahasiswa) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Create a Mahasiswa
  const mahasiswa = {
    nim_mahasiswa: req.body.nim_mahasiswa,
    nama_mahasiswa: req.body.nama_mahasiswa,
    alamat_mahasiswa: req.body.alamat_mahasiswa
  };
  // Save Mahasiswa in the database
  Mahasiswa.create(mahasiswa)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Mahasiswa."
      });
    });
};
// Retrieve all Mahasiswa from the database.
exports.findAll = (req, res) => {
  const nim_mahasiswa = req.query.nim_mahasiswa;
  var condition = nim_mahasiswa ? { nim_mahasiswa: { [Op.like]: `%${nim_mahasiswa}%` } } : null;
  Mahasiswa.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving mahasiswa."
      });
    });
};
// Find a single Mahasiswa with an nim_mahasiswa
exports.findOne = (req, res) => {
  const nim_mahasiswa = req.params.nim_mahasiswa;
  Mahasiswa.findByPk(nim_mahasiswa)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Mahasiswa with nim=${nim_mahasiswa}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Mahasiswa with nim=" + nim_mahasiswa
      });
    });
};
// Update a Mahasiswa by the nim in the request
exports.update = (req, res) => {
  const nim_mahasiswa = req.params.nim_mahasiswa;
  Mahasiswa.update(req.body, {
    where: { nim_mahasiswa: nim_mahasiswa }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Mahasiswa was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Mahasiswa with nim=${nim_mahasiswa}. Maybe Mahasiswa was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Mahasiswa with nim=" + nim_mahasiswa
      });
    });
};
// Delete a Mahasiswa with the specified nim in the request
exports.delete = (req, res) => {
  const nim_mahasiswa = req.params.nim_mahasiswa;
  Mahasiswa.destroy({
    where: { nim_mahasiswa: nim_mahasiswa }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Mahasiswa was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Mahasiswa with nim=${inim_mahasiswad}. Maybe Mahasiswa was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Mahasiswa with nim=" + nim_mahasiswa
      });
    });
};
// Delete all Mahasiswa from the database.
exports.deleteAll = (req, res) => {
  Mahasiswa.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Mahasiswa were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all mahasiswa."
      });
    });
};
