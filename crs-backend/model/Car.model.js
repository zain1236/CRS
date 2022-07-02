const { sequelize, Sequelize } = require("../config/db");
const { DataTypes } = Sequelize;

const Car = sequelize.define(
  "car",
  {
    reg_no: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    make: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
    },
    engine_size: {
      type: DataTypes.INTEGER(5),
      allowNull: true,
    },
    engine_no: {
      type: DataTypes.STRING(17),
      allowNull: true,
      unique: true,
    },
    chasis_no: {
      type: DataTypes.STRING(17),
      allowNull: true,
      unique: true,
    },
    colour: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ownership: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "car",
    //paranoid: true
  }
);

module.exports = Car;
