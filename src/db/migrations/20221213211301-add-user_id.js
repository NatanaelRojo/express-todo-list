"use strict";

const { query } = require("express");
const { TODOS_TABLE, todoSchema } = require("../models/todo.model");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(TODOS_TABLE, "user_id", {
      field: "user_id",
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: USER_TABLE,
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn(TODOS_TABLE, "user_id");
  },
};
