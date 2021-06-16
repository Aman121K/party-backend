const router = require("express").Router();
const { remove, update, view, create } = require("../controller/Plans");
// const { isAuth } = require("../../middlewares/auth");

router.get("/", view);
router.post("/create", create);
router.delete("/remove/:planId", remove);
router.patch("/update/:planId", update);

module.exports = router;
