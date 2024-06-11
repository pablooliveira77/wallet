import Joi from 'joi';

// Definir o schema de validação usando Joi
const userSchema = Joi.object({
  nome: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  create_date: Joi.date().required(),
});

export default userSchema;
