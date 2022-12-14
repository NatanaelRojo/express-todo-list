const boom = require("@hapi/boom");
const { models } = require("../libs/sequelize");

class UsersController {
  constructor() {
    // empty
  }

  async getAll() {
    const users = await models.User.findAll();
    return users;
  }

  async getOne(userId) {
    const user = await models.User.findByPk(userId, { include: ["todos"] });
    if (!user) {
      throw boom.notFound("User not found");
    }
    return user;
  }

  async create(user) {
    const newUser = await models.User.create(user);
    return newUser;
  }

  async update(userId, data) {
    const user = await this.getOne(userId);
    const updatedUser = await user.update(data);
    return updatedUser;
  }

  async delete(userId) {
    const user = await this.getOne(userId);
    const deletedUserId = user.id;
    await user.destroy();
    return deletedUserId;
  }
}

module.exports = UsersController;
