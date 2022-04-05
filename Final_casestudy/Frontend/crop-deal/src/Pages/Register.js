import { Label, Button } from "reactstrap";
import React, { useState } from "react";
// import image from "./image/background.jpg";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {


  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleSubmitt = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const handleData = {
      username,
      password,
      role,
    };
    const { data } = await axios.post(
      "http://localhost:8682/subs",
      handleData,
      config
    );

    console.log(data);
  };

  return (
    <div
      className="main-container"
    //   style={{ backgroundImage: `url(${image})` }}
    >
      <div className="registration-container">
        <h2>Register</h2>
        <form action=" " className="register">
          <label>
            Enter Username
            <br />
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={(e) => setUserName(e.target.value)}
            />
          </label>
          <label>
            Enter Password
            <br />
            <input
              type="password"
              placeholder="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <label>
            Select Role
            <br />
           <select name="" id="" onChange={(e)=>setRole(e.target.value)}>
          <option defaultValue>--Select--</option>
          <option value="farmer">FARMER</option>
          <option value="dealer">DEALER</option>
        </select></label><br/>
          <Button color="primary" outline onClick={handleSubmitt}>
            Register
          </Button>
          Already have an account?<Link to="/login">Login</Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
