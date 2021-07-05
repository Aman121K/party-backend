const router = require("express").Router();
const events = require("../controller/events");
const { isAuth } = require("../../middlewares/auth");
const { verifyUserAccessToken } = require("../../middlewares/jwt");

router.get("/userEvents", verifyUserAccessToken, events.userEvents);
router.post("/create", verifyUserAccessToken, events.createEvent);
router.patch(
  "/update/:eventId",

  verifyUserAccessToken,
  events.updateEvent
);
router.delete(
  "/delete/:eventId",

  verifyUserAccessToken,
  events.deleteEvent
);

module.exports = router;
