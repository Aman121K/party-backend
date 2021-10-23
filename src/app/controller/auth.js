const models = require("../../models");
const { logOut, logIn } = require("../../middlewares/auth");
const { loginSchema } = require("../validation");
const { signAccessToken } = require("../../middlewares/jwt");
const { token } = require("morgan");

module.exports = {
  login: async (req, res, next) => {
    let addUser
    try {
      await loginSchema.validateAsync(req.body);
      const user = await models.User.findOne({
        where: { phone: req.body.phone },
        include: [
          {
            model: models.ActivePlan,
          }
        ]
      });

      if (user) {
        logIn(req, user.id);
      } else {
        addUser = await models.User.create({ phone: req.body.phone });
        logIn(req, addUser.id);
      }

      const token = await signAccessToken(
        user ? user.id.toString() : addUser.id.toString(),
        process.env.USER_ACCESS_TOKEN_SECRET
      );

      res.status(200).json({
        status: "success",
        token: token,
        isPlanPurchased: user?.ActivePlan === null ? false : true
      });
    } catch (error) {
      if (error.isJoi) error.status = 422;
      next(error);
    }
  },

  logout: async (req, res, next) => {
    try {
      await logOut(req, res);
      res.json({ status: "success", message: "Logged Out" });
    } catch (error) {
      next(error);
    }
  },
};
