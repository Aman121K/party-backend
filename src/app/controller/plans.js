const models = require("../../models");
const { sequelize } = require("../../models");

module.exports = {
  create: async (req, res, next) => {
    const body = req.body;

    let createPlan, createPlanItems;
    try {
      await sequelize.transaction(async (t) => {
        createPlan = await models.Plan.create(body, { transaction: t });

        let itemsArry = [];
        body.items.map((el) => {
          itemsArry.push({ planId: createPlan.id, itemId: el });
        });

        createPlanItems = await models.PlanItem.bulkCreate(itemsArry, {
          transaction: t,
        });
      });

      res.status(201).json({
        status: "success",
        message: "plan created",
        data: { createPlan, createPlanItems },
      });
    } catch (error) {
      next(error);
      console.log(error);
    }
  },

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
        results: result.length,
        plans: result,
      });
    } catch (error) {
      next(error);
    }
  },
};
