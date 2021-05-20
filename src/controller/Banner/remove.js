const createError = require("http-errors");
const path = require("path");
const models = require("../../models")
const { destroy } = require("../../cloudinary");

const remove = async (req, res, next) => {
    const bannerId = req.params.bannerId
    try {

        const banner = await models.Banner.findOne({ where: { id: bannerId } })
        var splitArry = banner.imageUrl.split("/");
        var final = splitArry[splitArry.length - 1];
        var public_id = path.parse(final).name;
        destroy(public_id);

        res.status(200).json({ status: 'success', message: 'Banner Deleted' })

    } catch (error) {
        next(error)
        console.log(error)
    }
}

module.exports = remove