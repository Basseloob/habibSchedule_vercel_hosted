import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import axios from "axios";
// Pages :
import Home from "./pages/Home";
import Login from "./pages/Login";
import RegisteredUsers from "./pages/RegisteredUsers";
import Register from "./pages/Register";
import HabibData from "./pages/HabibData";
import ManeaData from "./pages/ManeaData";
import MowasatData from "./pages/MowasatData";

function App() {
  const [chosenHospital, setChoosenHsopital] = useState("Welcome");

  const showHabibData = () => {
    // axios.get("https://dog.ceo/api/breeds/image/random").then((response) => {
    // const data = response.data.message;
    // console.log(data);
    // });
    console.log("this is Al-Habib Hospital");
    setChoosenHsopital("Al-Habib");
  };

  const showManeaData = () => {
    console.log("this is Manea Hospital");
    setChoosenHsopital("Al-Manea");
  };

  const showMowasatData = () => {
    console.log("this is Moawast Hospital");
    setChoosenHsopital("Al-Mowasat");
  };

  return (
    <div className="body">
      <Router>
        <header>
          <div className="links">
            <Link to="/login">Login</Link>
            <Link to="/register">Registeration</Link>

            <Link to="/">Home Page</Link>
            <h3 style={{ paddingLeft: 100 }}> {chosenHospital}</h3>
          </div>

          <div className="dropdown">
            <button className="dropbtn">Show Hospitals</button>
            <div className="dropdown-content">
              <Link to="/habibData" onClick={showHabibData}>
                Al-habib
              </Link>
              <Link to="/maneaData" onClick={showManeaData}>
                Al-Manea
              </Link>
              <Link to="/mowasatData" onClick={showMowasatData}>
                Al-Mowasat
              </Link>
            </div>
          </div>
        </header>

        <Routes>
          <Route path="/" exact Component={Home}></Route>
          <Route path="/login" exact Component={Login}></Route>
          <Route path="/register" exact Component={Register}></Route>
          <Route path="/habibData" exact Component={HabibData}></Route>
          <Route path="/maneaData" exact Component={ManeaData}></Route>
          <Route path="/mowasatData" exact Component={MowasatData}></Route>
        </Routes>

        {/* <footer>
        <p>Basseloob</p>
      </footer> */}
      </Router>
    </div>
  );
}

export default App;
