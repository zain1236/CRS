const model = require("../model/index");
const Joi = require("joi");

const companySchema = Joi.object({
  name: Joi.string().min(4).required(),
});

exports.add = async (req, res) => {
  try {
    const validate = await companySchema.validateAsync(req.body);

    const data = await model.Company.create(validate);
    res.send({ Status: { Message: "Success" }, data: data });
  } catch (error) {
    console.log("In Catch..");
    res.send({ Status: { Message: error.message } });
  }
};

const deleteSchema = Joi.object({
  Id: Joi.number().required(),
});

exports.delete = async (req, res) => {
  try {
    const validate = await deleteSchema.validateAsync(req.body);

    const data = await model.Company.destroy({ where: { id: validate.Id } });
    if (data < 1) {
      res.send({ Status: { Message: "No company found" } });
    } else {
      res.send({ Status: { Message: "Success" }, data: data });
    }
  } catch (error) {
    console.log("In Catch..");
    res.send({ Status: { Message: error.message } });
  }
};

exports.getAll = async (req, res) => {
  try {
    const data = await model.Company.findAll();

    if (data < 1) {
      res.send({ Status: { Message: "No company found" } });
    } else {
      res.send({ Status: { Message: "Success" }, data: data });
    }
  } catch (error) {
    console.log("In Catch..");
    res.send({ Status: { Message: error.message } });
  }
};

exports.getById = async (req, res) => {
  try {
    const validate = await deleteSchema.validateAsync(req.body);
    const data = await model.Company.findOne({ where: { id: validate.Id } });

    if (data < 1) {
      res.send({ Status: { Message: "No company found" } });
    } else {
      res.send({ Status: { Message: "Success" }, data: data });
    }
  } catch (error) {
    console.log("In Catch..");
    res.send({ Status: { Message: error.message } });
  }
};

const updateSchema = Joi.object({
  Id: Joi.number().required(),

  name: Joi.string().min(4).required(),
});

exports.update = async (req, res) => {
  try {
    const validate = await updateSchema.validateAsync(req.body);
    const data = await model.Company.update(validate, {
      where: { id: validate.Id },
    });

    console.log(data);
    if (data < 1) {
      res.send({ Status: { Message: "No company found" } });
    } else {
      res.send({ Status: { Message: "Success" }, data: data });
    }
  } catch (error) {
    console.log("In Catch..");
    res.send({ Status: { Message: error.message } });
  }
};
