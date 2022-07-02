import React, { Component } from "react";
import { Select, MenuItem, Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

export class OtherInfoForm extends Component {
  // drivers = [
  //     // {
  //     //     id : 1,
  //     //     cnic : 123,
  //     //     name : "sherry",
  //     //     address : "pwd",
  //     //     phone_no : 6034136
  //     // },
  //     // {
  //     //     id: 2,
  //     //     cnic : 456,
  //     //     name : "shani",
  //     //     address : "shamsabad",
  //     //     phone_no : 5747136
  //     // }

  // ];
  state = {
    drivers: [],
    guarantors: [],
    dealers: [],
  };

  componentDidMount() {
    const company = 1;
    const reqoptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/JSON",
        //  "Authorization" : 'Bearer ' + localStorage.getItem('t')
      },
    };

    /////// Driver
    var url = `http://localhost:3001/driver/all?company=${company}`;
    fetch(url, reqoptions)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        // alert(json["Status"]["Message"]);
        this.setState({ drivers: json["data"] });
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });

    /////// Dealer
    url = `http://localhost:3001/dealer`;
    fetch(url, reqoptions)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        // alert(json["Status"]["Message"]);
        this.setState({ dealers: json["data"] });
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
    /////// gurantors
    url = `http://localhost:3001/gurantor/all?company=${company}`;
    fetch(url, reqoptions)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        this.setState({ guarantors: json["data"] });
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  }
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  styles = {
    heading: {
      textAlign: "center",
      textShadow: "1px 1px #ff0000",
    },
    form: {
      paddingLeft: "10%",
      paddingRight: "10%",
      paddingTop: "2%",
      textAlign: "center",
    },
    formMain: {
      background: "rgba(46,172,205,0.8)",
      // borderStyle: "solid",
      // borderColor: "#92a8d1",
      paddingLeft: "10%",
      paddingRight: "10%",
      paddingTop: "2%",
      paddingBottom: "2%",
    },
    formHeader: {
      background: "white",
      paddingTop: "1%",
      paddingBottom: "1%",
    },
    body: {
      opacity: "5",
      borderBlockColor: "white",
    },
  };

  render() {
    const { values, handleChange } = this.props;
    const { drivers, guarantors, dealers } = this.state;
    return (
      <div>
        <div style={this.styles.heading}>
          <h1> Car Booking </h1>
        </div>

        <div style={this.styles.form}>
          <div style={this.styles.formMain}>
            <br />
            <div style={this.styles.formHeader}>Other Information</div>
            <br />
            <Select
              id="outlined-basic"
              label="Driver"
              onChange={handleChange("driver")}
              defaultValue={values.driver}
              variant="filled"
              style={{ width: "35%" }}
            >
              <MenuItem value={"null"}>No driver</MenuItem>
              {drivers?.map((driver) => (
                <MenuItem value={driver.id}>
                  {" "}
                  {driver.id + "-" + driver.name}{" "}
                </MenuItem>
              ))}
            </Select>
            <br />
            <br />
            <Select
              id="outlined-basic"
              label="Dealer (Optional)"
              onChange={handleChange("dealer")}
              defaultValue={values.dealer}
              variant="filled"
              style={{ width: "35%" }}
            >
              <MenuItem value={"null"}>No Dealer</MenuItem>
              {dealers?.map((dealer) => (
                <MenuItem value={dealer.id}>
                  {" "}
                  {dealer.id + "-" + dealer.name}{" "}
                </MenuItem>
              ))}
            </Select>
            <br />
            <br />
            <Select
              id="outlined-basic"
              label="Guarantor (Optional)"
              onChange={handleChange("guarantor")}
              defaultValue={values.guarantor}
              variant="filled"
              style={{ width: "35%" }}
            >
              <MenuItem value={"null"}>No Guarantor</MenuItem>
              {guarantors?.map((guarantor) => (
                <MenuItem value={guarantor.id}>
                  {" "}
                  {guarantor.id + "-" + guarantor.name}{" "}
                </MenuItem>
              ))}
            </Select>
            <br />
            <br />
            <Button color="primary" variant="contained" onClick={this.back}>
              Back
            </Button>
            &nbsp;
            <Button color="primary" variant="contained" onClick={this.continue}>
              Continue
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default OtherInfoForm;
