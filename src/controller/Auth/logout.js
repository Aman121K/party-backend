const { logOut } = require("../../middlewares/auth");

const logout = async (req, res, next) => {
  try {
    await logOut(req, res);
    res.json({ status: "success", message: "Logged Out" });
  } catch (error) {
    next(error);
  }
};

module.exports = logout;
