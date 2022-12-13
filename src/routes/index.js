const express = require("express");
const todos = require("./todos.router");
const users = require("./users.router");

const routes = (app) => {
  const router = express.Router();
  app.use("/api/v1", router);
  router.use("/todos", todos);
  router.use("/users", users);
};

module.exports = routes;
