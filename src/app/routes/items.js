const router = require("express").Router();
const { allItems, create, remove, update, categoryItems } = require("../controller/items");

router.get("/allItems", allItems);
router.get("/category/:categoryId", categoryItems);
router.post("/create", create);
router.patch("/update/:itemId", update);
router.delete("/remove/:itemId", remove);

module.exports = router;
