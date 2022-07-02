import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { Select, MenuItem, Label } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { useEffect } from "react";

export class PaymentForm extends Component {
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

  updateAdvance(event) {
    console.log("in update", event.target.value);

    const { values, handleChange, customChange } = this.props;

    if (event.target.value <= values.total_ammount) {
      console.log("updated");
      customChange("advance", event.target.value);
      customChange("balance", values.total_ammount - event.target.value);
    }
    // else {
    //   customChange("advance", 0);
    //   customChange("balance", values.total_ammount);
    // }
  }
  componentDidMount() {
    console.log("Component mounted");
    const { values, customChange } = this.props;
    let ammount = values.rate * values.ret_date;
    customChange("total_ammount", ammount);
  }

  render() {
    const { values, handleChange } = this.props;
    return (
      <div>
        <div style={this.styles.heading}>
          <h1> Car Booking </h1>
        </div>

        <div style={this.styles.form}>
          <div style={this.styles.formMain}>
            <br />
            <div style={this.styles.formHeader}>Payment Details</div>
            <div>
              <h1>Total Ammount : {values.total_ammount} </h1>
            </div>
            <br />
            <h1>Payment Mode</h1>
            <Select
              id="outlined-basic"
              label="Payment Mode"
              onChange={handleChange("pay_mode")}
              defaultValue={values.pay_mode}
              variant="filled"
            >
              <MenuItem value={"Cash"}>Cash</MenuItem>
              <MenuItem value={"Bank"}>Bank Transfer</MenuItem>
              <MenuItem value={"MicroBank"}>EasyPaisa/JazzCash</MenuItem>
            </Select>
            <br /> <br />
            <TextField
              id="outlined-basic"
              label="Advance"
              type="number"
              onChange={(e, v) => this.updateAdvance(e, v)}
              defaultValue={values.advance}
              variant="filled"
            />
            <br /> <br />
            <h1>
              {" "}
              Balance : {values.advance <= values.balance ? values.balance : 0}
            </h1>
            <Button color="primary" variant="contained" onClick={this.back}>
              Back
            </Button>
            &nbsp;
            <Button color="primary" variant="contained" onClick={this.continue}>
              Review
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default PaymentForm;
