const { Model, DataTypes, Sequelize } = require("sequelize");

const TODOS_TABLE = "todos";

const todoSchema = {
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
};

class Todo extends Model {
  static config(sequelize) {
    return {
      sequelize,
      modelName: "Todo",
      tableName: TODOS_TABLE,
      timestamps: false,
    };
  }
}

module.exports = {
  TODOS_TABLE,
  todoSchema,
  Todo,
};
