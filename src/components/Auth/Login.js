import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const Login = ({ setToken, setUserdata }) => {


  console.log("inside login");
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await AuthService.login(userName, password).then(
        (data) => {
          console.log(data.token);

          setToken(data.token);
          console.log("in lgoin", data.user)
          setUserdata(data.user);
          if(setToken){
            navigate("/Post");
          }else{
            alert("Invalid Credentials")
          }
          
         
          console.log("foo")
        },
        (error) => {
          console.log(error);
        }
      );
    } catch (err) {
      console.log(err);
    }
  };


  return (

   
    <div class="limiter">
      <div class="container-login100">
        <div class="wrap-login100">
          <div class="login100-form-title" >
            <span class="login100-form-title-1">
              Login
            </span>
          </div>

          <form class="login100-form validate-form" onSubmit={handleLogin}>
            <div class="wrap-input100 validate-input m-b-26" data-validate="Username is required">
              <span class="label-input100">Username</span>
              <input class="input100" type="text" name="username" placeholder="Enter username " value={userName}
                onChange={(e) => setuserName(e.target.value)} />
              <span class="focus-input100"></span>
            </div>

            <div class="wrap-input100 validate-input m-b-18" data-validate="Password is required">
              <span class="label-input100">Password</span>
              <input class="input100" type="password" name="pass" placeholder="Enter password" value={password}
                onChange={(e) => setPassword(e.target.value)} />
              <span class="focus-input100"></span>
            </div>

            <div class="checkbox">
              <div class="contact100-form-checkbox">
                <input class="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
                <label class="label-checkbox100" for="ckb1">
                  Remember me
                </label>

              </div>
              <div class="register " >
                <a href="/Register" >Register here</a>
              </div>
            </div>

            <div class="container-login100-form-btn">
              <button class="login100-form-btn">
                Login
              </button>

            </div>
          </form>

        </div>
      </div>
    </div>
  )
};

export default Login;