const models = require("../../models");

const update = async (req, res, next) => {
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
};

module.exports = update;
