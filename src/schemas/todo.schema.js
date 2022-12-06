const joi = require("joi");

const id = joi.number().integer();
const name = joi.string().min(5);
const description = joi.string().alphanum();
const reminder = joi.bool();
const completed = joi.bool();

const createTodoSchema = joi.object({
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

const getTodoSchema = joi.object({
  id: id.required(),
});

module.exports = {
  createTodoSchema,
  updateTodoSchema,
  getTodoSchema,
};
