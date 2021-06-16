const models = require("../../models");
const createError = require("http-errors");
const { destroy, upload } = require("../../cloudinary");

module.exports = {
  view: async (req, res, next) => {
    try {
      const result = await models.Banner.findAll();
      res.status(200).json({
        status: "success",
        results: result.length,
        banners: result,
      });
    } catch (error) {
      next(error);
    }
  },
  create: async (req, res, next) => {
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
  },
  remove: async (req, res, next) => {
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
  },
  update: async (req, res, next) => {
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

      await models.Banner.update(
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
  },
};
