const models = require("../../models");
const { sequelize } = require("../../models");

module.exports = {
  planEvents: async (req, res, next) => {
    const body = req.body;
    const userId = req.payload.aud;
    try {
      const result = await models.Plan.findAll({ where: { userId } })
      res.status({ status: "success", results: result })
    } catch (error) {
      next(error)
    }
  },
  create: async (req, res, next) => {
    const body = req.body;

    let createPlan, createPlanUtilities, createPlanCakes;
    try {
      await sequelize.transaction(async (t) => {
        createPlan = await models.Plan.create(body, { transaction: t });

        let utilities = [];
        body.utilities.map((utility) => {
          utilities.push({ planId: createPlan.id, utilityId: utility });
        });

        let cakes = [];
        body.cakes.map((cake) => {
          cakes.push({ planId: createPlan.id, cakeId: cake });
        });

        createPlanUtilities = await models.PlanUtility.bulkCreate(utilities, {
          transaction: t,
        });

        createPlanCakes = await models.PlanCake.bulkCreate(cakes, {
          transaction: t,
        });

      });

      res.status(201).json({
        status: "success",
        message: "plan created",
        data: { createPlan, createPlanUtilities, createPlanCakes },
      });
    } catch (error) {
      next(error);
      console.log(error);
    }
  },

  // to be worked on
  remove: async (req, res, next) => {
    const planId = req.params.planId;
    try {
      await models.Plan.destroy({ where: { id: planId } });
      res.status(200).json({
        status: "success",
        message: "Plan Deleted",
      });
    } catch (error) {
      next(error);
    }
  },

  // to be worked on
  update: async (req, res, next) => {
    const data = req.body;
    const planId = req.params.planId;
    try {
      await models.Plan.update(data, { where: { id: planId } });
      res.status(200).json({
        status: "success",
        message: "Plan Updated",
      });
    } catch (error) {
      next(error);
    }
  },

  view: async (req, res, next) => {
    try {
      const result = await models.Plan.findAll({
        include: [
          {
            model: models.Utility,
            as: "utilities",
            attributes: ["id", "utilityName"],
            through: { attributes: [] },
          },
          {
            model: models.Cake,
            as: "cakes",
            through: { attributes: [] },
          }
        ]
      });
      res.status(200).json({
        status: "success",
        results: result.length,
        plans: result,
      });
    } catch (error) {
      next(error);
    }
  },

  singlePlan: async (req, res, next) => {
    const planId = req.params.planId;
    try {
      const result = await models.Plan.findOne({
        where: { id: planId },
        include: [
          {
            model: models.PlanItem,
            as: "items",
            attributes: ["id"],
            include: [
              {
                model: models.Item,
                as: "item",
                attributes: ["itemName", "itemImageUrl"],
              },
            ],
          },
        ],
      });
      res.status(200).json({
        status: "success",
        plan: result,
      });
    } catch (error) {
      next(error);
    }
  },
};
