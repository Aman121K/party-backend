const models = require("../../models");

module.exports = {
  allItems: async (req, res, next) => {
    try {
      const result = await models.Utility.findAll();
      res.status(200).json({ status: "success", result });
    } catch (error) {
      next(error);
      console.log(error);
    }
  },
  categoryItems: async (req, res, next) => {
    const categoryId = req.params.categoryId;
    try {
      const result = await models.Item.findAll({ where: { categoryId } });
      res.status(200).json({ status: "success", result });
    } catch (error) {
      next(error);
      console.log(error);
    }
  },
  create: async (req, res, next) => {
    const body = req.body;
    try {
      const result = await models.Item.create(body);
      res.status(201).json({ status: "success", result });
    } catch (error) {
      console.log(error);
      next(error);
    }
  },

  update: async (req, res, next) => {
    const body = req.body;
    const itemId = req.params.itemId;
    try {
      const result = await models.Item.update(body, { where: { id: itemId } });
      res.status(200).json({ status: "success", message: "item name updated" });
    } catch (error) {
      console.log(error);
      next(error);
    }
  },

  remove: async (req, res, next) => {
    const itemId = req.params.itemId;
    try {
      const result = await models.Item.destroy({ where: { id: itemId } });
      res.status(200).json({ status: "success", message: "item removed" });
    } catch (error) {
      next(error);
      console.log(error);
    }
  },
};
