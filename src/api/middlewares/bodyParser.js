const express = require("express");

const bodyParser = require("body-parser");

const router = express.Router();

const jsonParser = bodyParser.json();

const urlencodedParser = bodyParser.urlencoded({ extended: true });

router.use(jsonParser);
router.use(urlencodedParser);

module.exports = router;
