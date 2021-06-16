const router = require("express").Router();
const {
  allActivePlans,
  create,
  getSingleActivePlan,
} = require("../controller/activePlan");
const { isAuth } = require("../../middlewares/auth");

router.get("/all", isAuth, allActivePlans);
router.get("/single/:activePlanId", isAuth, getSingleActivePlan);
router.post("/create", isAuth, create);

module.exports = router;
