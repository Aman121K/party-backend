const router = require("express").Router();
const events = require("../controller/events");
const { isAuth } = require("../../middlewares/auth");
const { verifyUserAccessToken } = require("../../middlewares/jwt");

router.get("/userEvents", isAuth, verifyUserAccessToken, events.userEvents);
router.post("/create", isAuth, verifyUserAccessToken, events.createEvent);
router.patch(
  "/update/:eventId",
  isAuth,
  verifyUserAccessToken,
  events.updateEvent
);
router.delete(
  "/delete/:eventId",
  isAuth,
  verifyUserAccessToken,
  events.deleteEvent
);

module.exports = router;
