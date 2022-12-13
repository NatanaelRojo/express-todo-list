const { Model, DataTypes, Sequelize } = require("sequelize");

const USER_TABLE = "users";

const userSchema = {
  id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  firstname: {
    type: DataTypes.STRING,
  },
  lastname: {
    type: DataTypes.STRING,
  },
  username: {
    type: DataTypes.STRING,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    field: "created_at",
  },
};

class User extends Model {
  static config(sequelize) {
    return {
      sequelize,
      modelName: "User",
      tableName: USER_TABLE,
      timestamps: false,
    };
  }
}

module.exports = {
  USER_TABLE,
  User,
  userSchema,
};
