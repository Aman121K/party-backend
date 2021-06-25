const router = require("express").Router();
const { create, remove, update, view } = require("../controller/city");
// const { isAuth } = require("../../middlewares/auth");

router.get("/", view);
router.post("/create", create);
router.delete("/remove/:cityId", remove);
router.patch("/update/:cityId", update);

module.exports = router;
