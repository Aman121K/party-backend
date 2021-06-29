const models = require("../../models");

module.exports = {
  create: async (req, res, next) => {
    const body = req.body;
    try {
      const result = await models.Category.create(body);

      res.status(201).json({ status: "success", result });
    } catch (error) {
      next(error);
    }
  },
  allCategories: async (req, res, next) => {
    const result = await models.Category.findAll({});

    res
      .status(200)
      .json({ status: "success", results: result.length, categories: result });
    try {
    } catch (error) {
      next(error);
    }
  },
  categoriesWithItems: async (req, res, next) => {
    const result = await models.Category.findAll({
      include: [
        {
          model: models.Item,
          as: "items",
          attributes: ["itemName", "itemImageUrl"],
        },
      ],
    });

    res
      .status(200)
      .json({ status: "success", results: result.length, categories: result });
    try {
    } catch (error) {
      next(error);
    }
  },
  update: async (req, res, next) => {
    const body = req.body;
    const categoryId = req.params.categoryId;
    try {
      await models.Category.update(body, {
        where: { id: categoryId },
      });

      res
        .status(200)
        .json({ status: "success", message: "category name updated" });
    } catch (error) {
      next(error);
    }
  },
  remove: async (req, res, next) => {
    const categoryId = req.params.categoryId;
    try {
      const result = await models.Category.destroy({
        where: { id: categoryId },
      });
      res.status(200).json({ status: "success", message: "category removed" });
    } catch (error) {
      next(error);
    }
  },
};
