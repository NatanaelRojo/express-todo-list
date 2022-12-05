const express = require("express");
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

router.get("/:id", async (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);
    const todo = await controller.getOne(id);
    res.status(200).json(todo);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res) => {
  const todoData = req.body;
  const createdTodo = await controller.create(todoData);
  res.status(201).json(createdTodo);
});

router.patch("/:id", async (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);
    const newData = req.body;
    const updatedTodo = await controller.update(id, newData);
    res.status(200).json(updatedTodo);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);
    const deletedTodoId = await controller.delete(id);
    res.status(200).json(deletedTodoId);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
