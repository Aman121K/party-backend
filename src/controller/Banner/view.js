const models = require("../../models")

const view = async (req, res, next) => {
    try {
        const result = await models.Banner.findAll()
        res.status(200).json({
            status: "success",
            banners: result
        })
    } catch (error) {
        next(error)
    }
}

module.exports = view