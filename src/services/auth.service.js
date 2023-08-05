const Boom = require("boom");
const AuthRepository = require("../repositories/auth.repository");
const authSchema = require("../validation/authValidator");
const loginSchema = require("../validation/loginValidator");
const JWT = require("jsonwebtoken");
const bcrypt = require("bcrypt");

class AuthService {
  authRepository = new AuthRepository();

  signup = async (singupData) => {
    const { email, password, confirm } = await authSchema.validateAsync(
      singupData
    );
    const findEmail = await this.authRepository.findEmail(email);
    if (findEmail && findEmail.email === singupData.email) {
      throw Boom.conflict("이미 존재하는 이메일입니다.");
    }
    if (password !== confirm) {
      throw Boom.badRequest("비밀번호가 일치하지 않습니다.");
    }
    const hashedPassword = await bcrypt.hash(
      password,
      Number(process.env.SALT_PASSWORD)
    );
    const newSingup = await this.authRepository.signup(email, hashedPassword);
    return newSingup;
  };

  login = async (loginData) => {
    const { email, password } = await loginSchema.validateAsync(loginData);
    const userData = await this.authRepository.checkData(email);
    const makeToken = JWT.sign({ email: userData.email }, "env.SECRET_KEY");
    const checkPassword = await bcrypt.compare(password, userData.password);
  };
}

module.exports = AuthService;
