const models = require("../../models");

const remove = async (req, res, next) => {
  const cityId = req.params.cityId;
  try {
    await models.City.destroy({ where: { id: cityId } });
    res.json({ status: "success", message: "City Deleted" });
  } catch (error) {
    next(error);
  }
};

module.exports = remove;
