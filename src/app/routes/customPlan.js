const router = require("express").Router();
const {
  create,
  getUserCustomPlans,
  singleCusomPlan,
} = require("../controller/customPlan");
const { isAuth } = require("../../middlewares/auth");

router.get("/userCustomPlans", isAuth, getUserCustomPlans);
router.get("/singleCustomPlan/:customPlanId", isAuth, singleCusomPlan);
router.post("/create", isAuth, create);

module.exports = router;
