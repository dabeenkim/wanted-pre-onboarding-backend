const { Users } = require("../../models");

class UserRepository extends Users {
  constructor() {
    super();
  }

  findEmail = async (email) => {
    return await Users.findOne({ where: { email } });
  };
  signup = async (email, hashedPassword) => {
    return await Users.create({ email, password: hashedPassword });
  };

  checkData = async (email) => {
    const user = await Users.findOne({
      where: { email },
    });
    return user;
  };
}

module.exports = UserRepository;
