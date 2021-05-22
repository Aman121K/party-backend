const models = require("../../models");

const add = async (req, res, next) => {
  try {
    const result = await models.City.findAll();
    res.json({ status: "success", results: result.length, cities: result });
  } catch (error) {
    next(error);
  }
};

module.exports = add;
