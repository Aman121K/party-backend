const router = require("express").Router();
const { add, remove, update, view } = require("../controller/Banner");
// const { isAuth } = require("../../middlewares/auth");

router.get("/", view);
router.post("/add", add);
router.delete("/remove/:bannerId", remove);
router.patch("/update/:bannerId", update);

module.exports = router;
