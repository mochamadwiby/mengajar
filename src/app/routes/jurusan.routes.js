module.exports = app => {
  const jurusan = require("../controllers/jurusan.controller.js");
  var router = require("express").Router();
  // Create a new Jurusan
  router.post("/", jurusan.create);
  // Retrieve all Jurusan
  router.get("/", jurusan.findAll);
  // Retrieve a single Jurusan with id
  router.get("/:id", jurusan.findOne);
  // Update a Jurusan with id
  router.put("/:id", jurusan.update);
  // Delete a Jurusan with id
  router.delete("/:id", jurusan.delete);
  // Delete all Jurusan
  router.delete("/", jurusan.deleteAll);
  app.use('/api/jurusan', router);
};