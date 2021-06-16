const models = require("../../models");

module.exports = {
  create: async (req, res, next) => {
    const data = req.body;
    try {
      const result = await models.City.create(data);
      res.json({ status: "success", result });
    } catch (error) {
      next(error);
    }
  },

  view: async (req, res, next) => {
    try {
      const result = await models.City.findAll();
      res.json({ status: "success", results: result.length, cities: result });
    } catch (error) {
      next(error);
    }
  },
  update: async (req, res, next) => {
    const cityId = req.params.cityId;
    const cityName = req.body.cityName;
    try {
      await models.City.update({ cityName }, { where: { id: cityId } });
      res.json({ status: "success", message: "City Updated" });
    } catch (error) {
      next(error);
    }
  },

  remove: async (req, res, next) => {
    const cityId = req.params.cityId;
    try {
      await models.City.destroy({ where: { id: cityId } });
      res.json({ status: "success", message: "City Deleted" });
    } catch (error) {
      next(error);
    }
  },
};
