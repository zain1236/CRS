import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ReactJsAlert from "reactjs-alert";

import axios from "axios";

export class CustomerForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: "error",
      status: false,
      title: "Please Fill All Values",
    };
  }
  // customers = [
  //   {
  //     cnic: 123,
  //     name: "sherry",
  //     address: "pwd",
  //     phone_no: 6034136,
  //   },
  //   {
  //     cnic: 456,
  //     name: "shani",
  //     address: "shamsabad",
  //     phone_no: 5747136,
  //   },
  // ];

  continue = (e) => {
    e.preventDefault();
    const { values } = this.props;

    if (
      values.cust_cnic === "" ||
      values.cust_name === "" ||
      values.cust_address === "" ||
      values.cust_phone_no === ""
    ) {
      this.setState({
        status: true,
        title: "Please fill Customer Details",
      });
    } else {
      this.props.nextStep();
    }
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  search = () => {
    const { values } = this.props;

    var cust = {
      cnic: values.cust_cnic,
      company: 1,
    };

    axios
      .get("http://localhost:3001/customer", {
        params: cust,
      })
      .then((res) => {
        console.log(res.data);
        var message = res.data.Status.Message;

        if (message === "Success") {
          this.props.customChange("cust_id", res.data.data.id);
          this.props.customChange("cust_name", res.data.data.name);
          this.props.customChange("cust_address", res.data.data.curr_add);
          this.props.customChange("cust_phone_no", res.data.data.phone_no);
          this.props.customChange("cust_disable", true);
        } else if (message === "not found") {
          this.setState({
            status: true,
            title: "Please Add Customer First",
          });
          this.props.customChange("cust_disable", false);
        } else {
          this.setState({
            status: true,
            title: message,
          });
        }
      });
  };

  clear = () => {
    const { values } = this.props;
    this.props.customChange("cust_disable", false);
    this.props.customChange("cust_cnic", "");
    this.props.customChange("cust_name", "");
    this.props.customChange("cust_address", "");
    this.props.customChange("cust_phone_no", "");
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
    const { showCustDetails } = this.props.values;

    return (
      <div>
        <ReactJsAlert
          type={this.state.type} // success, warning, error, info
          title={this.state.title} // title you want to display
          status={this.state.status}
          Close={() => this.setState({ status: false })}
        />
        <div style={this.styles.heading}>
          <h1> Car Booking </h1>
        </div>

        <div style={this.styles.form}>
          <div style={this.styles.formMain}>
            <br />
            <div style={this.styles.formHeader}>Customer Details</div>
            <br />
            <TextField
              id="outlined-basic"
              placeholder="Abc-123"
              label="Cnic"
              onChange={handleChange("cust_cnic")}
              defaultValue={values.cust_cnic}
              disabled={values.cust_disable}
              variant="filled"
            />
            <br /> <br />
            <TextField
              id="outlined-basic"
              label="name"
              defaultValue={values.cust_name}
              variant="filled"
              disabled={values.cust_disable}
            />
            <br />
            <br />
            <TextField
              id="outlined-basic"
              label="Address"
              defaultValue={values.cust_address}
              variant="filled"
              disabled={values.cust_disable}
            />
            <br />
            <br />
            <TextField
              id="outlined-basic"
              label="Phone No"
              defaultValue={values.cust_phone_no}
              variant="filled"
              disabled={values.cust_disable}
            />
            <br />
            <br />
            {values.cust_disable ? (
              <Button color="primary" variant="contained" onClick={this.clear}>
                Clear
              </Button>
            ) : (
              <Button color="primary" variant="contained" onClick={this.search}>
                Search
              </Button>
            )}
            <br /> <br />
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

export default CustomerForm;
