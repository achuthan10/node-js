const user = require("../controllers/login.controller");

const express = require("express");
const router = express.Router();

module.exports = (app) => {
  // login
  router.post("/login", user.login);

  app.use("/api", router);
};
