const router = require("express").Router();
const feedback = require("../controller/feedback");
const { verifyUserAccessToken } = require("../../middlewares/jwt");

router.post("/send", verifyUserAccessToken, feedback.send);

module.exports = router;
