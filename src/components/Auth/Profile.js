import {React} from 'react'
import './Profile.css'


import Navbar from '../Profile/Comp1'
import ProfileData from '../Profile/ProfileData';
import SpecialTitle from '../Profile/SpecialTitle'
import Categories from '../Profile/Categories';
function Profile({userdata}) {
 
    
    console.log("inside profile",userdata)
  return (
   
    
    <div class="container-fluid">
    <Navbar userdata={userdata}/>
  <div class="row">
  <SpecialTitle firstName="Chinmay" role="User"/>
  <ProfileData className="profileinfo" firstName = {userdata.firstName} lastName ={userdata.lastName} userName = {userdata.userName} email={userdata.email} phone=
  {userdata.phone} />
  <div class="col-md-3 col-sm-12">
  <Categories/>
  </div>
</div>
</div>
  )
}

export default Profile
