const models = require("../../models");

const view = async (req, res, next) => {
  try {
    const result = await models.Plan.findAll();
    res.status(200).json({
      status: "success",
      results: result.length,
      plans: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = view;
