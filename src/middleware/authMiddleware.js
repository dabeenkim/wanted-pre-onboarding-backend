require("dotenv").config();

const jwt = require("jsonwebtoken");
const { Users } = require("../../models");

module.exports = async (req, res, next) => {
  const { authorization } = req.cookies;
  const { authType, authToken } = (authorization ?? "").split(" ");

  if (!authToken || authType !== "Bearer") {
    res.status(401).send({
      errorMessage: "로그인 후 이용 가능한 기능입니다.",
    });
    return;
  }
  try {
    const { email } = jwt.verify(authToken, process.env.SECRET_KEY);
    const user = await Users.findOne({ where: { email } });
    if (!user) {
      res.clearCookie("authorization");
      return res
        .status(401)
        .json({ message: "토큰 사용자가 존재하지 않습니다." });
    }
    res.locals.user = user;
    next();
  } catch (error) {
    res.clearCookie("authorization");
    res.status(401).send({
      errorMessage: "로그인 후 이용 가능한 기능입니다.",
    });
  }
};
