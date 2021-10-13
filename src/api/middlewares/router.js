const express = require("express");

const channelRoutes = require("../routes/ChannelRoutes");
const ContentRoutes = require("../routes/ContentRoutes");

const router = express.Router();

router.use("/channel", channelRoutes);
router.use("/content", ContentRoutes);

module.exports = router;
