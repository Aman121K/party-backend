const router = require("express").Router();
const {
  allActivePlans,
  create,
  getSingleActivePlan,
} = require("../controller/activePlan");
const { isAuth } = require("../../middlewares/auth");
const { verifyUserAccessToken } = require("../../middlewares/jwt");

router.get("/all", verifyUserAccessToken, allActivePlans);
router.get(
  "/single/:activePlanId",

  verifyUserAccessToken,
  getSingleActivePlan
);
router.post("/create", verifyUserAccessToken, create);

module.exports = router;
