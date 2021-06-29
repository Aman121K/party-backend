const router = require("express").Router();
const { view, create, update } = require("../controller/profile");
const { isAuth } = require("../../middlewares/auth");
const { verifyUserAccessToken } = require("../../middlewares/jwt");

router.get("/", isAuth, verifyUserAccessToken, view);
router.post("/create", isAuth, verifyUserAccessToken, create);
router.patch("/update", isAuth, verifyUserAccessToken, update);

module.exports = router;
