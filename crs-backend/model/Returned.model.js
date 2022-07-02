const { sequelize, Sequelize } = require("../config/db");

const { DataTypes } = Sequelize;

const returned = sequelize.define(
  "returned",
  {
    meterReading: { type: DataTypes.BIGINT(11), allowNull: false },
    returnDate: { type: DataTypes.DATEONLY, allowNull: false },
    damage: { type: DataTypes.STRING, allowNull: true }, // if any
    cashDelivery: { type: DataTypes.STRING, allowNull: true },
    message: { type: DataTypes.STRING, allowNull: true },
  },
  { tableName: "returned" }
);

module.exports = returned;
