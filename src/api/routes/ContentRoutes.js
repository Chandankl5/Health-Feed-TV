const express = require("express");

const ContentController = require("../../controllers/content/ContentController");

const router = express.Router();

router.post("/create", ContentController.create);

router.use((error, req, res) => {
  res.send(error);
});

module.exports = router;
