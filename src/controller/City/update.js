const models = require("../../models");

const update = async (req, res, next) => {
  const cityId = req.params.cityId;
  const cityName = req.body.cityName;
  try {
    await models.City.update({ cityName }, { where: { id: cityId } });
    res.json({ status: "success", message: "City Updated" });
  } catch (error) {
    next(error);
  }
};

module.exports = update;
