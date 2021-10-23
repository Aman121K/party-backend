const models = require("../../models");
const createError = require("http-errors");
const { upload, destroy } = require("../../cloudinary");
const { cakeSchema } = require("../validation");

module.exports = {
  allCakes: async (req, res, next) => {
    try {
      const result = await models.Cake.findAll({});
      res
        .status(200)
        .json({ message: "success", results: result.length, cakes: result });
    } catch (error) {
      next(error);
    }
  },

  planCakes: async (req, res, next) => {

    try {
      const result = await models.Cake.findAll({ where: { planId: req.query.planId } })
      res.status(200).json({
        message: "success", results: result.length, cakes: result
      })
    } catch (error) {
      next(error)
    }
  },

  addCake: async (req, res, next) => {
    const body = req.body;
    try {
      await cakeSchema.validateAsync(body);

      if (!req.file) {
        throw createError.UnprocessableEntity("No image provided");
      }

      const image = req.file.path;

      const response = await upload(image);

      const result = await models.Cake.create({
        ...body,
        cakeImageUrl: response.url,
      });

      res.status(201).json({ status: "success", cake: result });
    } catch (error) {
      next(error);
      console.log(error);
    }
  },

  updateCake: async (req, res, next) => {
    const body = req.body;
    const cakeId = req.params.cakeId;
    try {
      const result = await models.Cake.update(body, { where: { id: cakeId } });

      res
        .status(200)
        .json({ status: "success", message: "cake details updated" });
    } catch (error) {
      next(error);
    }
  },

  updateCakeImage: async (req, res, next) => {
    const cakeId = req.params.cakeId;
    try {
      if (!req.file) {
        throw createError.UnprocessableEntity("No image provided");
      }
      const image = req.file.path;

      const cakeImageUrl = await models.Cake.findOne({ where: { id: cakeId } });

      cakeImageUrlName = cakeImageUrl.cakeImageUrl;

      var splitArry = cakeImageUrlName.split("/");
      var final = splitArry[splitArry.length - 1];
      var public_id = path.parse(final).name;
      console.log(public_id);
      destroy(public_id);

      const response = await upload(image);

      const result = await models.Cake.update(
        { cakeImageUrl: response.url },
        { where: { id: cakeId } }
      );

      res.status(200).json({ status: "success", result });
    } catch (error) {
      next(error);
      console.log(error);
    }
  },
};
