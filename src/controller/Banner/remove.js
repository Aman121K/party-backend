const createError = require("http-errors");
const models = require("../../models");
const { destroy } = require("../../cloudinary");
const { getPublicId } = require("../../utils/cloudinary");

const remove = async (req, res, next) => {
  const bannerId = req.params.bannerId;
  try {
    const banner = await models.Banner.findOne({ where: { id: bannerId } });
    if (banner === null || banner.imageUrl === null) {
      throw new createError.NotFound("Image url not found");
    }

    // extracting public ID from the image
    getPublicId(banner.imageUrl);

    const result = await models.Banner.destroy({ where: { id: bannerId } });
    if (result === 1) {
      // publicId comming from getpublicId utility function
      destroy(publicId);
    }

    res.status(200).json({ status: "success", message: "Banner Deleted" });
  } catch (error) {
    next(error);
  }
};

module.exports = remove;
