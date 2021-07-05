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

  verifyUserAccessToken,
  getUserCustomPlans
);
router.get(
  "/singleCustomPlan/:customPlanId",

  verifyUserAccessToken,
  singleCusomPlan
);
router.post("/create", verifyUserAccessToken, create);

module.exports = router;
