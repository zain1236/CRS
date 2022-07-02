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

const AddDealer = () => {
  const [value, setValue] = useState(new Date());
  const [value1, setValue1] = useState(new Date());
  const [value2, setValue2] = useState(new Date());

  const [notification, setNotification] = useState({
    type: "error",
    status: false,
    title: "Please Fill All the details",
  });
  const [dealerData, setdealerData] = useState({
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
    dealerData["company"] = 1;
    const reqoptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/JSON",
        //  "Authorization" : 'Bearer ' + localStorage.getItem('t')
      },
      body: JSON.stringify(dealerData),
    };
    const url = "http://localhost:3001/dealer";
    fetch(url, reqoptions)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        var message = json.Status.message;

        if (message === "Success") {
          setNotification({
            type: "success",
            status: true,
            title: "Dealer Added Successfuly",
          });

          setTimeout(() => (window.location = "/"), 1000);
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
        // alert(error);
        setNotification({
          type: "error",
          status: true,
          title: "Something went Wrong",
        });
      });
  };

  return (
    <div style={{ height: "100vh" }}>
      <ReactjsAlert
        type={notification.type} // success, warning, error, info
        title={notification.title} // title you want to display
        status={notification.status}
        Close={() => setNotification({ ...notification, status: false })}
      />
      <div
        style={{
          backgroundImage: "url(" + CarBg + ")",
          backgroundSize: "auto",
        }}
      >
        <div className={classes.addForm} style={{ minHeight: "100vh" }}>
          <form className={classes.mainForm}>
            <h1 className={classes.heading}> Add Dealer Details</h1>
            <TextField
              id="outlined-basic"
              placeholder="Will Smith etc."
              label="Name"
              variant="filled"
              className={classes.textField}
              value={dealerData.name}
              onChange={(e) =>
                setdealerData({ ...dealerData, name: e.target.value })
              }
            />
            <br />
            <TextField
              id="outlined-basic"
              placeholder="Will Smith etc."
              label="Father Name"
              variant="filled"
              className={classes.textField}
              value={dealerData.father_name}
              onChange={(e) =>
                setdealerData({
                  ...dealerData,
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
              value={dealerData.cnic}
              onChange={(e) =>
                setdealerData({
                  ...dealerData,
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
              value={dealerData.gender}
              onChange={(e) =>
                setdealerData({ ...dealerData, gender: e.target.value })
              }
            />
            <br />

            <TextField
              id="outlined-basic"
              label="Country of Stay"
              placeholder=""
              variant="filled"
              className={classes.textField}
              value={dealerData.country}
              onChange={(e) =>
                setdealerData({ ...dealerData, country: e.target.value })
              }
            />
            <br />

            <TextField
              id="outlined-basic"
              label="Phone No"
              placeholder="03xxxxxxxx"
              variant="filled"
              className={classes.textField}
              value={dealerData.phone_no}
              onChange={(e) =>
                setdealerData({ ...dealerData, phone_no: e.target.value })
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
                      setdealerData({ ...dealerData, dob: newValue });
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
                      setdealerData({ ...dealerData, doi: newValue });
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
                      setdealerData({ ...dealerData, doe: newValue });
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
              value={dealerData.curr_add}
              onChange={(e) =>
                setdealerData({ ...dealerData, curr_add: e.target.value })
              }
            />
            <br />
            <TextField
              id="outlined-basic"
              label="Present Stay"
              placeholder=""
              variant="filled"
              className={classes.textField}
              value={dealerData.per_add}
              onChange={(e) =>
                setdealerData({ ...dealerData, per_add: e.target.value })
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
  );
};

export default AddDealer;
