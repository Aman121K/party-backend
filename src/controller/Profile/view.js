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

    let updatedData = {};

    Object.assign(
      updatedData,

      { phone: result.phone },
      { firstName: result.UserDetail.firstName },
      { lastName: result.UserDetail.lastName },
      { dob: result.UserDetail.dob },
      { gender: result.UserDetail.gender },
      { email: result.UserDetail.email },
      { address: result.UserDetail.address },
      { pincode: result.UserDetail.pincode },
      { cityName: result.UserDetail.City.cityName },
      { createdAt: result.createdAt }
    );

    console.log(updatedData);

    res.status(200).json({ status: "success", data: updatedData });
  } catch (error) {
    next(error);
  }
};

module.exports = view;
