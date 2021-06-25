const router = require("express").Router();
const { login, logout } = require("../controller/auth");

router.post("/login", login);
router.post("/logout", logout);

module.exports = router;
