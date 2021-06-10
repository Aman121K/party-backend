const router = require("express").Router();
const events = require("../controller/events");
const { isAuth } = require("../middlewares/auth");

router.get("/userEvents", isAuth, events.userEvents);
router.post("/create", isAuth, events.createEvent);
router.patch("/update/:eventId", isAuth, events.updateEvent);
router.delete("/delete/:eventId", isAuth, events.deleteEvent);

module.exports = router;
