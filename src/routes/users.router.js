const express = require("express");
const validatorHandler = require("../middlewares/validatorHandler");
const {
  getUserSchema,
  createUserSchema,
  updateUserSchema,
} = require("../schemas/user.schema");
const UsersController = require("../services/users.controller");

const controller = new UsersController();
const router = express.Router();

router.get("/", async (req, res) => {
  const users = await controller.getAll();
  res.status(200).json(users);
});

router.get(
  "/:id",
  validatorHandler(getUserSchema, "params"),
  async (req, res) => {
    try {
      const userId = parseInt(req.params.id, 10);
      const user = await controller.getOne(userId);
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  "/",
  validatorHandler(createUserSchema, "body"),
  async (req, res, next) => {
    try {
      const userData = req.body;
      const newUser = await controller.create(userData);
      res.status(201).json(newUser);
    } catch (error) {
      next(error);
    }
  }
);

router.patch(
  "/:id",
  validatorHandler(getUserSchema, "params"),
  async (req, res, next) => {
    try {
      const userId = parseInt(req.params.id, 10);
      const userData = req.body;
      const updatedUser = await controller.update(userId, userData);
      res.status(200).json(updatedUser);
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  "/:id",
  validatorHandler(getUserSchema, "params"),
  async (req, res, next) => {
    try {
      const userId = parseInt(req.params.id, 10);
      const deletedUserId = await controller.delete(userId);
      res.status(200).json(deletedUserId);
    } catch (error) {
      next(erroq);
    }
  }
);

module.exports = router;
