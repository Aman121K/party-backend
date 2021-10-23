const models = require("../../models")

module.exports = {
    send: async (req, res, next) => {
        try {
            const body = req.body
            const userId = req.payload.aud;

            const result = await models.Feedback.create({ userId, ...body })
            res.status(201).json({
                status: "success",
                results: result
            })
        } catch (error) {
            console.log(error);
        }
    }
}