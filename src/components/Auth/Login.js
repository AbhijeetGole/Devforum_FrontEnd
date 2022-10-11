import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";
import "./Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer, toast } from 'react-toastify';
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

          //setToken(data.token);
          const tokendata = JSON.parse(localStorage.getItem("user"));
          console.log(tokendata.user, "token user");
          setToken(tokendata.token);
          //console.log("in lgoin", data.user)
          setUserdata(tokendata.user);
          //setUserdata(data.user)
          if (data.token) {
            navigate("/Post");
          } else {
            //  alert("Invalid Credentials");
            toast.error("Invalid Credentials",{
              position:"top-center",
              autoClose:1500
            })
          }

          console.log("foo");
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
    // <div class="limiter">
    //   <div class="container-login100">
    //     <div class="wrap-login100">
    //       <div class="login100-form-title" >
    //         <span class="login100-form-title-1">
    //           Login
    //         </span>
    //       </div>

    //       <form class="login100-form validate-form" onSubmit={handleLogin}>
    //         <div class="wrap-input100 validate-input m-b-26" data-validate="Username is required">
    //           <span class="label-input100">Username</span>
    //           <input class="input100" type="text" name="username" placeholder="Enter username " value={userName}
    //             onChange={(e) => setuserName(e.target.value)} />
    //           <span class="focus-input100"></span>
    //         </div>

    //         <div class="wrap-input100 validate-input m-b-18" data-validate="Password is required">
    //           <span class="label-input100">Password</span>
    //           <input class="input100" type="password" name="pass" placeholder="Enter password" value={password}
    //             onChange={(e) => setPassword(e.target.value)} />
    //           <span class="focus-input100"></span>
    //         </div>

    //         <div class="checkbox">
    //           <div class="contact100-form-checkbox">
    //             <input class="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
    //             <label class="label-checkbox100" for="ckb1">
    //               Remember me
    //             </label>

    //           </div>
    //           <div class="register " >
    //             <a href="/Register" >Register here</a>
    //           </div>
    //         </div>

    //         <div class="container-login100-form-btn">
    //           <button class="login100-form-btn">
    //             Login
    //           </button>

    //         </div>
    //       </form>

    //     </div>
    //   </div>
    // </div>

    <MDBContainer fluid className="p-3 my-5 h-custom">
      <ToastContainer
position="bottom-center"
autoClose={1500}/>
      <form class="login100-form validate-form" onSubmit={handleLogin}>
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
              <p className="lead fw-normal mb-0 me-3">Sign in with</p>
            </div>

            <div className="divider d-flex align-items-center my-4">
              <p className="text-center fw-bold mx-3 mb-0"></p>
            </div>

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

            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              type="password"
              size="lg"
              name="pass"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="d-flex justify-content-between mb-4">
              <MDBCheckbox
                name="flexCheck"
                value=""
                id="flexCheckDefault"
                label="Remember me"
              />

              <a href="!#">Forgot password?</a>
            </div>

            <div className="text-center text-md-start mt-4 pt-2">
              <MDBBtn className="mb-0 px-10 btn btn-success" size="lg">
                Login
              </MDBBtn>

              <p className="small fw-bold mt-2 pt-1 mb-2">
                Don't have an account?{" "}
                <a href="Register" className="link-danger">
                  Register
                </a>
              </p>
            </div>
          </MDBCol>
        </MDBRow>
      </form>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div
        className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-secondary mt-auto"
        // id="footer"
      >
        <div className="text-white mb-3 mb-md-0">
          Copyright © 2020. All rights reserved.
        </div>
      </div>
    </MDBContainer>
  );
};

export default Login;
