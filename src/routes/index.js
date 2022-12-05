const express = require("express");
const todos = require("./todos.router");

const routes = (app) => {
  const router = express.Router();
  app.use("/api/v1", router);
  router.use("/todos", todos);
};

module.exports = routes;
