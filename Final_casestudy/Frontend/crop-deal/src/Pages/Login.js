import React, { useState } from "react";
import { Link} from "react-router-dom";
import axios from "axios";
import { Label, Button } from "reactstrap";
// import image from "./image/background.jpg";
import { useHistory } from "react-router-dom";
import "./Login.css"

const Login = () => {
  var auth = JSON.stringify(localStorage.getItem("auth"));

  const history = useHistory();

  const [input, setInput] = useState({
    username: "",
    password: "",
    role: "",
  });

  const inputEvent = (event) => {
    const { name, value } = event.target;
    setInput((previousvalue) => {
      console.log(previousvalue.data);
      return {
        ...previousvalue,
        [name]: value,
      };
    });
  };
  const showdata = async (event) => {
    event.preventDefault();

    try {
    
      const { data } = await axios.post("http://localhost:8682/auth", {
        username: input.username,
        password: input.password,
        
      });
      console.log(data.response);
      localStorage.setItem("jwt", JSON.stringify(data.response));
      localStorage.setItem("username",input.username)
      if (data.response ){
          const{data} = await axios.get("http://localhost:8682/"+input.username)
        localStorage.setItem('role',data)
        if(data ==='farmer'){

        history.push("/farmerhome")}

        if (data==='admin') {
          history.push("/farmer")
          
        }
        if(data==='dealer'){
          history.push("/home")
        }
      } 
      else{
        alert("fail")
      }
     
    } catch (error) {
      console.log("error is", error);
    }
  };

  return (
    <div
      className="main-container"
    //   style={{ backgroundImage: `url(${image})` }}
    >
      <div>
        <form>
          <h2>Login</h2>
            <Label className="label5">
              Enter Username
              <br />
              <input
                type="text"
                placeholder="Username"
                autoComplete="off"
                name="username"
                onChange={inputEvent}
                value={input.username}
              />
            </Label> <br/>
          
          <Label className="label">
            Enter Password
            <br />
            <input
              type="password"
              placeholder="password"
              name="password"
              onChange={inputEvent}
              value={input.password}
            />
          </Label>
          <br />
          <Button  className='loginbutton' color="primary" outline onClick={showdata}>
            Login
          </Button>
          <p>
          Need an account?<Link to="/register"> SignUp</Link>
          </p>
        </form>
      </div>
      </div>
  );
};

export default Login;
