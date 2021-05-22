const models = require("../../models");

const update = async (req, res, next) => {
  const { firstName, lastName, dob, gender, email, cityId, address, pincode } =
    req.body;
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
};

module.exports = update;
