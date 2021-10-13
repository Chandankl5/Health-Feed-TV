const express = require("express");

const router = express.Router();

const routerMiddleware = require("./router");
const bodyParser = require("./bodyParser");

router.use(bodyParser);

router.use(routerMiddleware);

module.exports = router;
