import React, { useState } from "react";
import AuthService from "../services/auth.service";
import { useNavigate } from "react-router-dom";
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const Register = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();
   
  function ValidateEmail(input,phone) {

    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return !!(input.match(validRegex));
  }
  const handleSignup = async (e) => {
    e.preventDefault();
    if(ValidateEmail(email)){
      try {
        await AuthService.register(firstName,lastName,userName, password,email,phone).then(
          (response) => {
            
               console.log("Sign up successfully", response);
               alert("Registered successfully")
            navigate("/");
           window.location.reload();
          },
          (error) => {
            console.log(error);
          }
        );
      } catch (err) {
        console.log(err);
      }
    }else{
        alert("enter valid email and phone")
    }
    
  };

  return (

    
    <div class="limiter">
    <div class="container-login100">
      <div class="wrap-login100">
        <div class="login100-form-title" >
          <span class="login100-form-title-1">
            Register
          </span>
        </div>

        <form class="login100-form validate-form" onSubmit={handleSignup}>
          <div class="wrap-input100 validate-input m-b-26" data-validate="Username is required">
            <span class="label-input100">Firstname</span>
            <input class="input100" type="text" placeholder="Enter firstname "value={firstName}
              onChange={(e) => setfirstName(e.target.value)} required/>
            <span class="focus-input100"></span>
          </div>

          <div class="wrap-input100 validate-input m-b-18" data-validate = "Password is required">
            <span class="label-input100">Lastname</span>
            <input class="input100" type="text" placeholder="Enter lastname" value={lastName}
           onChange={(e) => setlastName(e.target.value)} required/>
            <span class="focus-input100"></span>
          </div>

          <div class="wrap-input100 validate-input m-b-26" data-validate="Username is required">
            <span class="label-input100">Username</span>
            <input class="input100" type="text"  placeholder="Enter username "value={userName}
              onChange={(e) => setuserName(e.target.value)} required/>
            <span class="focus-input100"></span>
          </div>

          <div class="wrap-input100 validate-input m-b-26" data-validate="Username is required">
            <span class="label-input100">Password</span>
            <input class="input100" type="password"  placeholder="Enter password "value={password}
              onChange={(e) => setPassword(e.target.value)} required/>
            <span class="focus-input100"></span>
          </div>

          <div class="wrap-input100 validate-input m-b-26" data-validate="Username is required">
            <span class="label-input100">Email</span>
            <input class="input100" type="text" placeholder="Enter email "value={email}
              onChange={(e) => setEmail(e.target.value)} required/>
            <span class="focus-input100"></span>
          </div>

          <div class="wrap-input100 validate-input m-b-26" data-validate="Username is required">
            <span class="label-input100">Phone</span>
            <input class="input100" type="text"  placeholder="Enter username "value={phone}
              onChange={(e) => setPhone(e.target.value)} required/>
            <span class="focus-input100"></span>
          </div>
      
          <div class="contact100-form-checkbox">
              
              
              
            </div>
          <div class="container-login100-form-btn">

           
            <button class="login100-form-btn mt-3" >
              Register
            </button>
            
          </div>
        </form>
        
      </div>
    </div>
  </div>
  )
};

export default Register;