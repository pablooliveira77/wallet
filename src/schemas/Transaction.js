import Joi from "joi";
import { ObjectId } from "mongodb";

const objectId = Joi.string().custom((value, helpers) => {
  if (!ObjectId.isValid(value)) {
    return helpers.error("any.invalid");
  }
  return value;
}, "ObjectId validation");

const TransactionSchema = Joi.object({
  value: Joi.number().required(),
  description: Joi.string().required(),
  type: Joi.string().required(),
  userId: objectId.required(),
  created_at: Joi.date(),
});

export default TransactionSchema;
