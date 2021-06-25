const router = require("express").Router();
const { create, remove, update, view } = require("../controller/banner");
// const { isAuth } = require("../../middlewares/auth");

router.get("/", view);
router.post("/create", create);
router.delete("/remove/:bannerId", remove);
router.patch("/update/:bannerId", update);

module.exports = router;
