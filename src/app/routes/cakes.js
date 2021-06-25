const router = require("express").Router();
const {
  addCake,
  allCakes,
  updateCake,
  updateCakeImage,
} = require("../controller/cakes");

router.get("/allCakes", allCakes);
router.post("/addCake", addCake);
router.patch("/updateCake/:cakeId", updateCake);
router.patch("/updateCakeImage/:cakeId", updateCakeImage);

module.exports = router;
