const router = require("express").Router();
const {
  create,
  getUserCustomPlans,
  singleCusomPlan,
} = require("../controller/customPlan");
const { isAuth } = require("../../middlewares/auth");
const { verifyUserAccessToken } = require("../../middlewares/jwt");

router.get(
  "/userCustomPlans",
  isAuth,
  verifyUserAccessToken,
  getUserCustomPlans
);
router.get(
  "/singleCustomPlan/:customPlanId",
  isAuth,
  verifyUserAccessToken,
  singleCusomPlan
);
router.post("/create", isAuth, verifyUserAccessToken, create);

module.exports = router;
