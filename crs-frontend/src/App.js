import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../src/MyComponents/Header";
import Addcar from "./MyComponents/Addcar";
import ShowAllCars from "./MyComponents/ShowAllCars";
import MultiStepBooking from "./MyComponents/booking/MultiStepBooking";
import Login from "./MyComponents/Login";
import AddGurantor from "./MyComponents/AddGurantor";
import AddDriver from "./MyComponents/AddDriver";
import EditCar from "./MyComponents/EditCar";
import AddCustomer from "./MyComponents/AddCustomer";
import AddDealer from "./MyComponents/AddDealer";
import Returned from "./MyComponents/booking/Returned";

function App() {
  return (
    <>
      <div className="App w-screen">
        <Router>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <div>
                  <Header loggedIn={true} role={"Receptionist"} />
                  <ShowAllCars />
                </div>
              }
            />

            <Route
              exact
              path="/addcar"
              element={
                <div>
                  <Header loggedIn={true} role={"Receptionist"} />
                  <Addcar />
                </div>
              }
            />

            <Route
              exact
              path="/booking"
              element={
                <div>
                  <Header loggedIn={true} role={"Receptionist"} />
                  <MultiStepBooking />
                </div>
              }
            />
            <Route
              exact
              path="/addGurantor"
              element={
                <div>
                  <Header loggedIn={true} role={"Receptionist"} />
                  <AddGurantor />
                </div>
              }
            />

            <Route
              exact
              path="/addDriver"
              element={
                <div>
                  <Header loggedIn={true} role={"Receptionist"} />
                  <AddDriver />
                </div>
              }
            />
            <Route
              exact
              path="/login"
              element={
                <div>
                  <Login />
                </div>
              }
            />
            <Route
              exact
              path="/editCar/:id"
              element={
                <div>
                  <Header loggedIn={true} role={"Receptionist"} />
                  <EditCar />
                </div>
              }
            />
            <Route
              exact
              path="/addCustomer"
              element={
                <div>
                  {" "}
                  <Header loggedIn={true} role={"Receptionist"} />
                  <AddCustomer />{" "}
                </div>
              }
            />
            <Route
              exact
              path="/addDealer"
              element={
                <div>
                  {" "}
                  <Header loggedIn={true} role={"Receptionist"} />
                  <AddDealer />{" "}
                </div>
              }
            />
            <Route
              exact
              path="/returned"
              element={
                <div>
                  {" "}
                  <Header loggedIn={true} role={"Receptionist"} />
                  <Returned />{" "}
                </div>
              }
            />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
