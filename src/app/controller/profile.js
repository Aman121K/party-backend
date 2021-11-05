const models = require("../../models");

module.exports = {
  create: async (req, res, next) => {
    const data = req.body;
    const { aud } = req.payload;
    try {
      const result = await models.UserDetail.create({
        userId: aud,
        ...data
      });
      res.status(201).json(result);
    } catch (error) {
      next(error);
      console.log(error);
    }
  },

  update: async (req, res, next) => {
    const { userName, gender, email } = req.body;
    const { aud } = req.payload;

    try {
      await models.UserDetail.update(
        { userName, gender, email },
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
            model: models.UserDetail
          }
        ],
        attributes: { exclude: ["updatedAt"] },
        where: { id: aud }
      });
      res.status(200).json({ status: "success", data: result });
    } catch (error) {
      next(error);
      console.log(error);
    }
  }
};
