const express = require("express");
const validatorHandler = require("../middlewares/validatorHandler");
const {
  getTodoSchema,
  createTodoSchema,
  updateTodoSchema,
} = require("../schemas/todo.schema");
const TodosServices = require("../services/todos.services");

const controller = new TodosServices();

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const todos = await controller.getAll();
    res.status(200).json(todos);
  } catch (error) {
    next(error);
  }
});

router.get(
  "/:id",
  validatorHandler(getTodoSchema, "params"),
  async (req, res, next) => {
    try {
      const id = parseInt(req.params.id, 10);
      const todo = await controller.getOne(id);
      res.status(200).json(todo);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  "/",
  validatorHandler(createTodoSchema, "body"),
  async (req, res) => {
    const todoData = req.body;
    const createdTodo = await controller.create(todoData);
    res.status(201).json(createdTodo);
  }
);

router.patch(
  "/:id",
  validatorHandler(getTodoSchema, "params"),
  validatorHandler(updateTodoSchema, "body"),
  async (req, res, next) => {
    try {
      const id = parseInt(req.params.id, 10);
      const newData = req.body;
      const updatedTodo = await controller.update(id, newData);
      res.status(200).json(updatedTodo);
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  "/:id",
  validatorHandler(getTodoSchema, "params"),
  async (req, res, next) => {
    try {
      const id = parseInt(req.params.id, 10);
      const deletedTodoId = await controller.delete(id);
      res.status(200).json(deletedTodoId);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
