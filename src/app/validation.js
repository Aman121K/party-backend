const Joi = require("joi");

const loginSchema = Joi.object({
  phone: Joi.string()
    .regex(/^[0-9]{10}$/)
    .messages({ "string.pattern.base": `Phone number must have 10 digits.` })
    .required(),
});

// const activePlanSchema = Joi.object({
//   planType: Joi.string().required(),
//   name: Joi.().required(),
//   discountPercent: Joi.number().required(),
//   discountPrice: Joi.number().required(),
//   price: Joi.number().required(),
//   deliveryCharges: Joi.number().required(),
//   payableAmount: Joi.number().required(),
//   events: Joi.array(),
// });

const cakeSchema = Joi.object({
  cakeName: Joi.string().required(),
  planId: Joi.number().required(),
  description: Joi.string().required(),
  cakeWeight: Joi.string().required(),
  cakePrice: Joi.number().required(),
});

const eventSchema = Joi.object({
  eventName: Joi.string().required(),
  planId: Joi.number().required(),
  activePlanId: Joi.number().required(),
  eventType: Joi.string().lowercase().required(),
  eventDate: Joi.required(),
  phoneNumber: Joi.string()
    .regex(/^[0-9]{10}$/)
    .messages({ "string.pattern.base": `Phone number must have 10 digits.` })
    .required(),
  cityId: Joi.number().required(),
  eventTimeId: Joi.number().required(),
  address: Joi.string().required(),
  pincode: Joi.number().required(),
  gender: Joi.string(),
  cakeImageUrl: Joi.string().required(),
  cakeName: Joi.string().required(),
  eventUtilities: Joi.array(),
  memberName: Joi.string(),
  memberOneName: Joi.string(),
  memberTwoName: Joi.string(),
  cakeMessage: Joi.string(),
});

module.exports = { loginSchema, cakeSchema, eventSchema };

