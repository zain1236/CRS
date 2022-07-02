const model = require("../model/index");
const Joi = require("joi");
const dealer = require("../model/Dealer.model");

const dealerSchema = Joi.object({
  cnic: Joi.number().required(),

  name: Joi.string().required(),

  father_name: Joi.string().required(),

  gender: Joi.string().required(),

  country: Joi.string().required(),

  company: Joi.number().required(),

  phone_no: Joi.number().required(),

  curr_add: Joi.string(),

  per_add: Joi.string(),

  dob: Joi.date().iso(),

  doi: Joi.date().iso(),

  doe: Joi.date().iso(),
});

exports.getAll = async (req, res) => {
  try {
    const data = await model.Dealer.findAll();
    if (data < 1) {
      res.send({ Status: { message: "No Delaer Found" } });
    } else res.send({ Status: { message: "Success" }, data: data });
  } catch (error) {
    console.log("in Catch");
    res.send({ Status: { message: error.message } });
  }
};

exports.addDealer = async (req, res) => {
  try {
    const validate = await dealerSchema.validateAsync(req.body);
    const data = await model.Dealer.create(validate);
    res.send({ Status: { message: "Success" }, data: data });
  } catch (error) {
    console.log("in Catch", error.message);
    res.send({ Status: { message: error.message } });
  }
};
