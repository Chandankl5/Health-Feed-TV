const express = require("express");

const ChannelController = require("../../controllers/channel/ChannelController");

const router = express.Router();

router.post("/create", ChannelController.create);

router.post("/subscribe", ChannelController.subscribe);

router.use((error, req, res) => {
  res.send(error);
});

module.exports = router;
