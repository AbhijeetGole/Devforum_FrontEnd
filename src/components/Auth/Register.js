
import React, { useState } from "react";
import {

  MDBContainer,

  MDBCol,

  MDBRow,

  MDBBtn,

  MDBInput,

  MDBCheckbox,

  MDBIcon,

} from "mdb-react-ui-kit";
import AuthService from "../services/auth.service";

import { useNavigate } from "react-router-dom";

import "./Login.css";

import "bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer, toast } from 'react-toastify';








const Register = () => {
  


  
  
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState('')

 

  const [phoneError, setPhoneError] = useState('')

  function ValidateEmail(input, phone) {
    let validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return !!input.match(validRegex);
  }
  
  const handleSignup = async (e) => {
    e.preventDefault();
    if (ValidateEmail(email)) {
      try {
        await AuthService.register(
          firstName,
          lastName,
          userName,
          password,
          email,
          phone
        ).then(
          (response) => {
            console.log("Sign up successfully", response);
            toast.success("Registered successfully",{

            })
            setTimeout(()=>
            navigate("/"),
            2000
            )
            // alert("Registered successfully");
            // navigate("/");
            // window.location.reload();
          },
          (error) => {
            console.log(error);
          }
        );
      } catch (err) {
        console.log(err);
      }
    } else {
      alert("enter valid email and phone");
    }
  };

  return (
    //   <div class="limiter">
    //   <div class="container-login100">
    //     <div class="wrap-login100">
    //       <div class="login100-form-title" >
    //         <span class="login100-form-title-1">
    //           Register
    //         </span>
    //       </div>

    //       <form class="login100-form validate-form" onSubmit={handleSignup}>
    //         <div class="wrap-input100 validate-input m-b-26" data-validate="Username is required">
    //           <span class="label-input100">Firstname</span>
    //           <input class="input100" type="text" placeholder="Enter firstname "value={firstName}
    //             onChange={(e) => setfirstName(e.target.value)} required/>
    //           <span class="focus-input100"></span>
    //         </div>

    //         <div class="wrap-input100 validate-input m-b-18" data-validate = "Password is required">
    //           <span class="label-input100">Lastname</span>
    //           <input class="input100" type="text" placeholder="Enter lastname" value={lastName}
    //          onChange={(e) => setlastName(e.target.value)} required/>
    //           <span class="focus-input100"></span>
    //         </div>

    //         <div class="wrap-input100 validate-input m-b-26" data-validate="Username is required">
    //           <span class="label-input100">Username</span>
    //           <input class="input100" type="text"  placeholder="Enter username "value={userName}
    //             onChange={(e) => setuserName(e.target.value)} required/>
    //           <span class="focus-input100"></span>
    //         </div>

    //         <div class="wrap-input100 validate-input m-b-26" data-validate="Username is required">
    //           <span class="label-input100">Password</span>
    //           <input class="input100" type="password"  placeholder="Enter password "value={password}
    //             onChange={(e) => setPassword(e.target.value)} required/>
    //           <span class="focus-input100"></span>
    //         </div>

    //         <div class="wrap-input100 validate-input m-b-26" data-validate="Username is required">
    //           <span class="label-input100">Email</span>
    //           <input class="input100" type="text" placeholder="Enter email "value={email}
    //             onChange={(e) => setEmail(e.target.value)} required/>
    //           <span class="focus-input100"></span>
    //         </div>

    //         <div class="wrap-input100 validate-input m-b-26" data-validate="Username is required">
    //           <span class="label-input100">Phone</span>
    //           <input class="input100" type="text"  placeholder="Enter username "value={phone}
    //             onChange={(e) => setPhone(e.target.value)} required/>
    //           <span class="focus-input100"></span>
    //         </div>

    //         <div class="contact100-form-checkbox">

    //           </div>
    //         <div class="container-login100-form-btn">

    //           <button class="login100-form-btn mt-3" >
    //             Register
    //           </button>

    //         </div>
    //       </form>

    //     </div>
    //   </div>
    // </div>

    <MDBContainer fluid className="p-3 my-5 h-custom">
      <form class="login100-form validate-form" >
        <MDBRow>
          <MDBCol col="10" md="6">
            <img
              src="https://equitybulls.com/equitybullsadmin/uploads/Zensar%20Technologies%20Limited%20New%20Logo%203.jpg"
              class="img-fluid"
              alt="Sample image"
            />
          </MDBCol>

          <MDBCol col="4" md="3">
            <div className="d-flex flex-row align-items-center justify-content-center">
              <p className="lead fw-normal mb-0 me-3">Sign Up</p>
            </div>

            <div className="divider d-flex align-items-center my-4">
              <p className="text-center fw-bold mx-3 mb-0"></p>
            </div>

            <div className="d-flex flex-row align-items-center mb-4 ">
              <MDBIcon fas icon="user me-3" size="lg" />

              <MDBInput
                wrapperClass="mb-4"
                label="First Name"
                id="formControlLg"
                type="text"
                size="lg"
                name="firstname"
                placeholder="Enter firstname "
                value={firstName}
                onChange={(e) => setfirstName(e.target.value)}
              />
            </div>
            <div className="d-flex flex-row align-items-center mb-4 ">
              <MDBIcon fas icon="user me-3" size="lg" />

              <MDBInput
                wrapperClass="mb-4"
                label="last Name"
                id="formControlLg"
                type="text"
                size="lg"
                name="lastname"
                placeholder="Enter lastname "
                value={lastName}
                onChange={(e) => setlastName(e.target.value)}
              />
            </div>
            <div className="d-flex flex-row align-items-center mb-4">
              <MDBIcon fas icon="user-check me-2 " size="lg" />

              <MDBInput
                wrapperClass="mb-4"
                label="User Name"
                id="formControlLg"
                type="text"
                size="lg"
                name="username"
                placeholder="Enter username "
                value={userName}
                onChange={(e) => setuserName(e.target.value)}
              />
            </div>
            <div className="d-flex flex-row align-items-center mb-4">
              <MDBIcon fas icon="lock me-3" size="lg" />

              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="formControlLg"
                type="password"
                size="lg"
                name="password"
                placeholder="Enter Password "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="d-flex flex-row align-items-center mb-4">
              <MDBIcon fas icon="envelope me-3" size="lg" />

              <MDBInput
                wrapperClass="mb-4"
                label="Email"
                id="formControlLg"
                type="email"
                size="lg"
                name="email"
                placeholder="Enter Email "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="d-flex flex-row align-items-center mb-4">
              <MDBIcon fas icon="mobile-alt me-4" size="lg" />

              <MDBInput
                wrapperClass="mb-4"
                label="phone"
                type="text"
                size="lg"
                name="pass"
                placeholder="Enter phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="text-center text-md-start mt-3 pt-3 ">
              <MDBBtn className="mb-0 px-10 btn btn-success" size="lg" onClick={handleSignup}  >
                Register
              </MDBBtn>
            </div>
          </MDBCol>
        </MDBRow>
      </form>
      <br/>
      <div
        className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-secondary mt-auto"
        id="footer"
      >
        <div className="text-white mb-3 mb-md-0">
          Copyright © 2022. All rights reserved.
        </div>
    
<ToastContainer
position="bottom-center"
autoClose={5000}
hideProgressBar={false}
 newestOnTop={false}
closeOnClick
 rtl={false}
 pauseOnFocusLoss
 draggable
 pauseOnHover/>



      </div>
    </MDBContainer>
  );
};

export default Register;
