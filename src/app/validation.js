const Joi = require("joi");

const loginSchema = Joi.object({
  phone: Joi.string()
    .regex(/^[0-9]{10}$/)
    .messages({ "string.pattern.base": `Phone number must have 10 digits.` })
    .required(),
});

const activePlanSchema = Joi.object({
  cakeId: Joi.number().required(),
  itemId: Joi.number().required(),
  discountPercent: Joi.number().required(),
  discountPrice: Joi.number().required(),
  price: Joi.number().required(),
  deliveryCharges: Joi.number().required(),
  payableAmount: Joi.number().required(),
  events: Joi.array(),
});

const cakeSchema = Joi.object({
  name: Joi.string().required(),
  cakeWeight: Joi.string().required(),
  cakePrice: Joi.number().required(),
});

module.exports = { loginSchema, activePlanSchema, cakeSchema };
