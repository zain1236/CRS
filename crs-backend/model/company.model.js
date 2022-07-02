const { sequelize, Sequelize } = require("../config/db");
const { DataTypes } = Sequelize;

const company = sequelize.define(
  "company",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: "company",
    //paranoid: true
  }
);

module.exports = company;
