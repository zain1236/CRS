const User = require("./user.controller.js");
const Company = require("./company.controller");
const Car = require("./car.controller");
const Customer = require("./customer.controller");
const Gurantor = require("./gurantor.controller");
const Driver = require("./driver.controller");
const Dealer = require("./dealer.controller");
const Booking = require("./booking.controller");
const Returned = require("./returned.controller");

const controller = {
  User,
  Company,
  Car,
  Customer,
  Gurantor,
  Driver,
  Dealer,
  Booking,
  Returned,
};

module.exports = controller;
