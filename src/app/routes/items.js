const router = require("express").Router();
const { allItems, create, remove, update } = require("../controller/items");

router.get("/allItems", allItems);
router.post("/create", create);
router.patch("/update/:itemId", update);
router.delete("/remove/:itemId", remove);

module.exports = router;
