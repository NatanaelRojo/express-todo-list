"use strict";

const { todoSchema, TODOS_TABLE } = require("../models/todo.model");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(TODOS_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      description: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      reminder: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        default: false,
      },
      completed: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        default: false,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(TODOS_TABLE);
  },
};
