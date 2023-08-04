const Boom = require("boom");
const AuthRepository = require("../repositories/auth.repository");
const authSchema = require("../validation/authValidator");
const createHashPassword = require("../middleware/crypto");

class AuthService {
  authRepository = new AuthRepository();

  signup = async (singupData) => {
    const { email, password, confirm } = await authSchema.validateAsync(
      singupData
    );
    if (password !== confirm) {
      throw Boom.badRequest("비밀번호가 일치하지 않습니다.");
    }
    const hashedPassword = await createHashPassword(password);
    const newSingup = await this.authRepository(email, hashedPassword);
    return newSingup;
  };
}

module.exports = AuthService;
