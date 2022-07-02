const { sequelize, Sequelize } = require("../config/db");
const { DataTypes } = Sequelize;

const driver = sequelize.define(
  "driver",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    father_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    cnic: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone_no: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dob: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    doi: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    doe: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    curr_add: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    per_add: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "driver",
    //paranoid: true
  }
);

module.exports = driver;
