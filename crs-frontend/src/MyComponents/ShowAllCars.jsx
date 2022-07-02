import { Table, Dropdown, DropdownButton } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { GoThreeBars } from "react-icons/go";
import { LinkContainer } from "react-router-bootstrap";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Edit, EditAttributes } from "@mui/icons-material";
import axios from "axios";
import React, { useCallback } from "react";

const ShowAllCars = () => {
  const cars1 = [
    // {
    //     reg_no: 'AMD-136',
    //     make: 'Honda',
    //     model: 'Civic',
    //     year: '2020',
    //     engine_size: '1300',
    //     chasis_no: "1GDJFEFJ8S8SAJ282",
    //     engine_no: "1GDJFEFJ8S8SAJ282",
    //     colour: "White",
    //     ownership: "Rehan Gull"
    // },
    // {
    //     reg_no: 'UR-420',
    //     make: 'Toyota',
    //     model: 'Revo',
    //     year: '2019',
    //     engine_size: '2700',
    //     chasis_no: "1GDJFEFJ8S8SAJ282",
    //     engine_no: "1GDJFEFJ8S8SAJ282",
    //     colour: "Black",
    //     ownership: "Rehan Gull"
    // },
    // {
    //     reg_no: 'AP-136',
    //     make: 'Toyota',
    //     model: 'Corolla',
    //     year: '2018',
    //     engine_size: '1300',
    //     chasis_no: "1GDJFEFJ8S8SAJ282",
    //     engine_no: "1GDJFEFJ8S8SAJ282",
    //     colour: "Black",
    //     ownership: "Zain"
    // }
  ];

  const [cars, setCars] = useState([]);
  const [deleted, setDeleted] = useState(Math.random());

  const navigate = useNavigate();

  const fetchAllCars = () => {
    const reqoptions = {
      method: "GET",
      // headers : {"Content-Type" : "application/JSON",
      //           //  "Authorization" : 'Bearer ' + localStorage.getItem('t')
      // },
      // body : JSON.stringify(values)
    };

    const url = "http://localhost:3001/car/all";
    fetch(url, reqoptions)
      .then((response) => response.json())
      .then((json) => {
        if (json["Status"]["Message"] === "Success") {
          setCars(json["data"]);
        } else {
          alert(json["Status"]["Message"]);
        }
        // //setisLoadingData(false);
        // setShowData(true);
        // setReturnCredentials(json["CheckIn_Details"]);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchAllCars();
  }, []);

  const deleteCarHandler = (id) => {
    console.log(id);

    const body = {
      data: { id: id },
    };
    axios.delete("http://localhost:3001/car", body).then((d) => {
      console.log(d);
    });

    fetchAllCars();
  };

  return (
    <div className=" w-full h-full">
      <br /> <br />
      <div
        className="mt-10"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: "2%",
        }}
      >
        <Link to="/addcar" className="btn btn-primary">
          <AiOutlinePlusCircle />
          Register New Car
        </Link>
      </div>
      <Table
        striped
        bordered
        hover
        size="sm"
        style={{ width: "100%", margin: "0 20px 0 20px" }}
      >
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>Registration No</th>
            <th style={{ textAlign: "center" }}>Car</th>
            <th style={{ textAlign: "center" }}>Year</th>
            <th style={{ textAlign: "center" }}>Engine Size</th>
            <th style={{ textAlign: "center" }}>Colour</th>
            <th style={{ textAlign: "center" }}>Buttons</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car) => (
            <tr key={car.id}>
              {console.log(car)}
              <td>{car.reg_no}</td>
              <td>{car.make + "-" + car.model}</td>
              <td>{car.year}</td>
              <td>{car.engine_size}</td>
              <td>{car.colour}</td>
              <td style={{ display: "flex", justifyContent: "center" }}>
                <DropdownButton
                  id="dropdown-basic-button"
                  title={
                    <GoThreeBars
                      style={{ color: "white", alignItems: "center" }}
                    />
                  }
                >
                  <LinkContainer
                    to={`/booking?company=${car.company}&car_reg_no=${car.reg_no}`}
                  >
                    <Dropdown.Item> Booking </Dropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/maintenance">
                    <Dropdown.Item> Maintenance </Dropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/carDetails">
                    <Dropdown.Item> Details </Dropdown.Item>
                  </LinkContainer>{" "}
                </DropdownButton>
                <Button
                  variant="outlined"
                  startIcon={<Edit />}
                  style={{
                    marginLeft: "10px",
                    color: "green",
                    border: "1px solid green",
                  }}
                  onClick={() => navigate(`/editCar/${car.id}`)}
                >
                  Edit
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<DeleteIcon />}
                  style={{
                    marginLeft: "10px",
                    color: "red",
                    border: "1px solid red",
                  }}
                  onClick={deleteCarHandler.bind(null, car.id)}
                >
                  Delete
                </Button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ShowAllCars;
