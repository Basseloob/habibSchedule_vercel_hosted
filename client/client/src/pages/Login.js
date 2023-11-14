import React, { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import "../pages/pagesCSS/Login.css";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const login = () => {
    // 1)
    const data = { username: username, password: password };
    // 2)
    axios.post("http://localhost:3001/auth/login", data).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      } else {
        localStorage.setItem("jwtAccessToken", response.data.token);
        console.log(response);
        navigate("/");
      }
    });
    // console.log(data);
  };

  return (
    <div className="loginContainer">
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>
      <div className="signin">
        <div className="content">
          <h2>Sign In</h2>
          <div className="form">
            <div className="inputBox">
              {/* <label>Username :</label> */}
              <input
                type="text"
                onChange={(event) => {
                  setUserName(event.target.value);
                }}
              ></input>
            </div>

            <div className="inputBox">
              {/* <label>Password :</label> */}
              <input
                type="password"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              ></input>
            </div>
            <div className="links">
              <a href="#">Forgot Password</a>
              <a href="/registration">Signup</a>
            </div>

            <div className="inputBox">
              <button onClick={login}>Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
