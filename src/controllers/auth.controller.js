require("dotenv").config();
const loginSchema = require("../validation/loginValidator");

const AuthService = require("../services/auth.service");

class AuthController {
  authService = new AuthService();

  /**
   * 회원가입
   */
  signup = async (req, res, next) => {
    try {
      const singupData = req.body;

      const newSignup = await this.authService.signup(singupData);
      res
        .status(200)
        .json({ message: "회원가입이 정상적으로 완료되었습니다." });
    } catch (error) {
      throw error;
    }
  };

  login = async (req, res, next) => {
    try {
      const { email, password } = await loginSchema.validateAsync(req.body);
      const login = await this.authService.login(email, password);
      const token = await this.authService.makeToken(email);

      res.cookie("authorization", `Bearer ${token}`);
      res.status(200).json({ message: "로그인 되었습니다." });
    } catch (error) {
      throw error;
    }
  };
}

module.exports = AuthController;
