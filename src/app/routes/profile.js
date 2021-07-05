const router = require("express").Router();
const { view, create, update } = require("../controller/profile");
const { isAuth } = require("../../middlewares/auth");
const { verifyUserAccessToken } = require("../../middlewares/jwt");

router.get("/", verifyUserAccessToken, view);
router.post("/create", verifyUserAccessToken, create);
router.patch("/update", verifyUserAccessToken, update);

module.exports = router;
