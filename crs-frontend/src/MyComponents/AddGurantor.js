import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CarBg from "./data/background.jpeg";
import { useForm } from "react-hook-form";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Stack from "@mui/material/Stack";
import DatePicker from "@mui/lab/DatePicker";
import { useState } from "react";
import ReactjsAlert from "reactjs-alert";

const AddGurantor = () => {
  const [value, setValue] = useState(new Date());
  const [value1, setValue1] = useState(new Date());
  const [value2, setValue2] = useState(new Date());

  const [notification, setNotification] = useState({
    type: "error",
    status: false,
    title: "Please Fill All the details",
  });
  const [gurantorData, setgurantorData] = useState({
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
    gurantorData["company"] = 1;
    const reqoptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/JSON",
        //  "Authorization" : 'Bearer ' + localStorage.getItem('t')
      },
      body: JSON.stringify(gurantorData),
    };
    const url = "http://localhost:3001/gurantor";
    fetch(url, reqoptions)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        var message = json.Status.Message;

        if (message === "Success") {
          setNotification({
            type: "success",
            status: true,
            title: "Gurantor Added Successfuly",
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
  };

  const {
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div>
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
        <div className={classes.addForm}>
          <form className={classes.mainForm}>
            <h1 className={classes.heading}> Add Gurantor Details</h1>
            <TextField
              id="outlined-basic"
              placeholder="Will Smith etc."
              label="Name"
              variant="filled"
              className={classes.textField}
              value={gurantorData.name}
              onChange={(e) =>
                setgurantorData({ ...gurantorData, name: e.target.value })
              }
            />
            <br />

            <TextField
              id="outlined-basic"
              label="Father Name"
              variant="filled"
              className={classes.textField}
              value={gurantorData.father_name}
              onChange={(e) =>
                setgurantorData({
                  ...gurantorData,
                  father_name: e.target.value,
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
              value={gurantorData.gender}
              onChange={(e) =>
                setgurantorData({ ...gurantorData, gender: e.target.value })
              }
            />
            <br />

            <TextField
              id="outlined-basic"
              label="Country of Stay"
              placeholder=""
              variant="filled"
              className={classes.textField}
              value={gurantorData.country}
              onChange={(e) =>
                setgurantorData({ ...gurantorData, country: e.target.value })
              }
            />
            <br />

            <TextField
              id="outlined-basic"
              label="Identity Number"
              placeholder="xxxxxxxxxxxxx"
              variant="filled"
              className={classes.textField}
              value={gurantorData.cnic}
              onChange={(e) =>
                setgurantorData({ ...gurantorData, cnic: e.target.value })
              }
            />
            <br />

            <TextField
              id="outlined-basic"
              label="Phone Number"
              placeholder="03xxxxxxxxx"
              variant="filled"
              className={classes.textField}
              value={gurantorData.phone_no}
              onChange={(e) =>
                setgurantorData({ ...gurantorData, phone_no: e.target.value })
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
                      setgurantorData({ ...gurantorData, dob: newValue });
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
                      setgurantorData({ ...gurantorData, doi: newValue });
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
                      setgurantorData({ ...gurantorData, doe: newValue });
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </Stack>
              </LocalizationProvider>
            </div>
            <br />

            <TextField
              id="outlined-basic"
              label="Present Address"
              placeholder=""
              variant="filled"
              className={classes.textField}
              value={gurantorData.per_add}
              onChange={(e) =>
                setgurantorData({ ...gurantorData, per_add: e.target.value })
              }
            />

            <TextField
              id="outlined-basic"
              label="Permanent Address"
              placeholder=""
              variant="filled"
              className={classes.textField}
              value={gurantorData.curr_add}
              onChange={(e) =>
                setgurantorData({ ...gurantorData, curr_add: e.target.value })
              }
            />
            <br />

            <Button
              type="submit"
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

export default AddGurantor;
