import Joi from "joi";

export const createUser = Joi.object({
  nome: Joi.string().required().min(3),
  email: Joi.string().email().required().min(3),
  password: Joi.string().min(3).required(),
  createdAt: Joi.date(),
});
