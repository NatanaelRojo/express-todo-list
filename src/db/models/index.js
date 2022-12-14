const { Todo, todoSchema } = require("./todo.model");
const { User, userSchema } = require("./user.model");

const setupModels = (sequelize) => {
  Todo.init(todoSchema, Todo.config(sequelize));
  User.init(userSchema, User.config(sequelize));

  User.associate(sequelize.models);
  Todo.associate(sequelize.models);
};

module.exports = setupModels;
