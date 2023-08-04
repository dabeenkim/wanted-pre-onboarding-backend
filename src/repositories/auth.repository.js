class UserRepository {
  constructor() {}

  signup = async (email, hashedPassword) => {
    await this.Users.create({ email, password: hashedPassword });
  };
}

module.exports = UserRepository;
