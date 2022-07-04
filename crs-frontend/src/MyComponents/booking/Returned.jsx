import axios from "axios";
import React, { useState } from "react";

const Returned = () => {
  const [meterReading, setMeterReading] = useState();
  const [returnedDate, setReturnedDate] = useState();
  const [cashDelivery, setcashDelivery] = useState();
  const [damage, setdamage] = useState();
  const [message, setmessage] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    const queryParamw = new URLSearchParams(window.location.search);
    const booking = queryParamw.get("booking");
    const data = {
      meterReading,
      returnDate: returnedDate,
      cashDelivery,
      damage,
      message,
      booking,
    };

    const Bookingdata = {
      booking,
    };

    axios
      .post("http://localhost:3001/returned/", data)
      .then((data) => console.log(data.data))
      .catch((err) => console.log(err));

    axios
      .patch("http://localhost:3001/booking/return", Bookingdata)
      .then((data) => console.log(data.data))
      .catch((err) => console.log(err));
  };

  return (
    <div
      className=""
      style={{
        width: "100vw",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        className=""
        style={{
          width: "900px",
          minHeight: "500px",
          backgroundColor: "#E6EFF8",
          borderRadius: "8px",
          padding: "20px",
        }}
      >
        <h2>Returned Vehicle Information.</h2>

        <form
          className=""
          onSubmit={submitHandler}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            marginTop: "30px",
            padding: "1rem 8rem 10px",
          }}
        >
          <div className="" style={{}}>
            <label
              htmlFor=""
              className=""
              style={{ fontSize: "large", fontStyle: "bold" }}
            >
              Meter Reading
            </label>
            <input
              type="number"
              onChange={(e) => setMeterReading(e.target.value)}
              name=""
              id=""
              style={{
                outline: "none",
                width: "100%",
                height: "40px",
                borderRadius: "8px",
                border: "none",
                borderColor: "#ccc",
                padding: "4px",
              }}
            />
            <label
              htmlFor=""
              className=""
              style={{ fontSize: "large", fontStyle: "bold", marginTop: "8px" }}
            >
              Returned Date
            </label>
            <input
              type="date"
              name=""
              onChange={(e) => setReturnedDate(e.target.value)}
              id=""
              style={{
                outline: "none",
                width: "100%",
                height: "40px",
                borderRadius: "8px",
                border: "none",
                borderColor: "#ccc",
                padding: "4px",
              }}
            />
            <label
              htmlFor=""
              className=" "
              style={{ fontSize: "large", fontStyle: "bold", marginTop: "8px" }}
            >
              Cash Delivery
            </label>
            <input
              type="text"
              onChange={(e) => setcashDelivery(e.target.value)}
              name=""
              id=""
              style={{
                outline: "none",
                width: "100%",
                height: "40px",
                borderRadius: "8px",
                border: "none",
                borderColor: "#ccc",
                padding: "4px",
              }}
            />
            <label
              htmlFor=""
              className=""
              style={{ fontSize: "large", fontStyle: "bold", marginTop: "8px" }}
            >
              Damage (if Any)
            </label>
            <textarea
              type="text"
              name=""
              onChange={(e) => setdamage(e.target.value)}
              id=""
              style={{
                outline: "none",
                width: "100%",
                // height: "40px",
                borderRadius: "8px",
                border: "none",
                borderColor: "#ccc",
                padding: "4px",
              }}
            />
            <label
              htmlFor=""
              className=""
              style={{ fontSize: "large", fontStyle: "bold", marginTop: "8px" }}
            >
              Message (if Any)
            </label>
            <textarea
              type="text"
              onChange={(e) => setmessage(e.target.value)}
              name=""
              id=""
              style={{
                outline: "none",
                width: "100%",
                // height: "40px",
                borderRadius: "8px",
                border: "none",
                borderColor: "#ccc",
                padding: "4px",
              }}
            />
          </div>
          <button
            className=""
            style={{
              marginTop: "20px",
              padding: "10px",
              border: "none",
              backgroundColor: "indigo",
              color: "white",
              borderRadius: "8px",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Returned;
