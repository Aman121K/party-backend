const models = require("../../models");

const create = async (req, res, next) => {
  const data = req.body;
  console.log(data);
  console.log(req.session.userId);

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
};

module.exports = create;
