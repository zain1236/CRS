import React, { Component } from "react";
import BasicForm from "./BasicForm";
import Booked from "./Booked";
import CustomerForm from "./CustomerForm";
import OtherInfoForm from "./OtherInfoForm";
import PaymentForm from "./PaymentForm";
import ReviewForm from "./ReviewForm";

export class MultiStepBooking extends Component {
  state = {
    step: -1,

    //0
    booked: false,
    bookingData: [],

    //1
    reg_no: "",
    book_date: "",
    ret_date: "",
    monthly_daily: "Daily",
    rate: 0,
    meter_start: 0,

    //2
    cust_id: 0,
    cust_disable: false,
    cust_cnic: "",
    cust_name: "",
    cust_address: "",
    cust_phone_no: "",

    //3
    driver_id: 0,
    driver: "null",
    dealer_id: 0,
    dealer: "",
    guarantor_id: 0,
    guarantor: "",

    //4
    pay_mode: "Cash",
    total_ammount: "",
    advance: 0,
    balance: 0,
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  // Handle fields change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  customChange = (input, value) => {
    this.setState({ [input]: value });
  };

  componentDidMount() {
    const queryParamw = new URLSearchParams(window.location.search);
    const reg_no = queryParamw.get("car_reg_no");
    const company = queryParamw.get("company");
    fetch(
      `http://localhost:3001/booking/?company=${company}&car_reg_no=${reg_no}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);

        if (data.data) {
          this.setState({
            booked: true,
            bookingData: data.data,
            step: 0,
          });
        } else {
          this.setState({
            step: 0,
          });
        }
      });
  }

  render() {
    const { step } = this.state;

    const {
      booked,
      bookingData,
      reg_no,
      book_date,
      ret_date,
      monthly_daily,
      rate,
      meter_start,
      showCustDetails,
      cust_disable,
      cust_cnic,
      cust_name,
      cust_id,
      cust_address,
      cust_phone_no,
      driver,
      dealer,
      guarantor,
      pay_mode,
      total_ammount,
      advance,
      balance,
    } = this.state;
    const values = {
      booked,
      bookingData,
      reg_no,
      book_date,
      ret_date,
      monthly_daily,
      rate,
      meter_start,
      showCustDetails,
      cust_disable,
      cust_cnic,
      cust_name,
      cust_id,
      cust_address,
      cust_phone_no,
      driver,
      dealer,
      guarantor,
      pay_mode,
      total_ammount,
      advance,
      balance,
    };

    switch (step) {
      case -1:
        return <p>loading...</p>;
      case 0:
        return (
          <Booked
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );

      case 1:
        return (
          <BasicForm
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <CustomerForm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            customChange={this.customChange}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <OtherInfoForm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            customChange={this.customChange}
            values={values}
          />
        );
      case 4:
        return (
          <div>
            <PaymentForm
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              customChange={this.customChange}
              values={values}
            />
          </div>
        );

      case 5:
        return (
          <div>
            <ReviewForm
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
          </div>
        );
      default:
        console.log("This is a multi-step form built with React.");
    }
  }
}

export default MultiStepBooking;
