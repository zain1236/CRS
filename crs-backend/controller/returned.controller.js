const Joi = require("Joi");
const Model = require("../model");

const ReturnedSchema = Joi.object({
  meterReading: Joi.number().required(),
  returnDate: Joi.date().required(),
  damage: Joi.string(), // if any
  cashDelivery: Joi.string().required(),
  message: Joi.string(),
});

exports.AddReturning = async (req, res) => {
  try {
    const validate = await ReturnedSchema.validateAsync(req.body);
    const { booking } = req.query;
    console.log("Add Returning", req.query);
    const data = await Model.Returned.create({ ...validate, booking });
    if (data < 1) {
      res.send({ Status: { Message: "Error Adding" } });
    } else {
      res.send({ Status: { Message: "Added Successfully" }, data: data });
    }
  } catch (error) {
    console.log("In Catch..");

    res.send({ Status: { Message: error.message } });
  }
};

exports.getAllReturns = async (req, res) => {
  try {
    const data = await Returned.findAll();

    if (data < 1) {
      res.send({ Status: { Message: "No Data" } });
    } else {
      res.send({ Status: { Message: "Success" }, data: data });
    }
  } catch (error) {
    console.log("In Catch..");

    res.send({ Status: { Message: error.message } });
  }
};

const ReturnedSigleSchema = Joi.object({
  booking: Joi.number().required(),
});

exports.getAReturn = async (req, res) => {
  try {
    const validate = await ReturnedSigleSchema.validateAsync(req.query.booking);
    const data = await Returned.findOne({
      where: { booking: validate },
    });

    if (data < 1) {
      res.send({ Status: { Message: "No Data" } });
    } else {
      res.send({ Status: { Message: "Success" }, data: data });
    }
  } catch (error) {
    console.log("In Catch..");

    res.send({ Status: { Message: error.message } });
  }
};
