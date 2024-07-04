import Joi from "joi";

const userSchema = Joi.object({
  nome: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  created_at: Joi.date(),
});

export default userSchema;
