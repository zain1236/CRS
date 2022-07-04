const Joi = require("joi");
const model = require("../model");

const BookingSchema = Joi.object({
  car_reg_no: Joi.string().required(),
  car_booking_date: Joi.date().required(),
  monthly_daily: Joi.string().required(),
  rate: Joi.number().min(1).required(),
  ret_date: Joi.number().min(1).required(),
  meter_start: Joi.number().min(1).required(),
  // foreign Key fields
  company: Joi.number(),
  customer: Joi.number(),
  driver: Joi.number(),
  gaurantor: Joi.number(),
  dealer: Joi.number(),

  // return
  returned: Joi.boolean(),
});

exports.AddBooking = async (req, res) => {
  try {
    console.log(req.body);
    const validate = await BookingSchema.validateAsync(req.body);
    const data = await model.Booking.create(validate);

    if (data < 1) {
      res.send({
        Status: { Message: "Booking was not added" },
      });
    } else {
      res.send({
        Status: {
          Message: "Added Successfully",
        },
        data: data,
      });
    }
  } catch (err) {
    res.send({ Status: { Message: err.message } });
  }
};

exports.getAllBooking = async (req, res) => {
  try {
    const data = await model.Booking.findAll();
    if (data < 1) {
      res.send({ Status: { Message: "No Bookings Found" } });
    } else {
      res.send({ Status: { Message: "Success" }, data: data });
    }
  } catch (err) {
    res.send({ Status: { Message: err.message } });
  }
};

const BookingSearchSchema = Joi.object({
  company: Joi.number().required(),
  car_reg_no: Joi.string().required(),
});

exports.getBooking = async (req, res) => {
  try {
    const validate = await BookingSearchSchema.validateAsync(req.query);
    const data = await model.Booking.findAll({
      where: { company: validate.company, car_reg_no: validate.car_reg_no },
    });

    if (data < 1) {
      res.send({ Status: { Message: "No Bookings Found" } });
    } else {
      res.send({ Status: { Message: "Success" }, data: data });
    }
  } catch (err) {
    res.send({ Status: { Message: err.message } });
  }
};

exports.updateBookingreturn = async (req, res) => {
  try {
    console.log("update booking");

    const data = await model.Booking.update(
      { returned: true },
      { where: { id: req.body.booking } }
    );

    if (data < 1) {
      res.send({ Status: { Message: "Error Updating" } });
    } else {
      res.send({ Status: { Message: "Success" }, data: data });
    }
  } catch (error) {
    console.log("In Catch..");
    res.send({ Status: { Message: error.message } });
  }
};
