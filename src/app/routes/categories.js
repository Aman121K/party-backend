const router = require("express").Router();
const {
  create,
  allCategories,
  update,
  remove,
  categoriesWithItems
} = require("../controller/categories");

router.post("/create", create);
router.get("/allCategories", allCategories);
router.get("/withItems", categoriesWithItems);
router.patch("/update/:categoryId", update);
router.delete("/remove/:categoryId", remove);

module.exports = router;
