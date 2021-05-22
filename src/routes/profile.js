const router = require("express").Router();
const { view, create, update } = require("../controller/Profile");
const { isAuth } = require("../middlewares/auth");

router.get("/", isAuth, view);
router.post("/create", isAuth, create);
router.patch("/update", isAuth, update);

module.exports = router;
