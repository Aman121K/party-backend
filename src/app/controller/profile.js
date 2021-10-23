const models = require("../../models");

module.exports = {
  create: async (req, res, next) => {
    const data = req.body;
    const { aud } = req.payload;
    try {
      const result = await models.UserDetail.create({
        userId: aud,
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
      gender,
      email,
    } = req.body;
    const { aud } = req.payload;

    try {
      await models.UserDetail.update(
        { firstName, lastName, gender, email },
        { where: { userId: aud } }
      );

      res.status(200).json({ status: "success", message: "Profile Updated" });
    } catch (error) {
      console.log(error);
      next(error);
    }
  },

  view: async (req, res, next) => {
    const { aud } = req.payload;

    try {
      const result = await models.User.findOne({
        include: [
          {
            model: models.UserDetail,
          },
        ],
        attributes: { exclude: ["updatedAt"] },
        where: { id: aud },
      });

      // let updatedData = {};

      // Object.assign(
      //   updatedData,

      //   { phone: result.phone },
      //   {
      //     firstName: result.UserDetail ? result.UserDetail.firstName : null,
      //   },
      //   {
      //     lastName: result.UserDetail ? result.UserDetail.lastName : null,
      //   },
      //   {
      //     dob: result.UserDetail
      //       ? new Date(result.UserDetail.dob).toDateString()
      //       : null,
      //   },
      //   {
      //     gender: result.UserDetail ? result.UserDetail.gender : null,
      //   },
      //   { email: result.UserDetail ? result.UserDetail.email : null },
      //   {
      //     address: result.UserDetail ? result.UserDetail.address : null,
      //   },
      //   {
      //     pincode: result.UserDetail ? result.UserDetail.pincode : null,
      //   },
      //   {
      //     cityName: result.UserDetail ? result.UserDetail.City.cityName : null,
      //   },
      //   { createdAt: result.createdAt ? result.createdAt : null }
      // );

      res.status(200).json({ status: "success", data: result });
    } catch (error) {
      next(error);
      console.log(error);
    }
  },
};
