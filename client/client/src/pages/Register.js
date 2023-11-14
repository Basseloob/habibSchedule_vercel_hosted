import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../pages/pagesCSS/Register.css";

const Register = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  let navigate = useNavigate();

  const register = () => {
    // 1)
    const registerData = {
      username: username,
      password: password,
      confirmPassword: confirmPassword,
    };

    // 2)
    if (password !== confirmPassword)
      return alert("Password and confirm password are not the same");

    // 3)
    axios
      .post("http://localhost:3001/auth/register", registerData)
      .then((response) => {});
    // console.log(registerData);
    // 4) if user is already registered ?
    // 5) Navigate :
    navigate("/");
  };

  return (
    <div className="registerContainer">
      <label>Username :</label>
      <input
        type="text"
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      ></input>
      <label>Password :</label>
      <input
        type="password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      ></input>
      <label>Confirm password :</label>
      <input
        type="password"
        onChange={(event) => {
          setConfirmPassword(event.target.value);
        }}
      ></input>

      <button onClick={register}>Press</button>
    </div>
  );
};

export default Register;
