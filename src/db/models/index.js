const { Todo, todoSchema } = require("./todo.model");
const { User, userSchema } = require("./user.model");

const setupModels = (sequelize) => {
  Todo.init(todoSchema, Todo.config(sequelize));
  User.init(userSchema, User.config(sequelize));
};

module.exports = setupModels;
