const createError = require("http-errors");
const models = require("../../models");
const { upload } = require("../../cloudinary");

const add = async (req, res, next) => {
  try {
    if (!req.file) {
      throw createError.UnprocessableEntity("No image provided");
    }
    // image upload to cloudinary
    const image = req.file.path;
    const response = await upload(image);
    // getting image url from cloudinary response
    const imageUrl = response.url;
    const result = await models.Banner.create({ imageUrl });
    res.json({ status: "success", result });
  } catch (error) {
    next(error);
    console.log(error);
  }
};

module.exports = add;
