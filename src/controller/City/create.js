const models = require("../../models");

const create = async (req, res, next) => {
  const data = req.body;
  try {
    const result = await models.City.create(data);
    res.json({ status: "success", result });
  } catch (error) {
    next(error);
  }
};

module.exports = create;
