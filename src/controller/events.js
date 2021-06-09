const models = require("../models");

module.exports = {
  userEvents: async (req, res, next) => {
    const userId = req.session.userId;

    try {
      const result = await models.Event.findAll({
        where: { userId },
        attributes: { exclude: ["id", "userId", "cityId"] },
        include: [
          {
            model: models.EventDetail,
            required: true,
            as: "details",
            attributes: { exclude: ["id", "eventId"] },
          },
          {
            model: models.City,
            required: true,
            as: "city",
            attributes: { exclude: ["id"] },
          },
        ],
      });
      res.status(200).json({
        status: "success",
        results: result.length,
        events: result,
      });
    } catch (error) {
      console.log(error);
    }
  },
  createEvent: async (req, res, next) => {
    const body = req.body;

    try {
      const result = await models.Event.create(
        { ...body, userId: req.session.userId },
        {
          include: [{ model: models.EventDetail, as: "details" }],
        }
      );

      res.status(201).json({ status: "success", result });
    } catch (error) {
      console.log(error);
    }
  },

  // updateEvent: async (req, res, next) => {
  //   const body = req.body;
  //   const eventId = req.params.eventId
  //   try {
  //     const result = await models.Event.update({where: { id: eventId [and]  }}
  //       { ...body, userId: req.session.userId },
  //       {
  //         include: [{ model: models.EventDetail, as: "details" }],
  //       }
  //     );

  //     res.status(200).json({ status: "success", result });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // },
};
