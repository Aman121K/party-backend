const router = require("express").Router();
const {
  addCake,
  allCakes,
  updateCake,
  updateCakeImage,
  planCakes,
} = require("../controller/cakes");

router.get("/allCakes", allCakes);
router.get("/planCakes", planCakes);
router.post("/addCake", addCake);
router.patch("/updateCake/:cakeId", updateCake);
router.patch("/updateCakeImage/:cakeId", updateCakeImage);

module.exports = router;
