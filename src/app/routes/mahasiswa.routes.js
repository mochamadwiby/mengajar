module.exports = app => {
  const mahasiswa = require("../controllers/mahasiswa.controller.js");
  var router = require("express").Router();
  // Create a new Tutorial
  router.post("/", mahasiswa.create);
  // Retrieve all Tutorials
  router.get("/", mahasiswa.findAll);
  // Retrieve a single Tutorial with id
  router.get("/:id", mahasiswa.findOne);
  // Update a Tutorial with id
  router.put("/:id", mahasiswa.update);
  // Delete a Tutorial with id
  router.delete("/:id", mahasiswa.delete);
  // Delete all Tutorials
  router.delete("/", mahasiswa.deleteAll);
  app.use('/api/mahasiswa', router);
};