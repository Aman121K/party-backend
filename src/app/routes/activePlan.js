const router = require("express").Router();
const {
  allActivePlans,
  create,
  getSingleActivePlan,
} = require("../controller/activePlan");
const { isAuth } = require("../../middlewares/auth");
const { verifyUserAccessToken } = require("../../middlewares/jwt");

router.get("/all", isAuth, verifyUserAccessToken, allActivePlans);
router.get(
  "/single/:activePlanId",
  isAuth,
  verifyUserAccessToken,
  getSingleActivePlan
);
router.post("/create", isAuth, verifyUserAccessToken, create);

module.exports = router;
