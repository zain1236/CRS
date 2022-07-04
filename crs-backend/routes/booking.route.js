const express = require("express");

const router = express.Router();
const controller = require("../controller/index");

router
  .route("/")
  .post(controller.Booking.AddBooking)
  .get(controller.Booking.getBooking);

router.get("/all", controller.Booking.getAllBooking);

router.patch("/return", controller.Booking.updateBookingreturn);

module.exports = router;
