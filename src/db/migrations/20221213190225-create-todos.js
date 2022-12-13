"use strict";

const { todoSchema, TODOS_TABLE } = require("../models/todo.model");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(TODOS_TABLE, todoSchema);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(TODOS_TABLE);
  },
};
