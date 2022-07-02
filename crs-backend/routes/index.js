var express = require("express");
var router = express.Router();
var unauthRouter = require("./user_unauth.route");
var companyRouter = require("./company.route");
var carRouter = require("./cars.route");
var customerRouter = require("./customer.routes");
var gurantorRouter = require("./gurantor.route");
var driverRouter = require("./driver.route");
var dealerRoute = require("./dealer.route");
const bookingRoute = require("./booking.route");
const returnedRouter = require("./returned.route");
// var carsRouter = require("./cars.route")
// const passport = require('../config/passport.js');
// router.use(passport.initialize());

router.use("/user", unauthRouter);
router.use("/company", companyRouter);
router.use("/car", carRouter);
router.use("/customer", customerRouter);
router.use("/gurantor", gurantorRouter);
router.use("/driver", driverRouter);
router.use("/dealer", dealerRoute);
router.use("/booking", bookingRoute);
router.use("/returned", returnedRouter);

// router.use("/hotel",passport.authenticate('jwt', { session: false }),hotelRouter);

// router.use("/cars",carsRouter);

module.exports = router;
