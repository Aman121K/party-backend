const { Op } = require("sequelize");
const models = require("../../models");
const { sequelize } = require("../../models");
const { activePlanSchema } = require("../validation");

module.exports = {
  create: async (req, res, next) => {
    const body = req.body;
    const userId = req.payload.aud;
    try {
      const validatedBody = await activePlanSchema.validateAsync(body);
      console.log(validatedBody);
      const result = await sequelize.transaction(async (t) => {
        const createActivePlan = await models.ActivePlan.create(
          { ...validatedBody, userId },
          {
            transaction: t,
          }
        );

        let ary = [];
        body.events.forEach((el) => {
          ary.push({
            activePlanId: createActivePlan.id,
            eventId: el,
          });
        });

        const addEventsToActivePlan = await models.ActivePlanEvent.bulkCreate(
          ary,
          { transaction: t }
        );
      });

      res.status(201).json({
        status: "success",
        message: "order place and plan created",
      });
    } catch (error) {
      if (error.isJoi) error.status = 422;
      next(error);
    }
  },

  allActivePlans: async (req, res, next) => {
    const userId = req.payload.aud;
    try {
      const result = await models.ActivePlan.findAll({
        where: { userId },
        attributes: { exclude: ["cakeId", "userId", "itemId"] },
        include: [
          {
            model: models.Cake,
            required: true,
            as: "cake",
            attributes: ["name", "cakeImageUrl"],
          },
          {
            model: models.Item,
            required: true,
            as: "item",
            attributes: ["itemName"],
          },
          {
            model: models.Event,
            attributes: ["eventName", "eventType", "eventDate"],
            through: { attributes: [] },
          },
        ],
      });
      res.status(200).json({
        status: "success",
        results: result.length,
        activePlans: result,
      });
    } catch (error) {
      next(error);
    }
  },
  getSingleActivePlan: async (req, res, next) => {
    const userId = req.payload.aud;
    const activePlanId = req.params.activePlanId;
    try {
      const result = await models.ActivePlan.findOne({
        where: { [Op.and]: [{ userId }, { id: activePlanId }] },
        attributes: { exclude: ["cakeId", "userId", "itemId"] },
        include: [
          {
            model: models.Cake,
            required: true,
            as: "cake",
            attributes: ["name", "cakeImageUrl"],
          },
          {
            model: models.Item,
            required: true,
            as: "item",
            attributes: ["itemName"],
          },
          {
            model: models.Event,
            attributes: ["eventName", "eventType", "eventDate"],
            through: { attributes: [] },
          },
        ],
      });
      res.status(200).json({
        status: "success",
        activePlan: result,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  },
};
