const models = require("../../models");

const view = async (req, res, next) => {
  try {
    const result = await models.User.findOne({
      include: [
        {
          model: models.UserDetail,
          attributes: {
            exclude: [
              "id",
              "userId",
              "cityId",
              "CityId",
              "createdAt",
              "updatedAt",
            ],
          },
          include: [
            {
              model: models.City,
              attributes: ["cityName"],
            },
          ],
        },
      ],
      attributes: { exclude: ["updatedAt"] },
      where: { id: req.session.userId },
    });

    res.status(200).json({ status: "success", data: result });
  } catch (error) {
    next(error);
  }
};

module.exports = view;
