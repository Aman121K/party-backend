const router = require("express").Router();
const { add, remove, update, view } = require("../controller/City");
// const { isAuth } = require("../../middlewares/auth");

router.get("/", view);
router.post("/add", add);
router.delete("/remove/:cityId", remove);
router.patch("/update/:cityId", update);

module.exports = router;
