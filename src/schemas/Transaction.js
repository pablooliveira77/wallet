import Joi from 'joi';

const TransactionSchema = Joi.object({
    value: Joi.number().required(),
    description: Joi.string().required(),
    type: Joi.string().required(),
    userId: Joi.string().hex().length(24).required(),
    created_at: Joi.date(),
})

export default TransactionSchema;