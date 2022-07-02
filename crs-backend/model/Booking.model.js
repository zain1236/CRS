const { sequelize, Sequelize } = require("../config/db");
const { DataTypes } = Sequelize;

const Booking = sequelize.define(
  "booking",
  {
    car_reg_no: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    car_booking_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    monthly_daily: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rate: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
    },
    ret_date: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
    },
    meter_start: {
      type: DataTypes.INTEGER(9),
      allowNull: false,
    },
    returned: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: true,
    },
  },
  {
    tableName: "booking",
  }
);

module.exports = Booking;
