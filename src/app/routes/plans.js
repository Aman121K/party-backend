const router = require("express").Router();
const {
  remove,
  update,
  view,
  create,
  singlePlan,
} = require("../controller/Plans");
// const { isAuth } = require("../../middlewares/auth");

router.get("/", view);
router.get("/:planId", singlePlan);
router.post("/create", create);
router.delete("/remove/:planId", remove);
router.patch("/update/:planId", update);

module.exports = router;
