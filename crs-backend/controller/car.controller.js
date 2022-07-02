const model = require("../model/index");
const Joi = require("joi");

const carSchema = Joi.object({
  id: Joi.number(),

  reg_no: Joi.string().required(),

  make: Joi.string().required(),

  model: Joi.string().required(),

  year: Joi.number().required(),

  engine_size: Joi.number(),

  engine_no: Joi.string().min(17).max(17),

  chasis_no: Joi.string().min(17).max(17),

  colour: Joi.string(),

  ownership: Joi.string(),

  company: Joi.number(),
});

exports.add = async (req, res) => {
  try {
    console.log(req.body);
    const validate = await carSchema.validateAsync(req.body);

    const data = await model.Car.create(validate);
    res.send({ Status: { Message: "Success" }, data: data });
  } catch (error) {
    console.log("In Catch..");
    res.send({ Status: { Message: error.message } });
  }
};

const deleteSchema = Joi.object({
  id: Joi.number().required(),
});

exports.delete = async (req, res) => {
  try {
    const validate = await deleteSchema.validateAsync(req.body);

    const data = await model.Car.destroy({
      where: { id: validate.id },
    });

    if (data < 1) {
      res.send({ Status: { Message: "No car found" } });
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
    const data = await model.Car.findAll();

    if (data < 1) {
      res.send({ Status: { Message: "No Cars found" } });
    } else {
      res.send({ Status: { Message: "Success" }, data: data });
    }
  } catch (error) {
    console.log("In Catch..");
    res.send({ Status: { Message: error.message } });
  }
};

exports.getOne = async (req, res) => {
  try {
    console.log(req.query);
    // const validate = await deleteSchema.validateAsync(req.body);
    const data = await model.Car.findOne({
      where: { id: req.query.id },
    });

    if (data < 1) {
      res.send({ Status: { Message: "No Car found" } });
    } else {
      res.send({ Status: { Message: "Success" }, data: data });
    }
  } catch (error) {
    console.log("In Catch..");
    res.send({ Status: { Message: error.message } });
  }
};

exports.update = async (req, res) => {
  try {
    const validate = await carSchema.validateAsync(req.body);

    const data = await model.Car.update(validate, {
      where: { id: validate.id },
    });

    if (data < 1) {
      res.send({ Status: { Message: "No Car found" } });
    } else {
      res.send({ Status: { Message: "Success" }, data: data });
    }
  } catch (error) {
    console.log("In Catch..");
    res.send({ Status: { Message: error.message } });
  }
};
