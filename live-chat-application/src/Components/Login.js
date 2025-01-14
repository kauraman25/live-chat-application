import React from "react";
import Logo from "../Images/live-chat_512px.png";
import { Button, TextField } from "@mui/material";
function Login() {
 
  return (
    <div className="login-container">
      <div className="image-container">
        <img src={Logo} alt="logo" className="welcome-logo" />
      </div>
      <div className="login-box">
        <p className="login-text">Login to your Account</p>
        <TextField
          id="standard-basic"
          label="Enter Username"
          variant="outlined"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <Button variant="outlined" color="secondary">Login</Button>
      </div>
    </div>
  );
}

export default Login;
