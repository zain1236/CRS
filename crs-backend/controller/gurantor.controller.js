const model = require("../model/index");
const Joi = require("joi");

const gurantorSchema = Joi.object({
  cnic: Joi.number().required(),

  name: Joi.string().required(),

  father_name: Joi.string().required(),

  phone_no: Joi.number().required(),

  gender: Joi.string().required(),

  country: Joi.string().required(),

  company: Joi.number().required(),

  curr_add: Joi.string(),

  per_add: Joi.string(),

  dob: Joi.date().iso(),

  doi: Joi.date().iso(),

  doe: Joi.date().iso(),
});

exports.add = async (req, res) => {
  try {
    console.log(req.body);
    const validate = await gurantorSchema.validateAsync(req.body);
    const check = await model.Gurantor.findOne({
      where: { cnic: validate.cnic, company: validate.company },
    });
    console.log(check);
    if (!check) {
      const data = await model.Gurantor.create(validate);
      res.send({ Status: { Message: "Success" }, data: validate });
    } else {
      res.send({ Status: { Message: "Error Gurantor already exist" } });
    }
  } catch (error) {
    console.log("In Catch..");
    res.send({ Status: { Message: error.message } });
  }
};

const getSchema = Joi.object({
  cnic: Joi.number().required(),

  company: Joi.number().required(),
});

exports.getOne = async (req, res) => {
  try {
    console.log("body", req.query);

    const validate = await getSchema.validateAsync(req.query);

    const data = await model.Gurantor.findOne({
      where: { cnic: validate.cnic, company: validate.company },
    });

    if (data < 1) {
      res.send({ Status: { Message: "not found" } });
    } else {
      res.send({ Status: { Message: "Success" }, data: data });
    }
  } catch (error) {
    console.log("In Catch..");
    res.send({ Status: { Message: error.message } });
  }
};

const grantorCompanySchema = Joi.object({
  company: Joi.number().required(),
});

exports.getAll = async (req, res) => {
  try {
    console.log("body", req.query);

    const validate = await grantorCompanySchema.validateAsync(req.query);

    const data = await model.Gurantor.findAll({
      where: { company: validate.company },
    });

    if (data < 1) {
      res.send({ Status: { Message: "not found" } });
    } else {
      res.send({ Status: { Message: "Success" }, data: data });
    }
  } catch (error) {
    console.log("In Catch..");
    res.send({ Status: { Message: error.message } });
  }
};
