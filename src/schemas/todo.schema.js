const joi = require("joi");

const id = joi.number().integer();
const userId = joi.number().integer();
const name = joi.string().min(5);
const description = joi.string().alphanum();
const reminder = joi.bool();
const completed = joi.bool();
const limit = joi.number().integer();
const offset = joi.number().integer();

const createTodoSchema = joi.object({
  userId: userId.required(),
  name: name.required(),
  description: description.optional(),
  reminder: reminder.required(),
  completed: completed.required(),
});

const updateTodoSchema = joi.object({
  name: name.optional(),
  description: description.optional(),
  reminder: reminder.optional(),
  completed: completed.optional(),
});

const getAllTodoSchema = joi.object({
  limit: limit.optional(),
  offset: offset.when("limit", {
    is: joi.number().integer(),
    then: joi.required(),
  }),
});

const getTodoSchema = joi.object({
  id: id.required(),
});

module.exports = {
  createTodoSchema,
  updateTodoSchema,
  getTodoSchema,
  getAllTodoSchema,
};
