require("dotenv").config();
require("./model/index");

const express = require("express");

const app = express();

const middlewares = require("./api/middlewares/index");

app.use(middlewares);

module.exports = app;
