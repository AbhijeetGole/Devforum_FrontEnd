import React from "react";
import "./ProfileData.css"

function ProfileData(props){
    return(
        <div class="col-md-6 col-sm-12 bg-white ">
        <div class="form-group">
          <label for="firstName" class="text-info  ">First Name:</label>
          <span type="text" name="firstName" id="firstName" class="">{props.firstName}</span>
        </div>
        <div class="form-group">
          <label for="lastName" class="text-info  ">Last Name:</label>
          <span type="text" name="password" id="lastName" class="">{props.lastName}</span>
        </div>
        <div class="form-group">
          <label for="username" class="text-info  ">Username:</label>
          <span type="text" name="username" id="username" class="">{props.userName}</span>
        </div>
        
        <div class="form-group">
          <label for="email" class="text-info    ">Email:</label>
          <span type="text" name="password" id="email" class=""> {props.email}</span>
        </div>
        <div class="form-group">
          <label for="phone" class="text-info  ">Phone:</label>
          <span type="text" name="password" id="phone" class=""> {props.phone}</span>
        </div>

      </div>
    )
}

export default ProfileData