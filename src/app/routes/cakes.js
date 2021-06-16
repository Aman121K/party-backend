const router = require("express").Router();
const { addCake, allCakes, updateCake, updateCakeImage } = require("../controller/Cakes");

router.get("/cakes", allCakes);
router.post("/addCake", addCake);
router.patch("/updateCake/:cakeId", updateCake);
router.patch("/updateCakeImage/:cakeId", updateCakeImage);

module.exports = router;
