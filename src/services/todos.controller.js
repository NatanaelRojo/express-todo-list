const boom = require("@hapi/boom");
const { QueryTypes } = require("sequelize");
const { models } = require("../libs/sequelize");

class TodosController {
  constructor() {
    // empty
  }

  async getAll(query) {
    const options = {};
    const { limit, offset } = query;
    if (limit && offset) {
      options.limit = limit;
      options.offset = offset;
    }
    const todos = await models.Todo.findAll(options);
    return todos;
  }

  async getOne(todoId) {
    const todo = await models.Todo.findByPk(todoId, { include: ["user"] });
    if (!todo) {
      throw boom.notFound("Not found");
    }
    return todo;
  }

  async create(todoData) {
    const newTodo = await models.Todo.create(todoData);
    return newTodo;
  }

  async update(todoId, data) {
    const todo = await this.getOne(todoId);
    const updatedTodo = await todo.update(data);
    return updatedTodo;
  }

  async delete(todoId) {
    const todo = await this.getOne(todoId);
    const removedTodoId = todo.id;
    await todo.destroy();
    return removedTodoId;
  }

  async prueba() {
    //const client = await getConnection();
    const query = "select *from prueba";
    const [data, metadata] = await sequelize.query(query);
    return data;
  }
}

module.exports = TodosController;
