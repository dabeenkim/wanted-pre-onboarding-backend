const Joi = require("joi");

const authSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "string.email": "이메일 주소 형식이 올바르지 않습니다.",
    "any.required": "이메일을 입력해주세요.",
    "string.empty": "이메일을 입력해주세요.",
  }),
  password: Joi.string().required().min(8).messages({
    "any.required": "비밀번호를 입력해주세요.",
    "string.empty": "비밀번호를 입력해주세요.",
    "string.min": "8자이상 입력해주세요.",
  }),
  confirm: Joi.string().required().min(8).messages({
    "any.required": "비밀번호 확인을 위해 입력해주세요.",
    "string.empty": "비밀번호 확인을 위해 입력해주세요.",
    "string.min": "8자이상 입력해주세요.",
  }),
});
module.exports = authSchema;
