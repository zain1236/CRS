const model = require("../model/index");
const Joi = require("joi");

const customerSchema = Joi.object({
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
    const validate = await customerSchema.validateAsync(req.body);
    const check = await model.Customer.findOne({
      where: { cnic: validate.cnic, company: validate.company },
    });
    console.log(check);
    if (!check) {
      const data = await model.Customer.create(validate);
      res.send({ Status: { Message: "Success" }, data: data });
    } else {
      res.send({ Status: { Message: "Error Customer already exist" } });
    }
  } catch (error) {
    console.log("In Catch..");
    res.send({ Status: { Message: error.message } });
  }
};

// const deleteSchema = Joi.object({
//     reg_no: Joi.string()
//         .required()
// });

// exports.delete = async (req, res) => {
//     try {

//         const validate = await deleteSchema.validateAsync(req.body);

//         const data = await model.Car.destroy({where : {reg_no : validate.reg_no}});

//         if(data < 1){
//             res.send({ "Status":{Message: "No car found"}});
//         }
//         else{
//             res.send({ "Status":{Message: "Success"},"data":data});
//         }
//     }
//     catch (error) {
//         console.log("In Catch..");
//         res.send({ "Status":{Message: error.message}});
//     }
// };

exports.getAll = async (req, res) => {
  try {
    const data = await model.Customer.findAll();

    if (data < 1) {
      res.send({ Status: { Message: "No Customer found" } });
    } else {
      res.send({ Status: { Message: "Success" }, data: data });
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

    const data = await model.Customer.findOne({
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

// exports.update = async (req, res) => {
//     try {

//         const validate = await carSchema.validateAsync(req.body);

//         const data = await model.Car.update(validate,
//             {where : {reg_no : validate.reg_no}
//         });

//         if(data < 1){
//             res.send({ "Status":{Message: "No Car found"}});
//         }
//         else{
//             res.send({ "Status":{Message: "Success"},"data":data});
//         }
//     }
//     catch (error) {
//         console.log("In Catch..");
//         res.send({ "Status":{Message: error.message}});
//     }
// };
