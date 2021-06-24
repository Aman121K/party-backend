const models = require("../../models");

module.exports = {
  create: async (req, res, next) => {
    const data = req.body;

    try {
      const result = await models.UserDetail.create({
        userId: req.session.userId,
        ...data,
      });
      res.status(201).json(result);
    } catch (error) {
      next(error);
      console.log(error);
    }
  },

  update: async (req, res, next) => {
    const {
      firstName,
      lastName,
      dob,
      gender,
      email,
      cityId,
      address,
      pincode,
    } = req.body;
    try {
      const result = await models.UserDetail.update(
        { firstName, lastName, dob, gender, email, cityId, address, pincode },
        { where: { userId: req.session.userId } }
      );

      res.status(200).json({ status: "success", message: "Profile Updated" });
    } catch (error) {
      console.log(error);
      next(error);
    }
  },

  view: async (req, res, next) => {
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
        { dob: new Date(result.UserDetail.dob).toDateString() },
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
  },
};
