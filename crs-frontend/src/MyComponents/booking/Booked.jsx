import { Button } from "@mui/material";
import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// import { AiOutlinePlusCircle } from "react-icons/ai";

const Booked = (props) => {
  const navigate = useNavigate();

  const queryParamw = new URLSearchParams(window.location.search);
  const reg_no = queryParamw.get("car_reg_no");

  // const [check, setCheck] = useState(false);
  return (
    <div
      className=""
      style={{
        width: "100vw",
        padding: "10px",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {console.log(props.values?.bookingData)}
      <br />
      <br />
      <div
        className=""
        style={{
          width: "800px",
          minHeight: "200px",
          backgroundColor: "#E6EFF8",
          borderRadius: "8px",
          padding: "20px",
        }}
      >
        <h1 className="" style={{ color: "red" }}>
          Note:
        </h1>
        <span>
          You will not be able to book the Car on the date that is already
          booked on.
        </span>
        <br />
        <br />
        <h6>
          Car Registration No :{" "}
          <span className="" style={{ color: "blueviolet" }}>
            {reg_no}
          </span>
        </h6>

        {props.values?.bookingData.length ? (
          <Table
            striped
            bordered
            hover
            size="sm"
            style={{ width: "100%", marginTop: "40px" }}
          >
            <thead>
              <tr>
                <th style={{ textAlign: "center" }}>Id</th>
                <th style={{ textAlign: "center" }}>Car Booked Date</th>
                <th style={{ textAlign: "center" }}>Meter Reading</th>
                <th style={{ textAlign: "center" }}>Return Days</th>
                <th style={{ textAlign: "center" }}>Customer</th>
                <th style={{ textAlign: "center" }}>Returned</th>
              </tr>
            </thead>
            <tbody>
              {props.values?.bookingData?.map((b, i) => (
                <React.Fragment key={i}>
                  {!b.returned && (
                    <tr key={b.id}>
                      {console.log(b)}
                      <td>{b.id}</td>
                      <td style={{ textAlign: "center" }}>
                        {" "}
                        <b> {b.car_booking_date} </b>
                      </td>
                      <td style={{ textAlign: "center" }}>{b.meter_start}</td>
                      <td>{b.ret_date}</td>
                      <td>{b.customer}</td>
                      <td>
                        <Link
                          to={`/returned?booking=${b.id}&car_reg_no=${b.car_reg_no}`}
                          className=""
                          style={{ color: "indigo" }}
                        >
                          Returned?
                        </Link>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </Table>
        ) : (
          <span className="" style={{}}>
            No Bookings Yet
          </span>
        )}
        <div
          className=""
          style={{ width: "100%", marginLeft: "auto", display: "flex" }}
        >
          <Button
            variant="contained"
            style={{
              marginTop: "20px",
              marginLeft: "4px",
              textTransform: "uppercase",
            }}
            onClick={() => props.nextStep()}
          >
            Okay
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Booked;
