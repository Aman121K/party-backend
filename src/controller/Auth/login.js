const models = require("../../models");
const { logIn } = require("../../middlewares/auth");

const login = async (req, res, next) => {
  try {
    const user = await models.User.findOne({
      where: { phone: req.body.phone },
    });

    if (user) {
      logIn(req, user.id);
    } else {
      const addUser = await models.User.create({ phone: req.body.phone });
      logIn(req, addUser.id);
    }

    res.status(200).json({
      status: "success",
      message: "session started",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = login;
