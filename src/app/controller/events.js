const { Op } = require("sequelize");
const { sequelize } = require("../../models");
const models = require("../../models");

module.exports = {
  userEvents: async (req, res, next) => {
    const userId = req.payload.aud;

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
      next(error);
    }
  },

  createEvent: async (req, res, next) => {
    const body = req.body;

    try {
      const result = await models.Event.create(
        { ...body, userId: req.payload.aud },
        {
          include: [{ model: models.EventDetail, as: "details" }],
        }
      );

      res.status(201).json({ status: "success", result });
    } catch (error) {
      console.log(error);
      next(error);
    }
  },

  updateEvent: async (req, res, next) => {
    const body = req.body;
    const eventId = req.params.eventId;
    const userId = req.payload.aud;

    try {
      const result = await sequelize.transaction(async (t) => {
        const event = await models.Event.update(
          { ...body, userId },
          {
            where: {
              [Op.and]: [
                {
                  id: eventId,
                },
                {
                  userId: userId,
                },
              ],
            },
          },
          { transaction: t }
        );

        const eventDetail = await models.EventDetail.update(
          { ...body, userId },
          { where: { eventId } },
          { transaction: t }
        );
        console.log(t);
        return { ...event, eventDetail };
      });

      res.status(200).json({ status: "success", result });
    } catch (error) {
      console.log(error);
      console.log(error);
    }
  },

  deleteEvent: async (req, res, next) => {
    const eventId = req.params.eventId;
    const userId = req.payload.aud;
    const t = await sequelize.transaction();

    try {
      const event = await models.Event.destroy(
        {
          where: { [Op.and]: [{ id: eventId }, { userId }] },
        },
        { transaction: t }
      );

      await t.commit();

      res.status(200).json({
        status: "success",
        message: "event deleted",
      });
    } catch (error) {
      await t.rollback();
      console.log(error);
      next(error);
    }
  },
};
