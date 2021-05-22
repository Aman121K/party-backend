const models = require("../../models");

const remove = async (req, res, next) => {
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
};

module.exports = remove;
