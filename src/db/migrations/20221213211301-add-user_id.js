"use strict";

const { query } = require("express");
const { TODOS_TABLE, todoSchema } = require("../models/todo.model");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(TODOS_TABLE, "user_id", todoSchema.userId);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn(TODOS_TABLE, "user_id");
  },
};
