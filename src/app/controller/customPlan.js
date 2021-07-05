const { Op } = require("sequelize");
const models = require("../../models");
const { sequelize } = require("../../models");

module.exports = {
  create: async (req, res, next) => {
    const userId = req.payload.aud;
    const body = req.body;

    let createCustomPlan, createCustomPlanItems;
    try {
      const result = await sequelize.transaction(async (t) => {
        createCustomPlan = await models.CustomPlan.create(
          { ...body, userId },
          { transaction: t }
        );

        let itemsArry = [];

        body.items.map((el) => {
          itemsArry.push({
            customPlanId: createCustomPlan.id,
            itemName: el.itemName,
            itemImageUrl: el.itemImageUrl,
          });
        });

        createCustomPlanItems = await models.CustomPlanItem.bulkCreate(
          itemsArry,
          { transaction: t }
        );
      });
      console.log(result);

      res.status(201).json({
        status: "success",
        data: {
          createCustomPlan,
          createCustomPlanItems,
        },
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  },
  getUserCustomPlans: async (req, res, next) => {
    const userId = req.payload.aud;
    try {
      const result = await models.CustomPlan.findAll({
        where: { userId },
        attributes: { exclude: ["userId", "eventId"] },
        include: [
          {
            model: models.Event,
            as: "event",
            attributes: ["eventName", "eventType", "eventDate"],
          },
          {
            model: models.CustomPlanItem,
            as: "items",
            attributes: ["itemName"],
          },
        ],
      });

      res.status(200).json({
        status: "success",
        results: result.length,
        customPlans: result,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  },
  singleCusomPlan: async (req, res, next) => {
    const userId = req.payload.aud;
    const customPlanId = req.params.customPlanId;
    try {
      const result = await models.CustomPlan.findOne({
        where: { [Op.and]: [{ userId }, { id: customPlanId }] },
        attributes: { exclude: ["userId", "eventId"] },
        include: [
          {
            model: models.Event,
            as: "event",
            attributes: ["eventName", "eventType", "eventDate"],
          },
          {
            model: models.CustomPlanItem,
            as: "items",
            attributes: ["itemName"],
          },
        ],
      });

      res.status(200).json({ status: "success", customPlan: result });
    } catch (error) {
      console.log(error);
      next(error);
    }
  },
};
