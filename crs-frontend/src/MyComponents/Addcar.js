import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CarBg from "./data/background.jpeg";
import { useForm } from "react-hook-form";
import { useState } from "react";
import ReactjsAlert from "reactjs-alert";

const Addcar = () => {
  const [notification, setNotification] = useState({
    type: "error",
    status: false,
    title: "Please Fill All the details",
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

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (values) => {
    values["company"] = 1;
    const reqoptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/JSON",
        //  "Authorization" : 'Bearer ' + localStorage.getItem('t')
      },
      body: JSON.stringify(values),
    };
    const url = "http://localhost:3001/car";
    fetch(url, reqoptions)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);

        var message = json.Status.Message;

        if (message === "Success") {
          setNotification({
            type: "success",
            status: true,
            title: "Car Added Successfuly",
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
        setNotification({
          type: "error",
          status: true,
          title: "Something went Wrong",
        });
      });
  };

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
          <form className={classes.mainForm} onSubmit={handleSubmit(onSubmit)}>
            <h1 className={classes.heading}> Register Car</h1>
            <TextField
              id="outlined-basic"
              placeholder="Abc-123"
              label="Registration No"
              variant="filled"
              className={classes.textField}
              {...register("reg_no", {
                required: "Required",
                pattern: {
                  value: /^[A-Z]+[-][0-9]+$/i,
                },
              })}
              error={errors.reg_no}
            />
            <br />

            <TextField
              id="outlined-basic"
              label="Make"
              placeholder="Honda"
              variant="filled"
              className={classes.textField}
              {...register("make", {
                required: "Required",
                pattern: {
                  value: /^[A-Z]+$/i,
                },
              })}
              error={errors.make}
            />

            <br />

            <TextField
              id="outlined-basic"
              label="Model"
              placeholder="Civic"
              variant="filled"
              className={classes.textField}
              {...register("model", {
                required: "Required",
                pattern: {
                  value: /^[A-Z]+$/i,
                },
              })}
              error={errors.model}
            />
            <br />

            <TextField
              id="outlined-basic"
              label="Year"
              placeholder="2020"
              variant="filled"
              className={classes.textField}
              {...register("year", {
                required: "Required",
                pattern: {
                  value: /^[0-9]{4}$/i,
                },
              })}
              error={errors.year}
            />
            <br />

            <TextField
              id="outlined-basic"
              label="Engine Size(In cc)"
              placeholder="660"
              variant="filled"
              className={classes.textField}
              {...register("engine_size", {
                required: false,
                pattern: {
                  value: /^[0-9]{3,5}$/i,
                },
              })}
              error={errors.engine_size}
            />
            <br />

            <TextField
              id="outlined-basic"
              label="Chasis No"
              placeholder="1FUPFSEB3YLF03840"
              variant="filled"
              className={classes.textField}
              {...register("chasis_no", {
                required: false,
                pattern: {
                  value: /^[A-Z0-9]{17}$/i,
                },
              })}
              error={errors.chasis_no}
            />
            <br />

            <TextField
              id="outlined-basic"
              label="Engine No"
              placeholder="1FUPFSEB3YLF03840"
              variant="filled"
              className={classes.textField}
              {...register("engine_no", {
                required: false,
                pattern: {
                  value: /^[A-Z0-9]{11,17}$/i,
                },
              })}
              error={errors.engine_no}
            />
            <br />

            <TextField
              id="outlined-basic"
              label="Colour"
              placeholder="White"
              variant="filled"
              className={classes.textField}
              {...register("colour", {
                required: false,
                pattern: {
                  value: /^[A-Z]{3,15}$/i,
                },
              })}
              error={errors.colour}
            />
            <br />

            <TextField
              id="outlined-basic"
              label="OwnerShip"
              placeholder="Rehan Gull"
              variant="filled"
              className={classes.textField}
              {...register("ownership", {
                required: false,
                pattern: {
                  value: /^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/i,
                },
              })}
              error={errors.ownership}
            />
            <br />

            <Button
              type="submit"
              className={classes.button}
              variant="contained"
              color="primary"
            >
              Add car
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Addcar;
