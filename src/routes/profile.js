const router = require("express").Router();
const { view, create } = require("../controller/Profile");
const { isAuth } = require("../middlewares/auth");

router.get("/", isAuth, view);
router.post("/create", create);
// router.patch("/update", update);

module.exports = router;
