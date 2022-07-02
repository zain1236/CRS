const User = require("./user.model");
const Company = require("./company.model");
const Car = require("./Car.model");
const Customer = require("./customer.model");
const Gurantor = require("./gurantor.model");
const Driver = require("./driver.model");
const Dealer = require("./Dealer.model");
const Booking = require("./Booking.model");
const Returned = require("./Returned.model");

const Model = {
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

Booking.hasMany(Returned, {
  foreignKey: {
    name: "booking",
    allowNull: false,
  },
});

Customer.hasMany(Booking, {
  foreignKey: {
    name: "customer",
    allowNull: false,
  },
});
Driver.hasMany(Booking, {
  foreignKey: {
    name: "driver",
    allowNull: false,
  },
});
Gurantor.hasMany(Booking, {
  foreignKey: {
    name: "gaurantor",
    allowNull: false,
  },
});
Dealer.hasMany(Booking, {
  foreignKey: {
    name: "dealer",
    allowNull: false,
  },
});

Company.hasMany(Booking, {
  foreignKey: {
    name: "company",
    allowNull: false,
  },
});

Company.hasMany(Car, {
  foreignKey: {
    name: "company",
    allowNull: false,
  },
});

Company.hasMany(Customer, {
  foreignKey: {
    name: "company",
    allowNull: false,
  },
});

Company.hasMany(Gurantor, {
  foreignKey: {
    name: "company",
    allowNull: false,
  },
});

Company.hasMany(Driver, {
  foreignKey: {
    name: "company",
    allowNull: false,
  },
});

Company.hasMany(Dealer, {
  foreignKey: {
    name: "company",
    allowNull: false,
  },
});

module.exports = Model;
