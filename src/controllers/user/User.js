const UserModel = require("../../model/schema").User;

class User {
  constructor({ name, type }) {
    this.name = name;
    this.type = type;
  }

  static async findOneById(id) {
    return UserModel.findOne({ where: { id } });
  }
}

module.exports = User;
