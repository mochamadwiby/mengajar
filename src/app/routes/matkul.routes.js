module.exports = app => {
  const matkul = require("../controllers/matkul.controller.js");
  var router = require("express").Router();
  // Create a new Matkul
  router.post("/", matkul.create);
  // Retrieve all Matkul
  router.get("/", matkul.findAll);
  // Retrieve a single Matkul with id
  router.get("/:id", matkul.findOne);
  // Update a Matkul with id
  router.put("/:id", matkul.update);
  // Delete a Matkul with id
  router.delete("/:id", matkul.delete);
  // Delete all Matkul
  router.delete("/", matkul.deleteAll);
  app.use('/api/matkul', router);
};