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

const eventSchema = Joi.object({
  eventName: Joi.string().required(),
  eventType: Joi.string().lowercase().required(),
  eventDate: Joi.required(),
  phoneNumber: Joi.string()
    .regex(/^[0-9]{10}$/)
    .messages({ "string.pattern.base": `Phone number must have 10 digits.` })
    .required(),
  cityId: Joi.number().required(),
  address: Joi.string().required(),
  pincode: Joi.number().required(),
  gender: Joi.string(),
  memberName: Joi.string(),
  memberOneName: Joi.string(),
  memberTwoName: Joi.string(),
});

module.exports = { loginSchema, activePlanSchema, cakeSchema, eventSchema };
