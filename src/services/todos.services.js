const boom = require("@hapi/boom");
const getConnection = require("../libs/postgres");
const pool = require("../libs/postgres.pool");
const data = [
  {
    id: 1,
    name: "Estudiar TailWind",
    description: "Dedicar tres horas diarias ",
    reminder: false,
    completed: false,
  },
  {
    id: 2,
    name: "Tarea 2",
    description: "Descripcion 2",
    reminder: false,
    completed: false,
  },
  {
    id: 3,
    name: "Tarea 3",
    description: "Descripcion 3",
    reminder: false,
    completed: false,
  },
];

class TodosServices {
  constructor() {
    this.todos = data;
    this.pool = pool;
    this.pool.on("error", (err) => console.error(err));
  }

  async getAll() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.todos);
      }, 1000);
    });
  }

  async getOne(todoId) {
    const todo = this.todos.find((todo) => todoId === todo.id);
    if (!todo) {
      throw boom.notFound("Not found");
    }
    return todo;
  }

  async create(todoData) {
    const newTodo = {
      id: this.todos.length + 1,
      ...todoData,
    };
    this.todos.push(newTodo);
    return newTodo;
  }

  async update(todoId, data) {
    const index = this.todos.findIndex((todo) => todoId === todo.id);
    if (index === -1) {
      throw boom.notFound("Not found");
    }
    const originalTodo = this.todos[index];
    this.todos[index] = {
      ...originalTodo,
      ...data,
    };
    return this.todos[index];
  }

  async delete(todoId) {
    const index = this.todos.findIndex((todo) => todoId === todo.id);
    if (index === -1) {
      throw boom.notFound("Not found");
    }
    this.todos.splice(index, 1);
    return todoId;
  }

  async prueba() {
    //const client = await getConnection();
    const query = "select *from prueba";
    const response = await this.pool.query(query);
  return response.rows; 
  }
}

module.exports = TodosServices;
