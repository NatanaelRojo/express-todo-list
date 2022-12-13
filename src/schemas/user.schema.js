const joi = require("joi");

const id = joi.number();
const firstname = joi.string();
const lastname = joi.string();
const email = joi.string().email();
const username = joi.string().alphanum();
const password = joi.string().min(8);

const getUserSchema = joi.object({
  id: id.required(),
});

const createUserSchema = joi.object({
  firstname: firstname.required(),
  lastname: lastname.required(),
  email: email.required(),
  username: username.required(),
  password: password.required(),
});

const updateUserSchema = joi.object({
  firstname: firstname.optional(),
  lastname: lastname.optional(),
  email: email.optional(),
  username: username.optional(),
  password: password.optional(),
});

module.exports = {
  getUserSchema,
  createUserSchema,
  updateUserSchema,
};
