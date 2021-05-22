const models = require("../../models");

const create = async (req, res, next) => {
  const data = req.body;
  try {
    const result = await models.Plan.create(data);
    res.status(201).json({
      status: "success",
      result,
    });
  } catch (error) {
    next(error);
    console.log(error);
  }
};

module.exports = create;
