import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CarBg from "./data/background.jpeg";
import { useForm } from "react-hook-form";
import { useState } from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Stack from "@mui/material/Stack";
import DatePicker from "@mui/lab/DatePicker";
import ReactjsAlert from "reactjs-alert";

const AddCustomer = () => {
  const [value, setValue] = useState(new Date());
  const [value1, setValue1] = useState(new Date());
  const [value2, setValue2] = useState(new Date());
  const [notification, setNotification] = useState({
    type: "error",
    status: false,
    title: "Please Fill All the details",
  });
  const [customerData, setcustomerData] = useState({
    name: "",
    father_name: "",
    gender: "",
    country: "",
    cnic: "",
    phone_no: "",
    dob: value,
    doi: value1,
    doe: value2,
    curr_add: "",
    per_add: "",
    company: 0,
  });
  const useStyles = makeStyles((theme) => ({
    textField: {
      margin: "10px 0",
      width: "100%",
      height: "50px",
      backgroundColor: "White",
    },
    addForm: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      // backgroundColor: "rgb(0,100,255)",
    },
    mainForm: {
      backgroundColor: "rgba(255,255,255,0.5)",
      width: "50%",
      alignItems: "center",
      textAlign: "center",
      paddingLeft: "10%",
      paddingRight: "10%",
      paddingTop: "20px",
    },
    heading: {
      textShadow: "1px 1px #ff0000",
    },
    button: {
      margin: "10px 0",
    },
  }));
  const classes = useStyles();

  const onCLick = () => {
    if (customerData === null) {
      setNotification({
        ...notification,
        status: true,
      });
    } else {
      customerData["company"] = 1;
      const reqoptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/JSON",
          //  "Authorization" : 'Bearer ' + localStorage.getItem('t')
        },
        body: JSON.stringify(customerData),
      };
      const url = "http://localhost:3001/customer";
      fetch(url, reqoptions)
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          var message = json.Status.Message;

          if (message === "Success") {
            setNotification({
              type: "success",
              status: true,
              title: "Customer Added Successfuly",
            });

            setTimeout(() => (window.location = "/"), 2000);
          } else {
            setNotification({
              type: "error",
              status: true,
              title: "Please Fill all your details Correctly",
            });
          }

          // alert(json["Status"]["Message"]);
          // //setisLoadingData(false);
          // setShowData(true);
          // setReturnCredentials(json["CheckIn_Details"]);
        })
        .catch((error) => {
          console.log(error);
          setNotification({
            type: "error",
            status: true,
            title: "Something went Wrong",
          });
        });
    }
  };

  return (
    <>
      <ReactjsAlert
        type={notification.type} // success, warning, error, info
        title={notification.title} // title you want to display
        status={notification.status}
        Close={() => setNotification({ ...notification, status: false })}
      />
      <div style={{ height: "100vh" }}>
        <div
          style={{
            backgroundImage: "url(" + CarBg + ")",
            backgroundSize: "auto",
          }}
        >
          <div className={classes.addForm} style={{ minHeight: "100vh" }}>
            <form className={classes.mainForm}>
              <h1 className={classes.heading}> Add Customer Details</h1>
              <TextField
                id="outlined-basic"
                placeholder="Will Smith etc."
                label="Name"
                variant="filled"
                className={classes.textField}
                value={customerData.name}
                onChange={(e) =>
                  setcustomerData({ ...customerData, name: e.target.value })
                }
              />
              <br />
              <TextField
                id="outlined-basic"
                placeholder="Will Smith etc."
                label="Father Name"
                variant="filled"
                className={classes.textField}
                value={customerData.father_name}
                onChange={(e) =>
                  setcustomerData({
                    ...customerData,
                    father_name: e.target.value,
                  })
                }
              />
              <br />

              <TextField
                id="outlined-basic"
                label="CNIC"
                variant="filled"
                className={classes.textField}
                value={customerData.cnic}
                onChange={(e) =>
                  setcustomerData({
                    ...customerData,
                    cnic: e.target.value,
                  })
                }
              />
              <br />
              <TextField
                id="outlined-basic"
                label="Gender"
                placeholder="F/M/Other"
                variant="filled"
                className={classes.textField}
                value={customerData.gender}
                onChange={(e) =>
                  setcustomerData({ ...customerData, gender: e.target.value })
                }
              />
              <br />

              <TextField
                id="outlined-basic"
                label="Country of Stay"
                placeholder=""
                variant="filled"
                className={classes.textField}
                value={customerData.country}
                onChange={(e) =>
                  setcustomerData({ ...customerData, country: e.target.value })
                }
              />
              <br />

              <TextField
                id="outlined-basic"
                label="Phone No"
                placeholder="03xxxxxxxx"
                variant="filled"
                className={classes.textField}
                value={customerData.phone_no}
                onChange={(e) =>
                  setcustomerData({ ...customerData, phone_no: e.target.value })
                }
              />
              <br />
              <div>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <Stack spacing={1}>
                    <DatePicker
                      disableFuture
                      label="Date of Birth"
                      variant="filled"
                      openTo="year"
                      views={["year", "month", "day"]}
                      value={value}
                      onChange={(newValue) => {
                        setValue(newValue);
                        setcustomerData({ ...customerData, dob: newValue });
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </Stack>
                </LocalizationProvider>
              </div>
              <br />

              <div>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <Stack spacing={1}>
                    <DatePicker
                      disableFuture
                      label="Date of Issue"
                      variant="filled"
                      openTo="year"
                      views={["year", "month", "day"]}
                      value={value1}
                      onChange={(newValue) => {
                        setValue1(newValue);
                        setcustomerData({ ...customerData, doi: newValue });
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </Stack>
                </LocalizationProvider>
              </div>
              <br />

              <div>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <Stack spacing={1}>
                    <DatePicker
                      label="Date of Expiry"
                      variant="filled"
                      openTo="year"
                      views={["year", "month", "day"]}
                      value={value2}
                      onChange={(newValue) => {
                        setValue2(newValue);
                        setcustomerData({ ...customerData, doe: newValue });
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </Stack>
                </LocalizationProvider>
              </div>
              <br />

              <TextField
                id="outlined-basic"
                label="Current Address"
                placeholder=""
                variant="filled"
                className={classes.textField}
                value={customerData.curr_add}
                onChange={(e) =>
                  setcustomerData({ ...customerData, curr_add: e.target.value })
                }
              />
              <br />
              <TextField
                id="outlined-basic"
                label="Present Stay"
                placeholder=""
                variant="filled"
                className={classes.textField}
                value={customerData.per_add}
                onChange={(e) =>
                  setcustomerData({ ...customerData, per_add: e.target.value })
                }
              />
              <br />

              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                onClick={onCLick}
              >
                Submit Details
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCustomer;
