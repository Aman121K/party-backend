const createError = require("http-errors");
const models = require("../../models");
const { destroy, upload } = require("../../cloudinary");
const { getPublicId } = require("../../utils/cloudinary");

const update = async (req, res, next) => {
  const bannerId = req.params.bannerId;
  try {
    if (!req.file) {
      throw createError.UnprocessableEntity("No image provided");
    }

    const banner = await models.Banner.findOne({ where: { id: bannerId } });
    if (banner === null || banner.imageUrl === null) {
      throw new createError.NotFound("Image url not found");
    } else {
      // extracting public ID from the image
      getPublicId(banner.imageUrl);
      destroy(publicId);
    }

    const image = req.file.path;
    const response = await upload(image);
    // getting image url from cloudinary response
    const imageUrl = response.url;

    const result = await models.Banner.update(
      { imageUrl },
      {
        where: { id: bannerId },
        returning: true, // needed for affectedRows to be populated
        plain: true, // makes sure that the returned instances are just plain objects
      }
    );

    res.status(200).json({ status: "success", message: "Banner Updated" });
  } catch (error) {
    next(error);
  }
};

module.exports = update;
