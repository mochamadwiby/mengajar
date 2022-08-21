module.exports = app => {
  const dosen = require("../controllers/dosen.controller.js");
  var router = require("express").Router();
  // Create a new Dosen
  router.post("/", dosen.create);
  // Retrieve all Dosen
  router.get("/", dosen.findAll);
  // Retrieve a single Dosen with id
  router.get("/:id", dosen.findOne);
  // Update a Dosen with id
  router.put("/:id", dosen.update);
  // Delete a Dosen with id
  router.delete("/:id", dosen.delete);
  // Delete all Dosen
  router.delete("/", dosen.deleteAll);
  app.use('/api/dosen', router);
};