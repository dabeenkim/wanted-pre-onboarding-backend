const Boom = require("boom");
const AuthRepository = require("../repositories/auth.repository");
const authSchema = require("../validation/authValidator");
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

  login = async (email, password) => {
    const userData = await this.authRepository.checkData(email);
    const checkPassword = await bcrypt.compare(password, userData.password);
    return checkPassword;
  };
  makeToken = async (email) => {
    const makeToken = JWT.sign({ email: email }, process.env.SECRET_KEY);
    return makeToken;
  };
}

module.exports = AuthService;
