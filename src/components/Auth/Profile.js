import {React , useState, useEffect} from 'react'
import './Profile.css'

import Questionservice from '../services/Question.service';
import Navbar from '../Profile/Comp1'
import ProfileData from '../Profile/ProfileData';
import SpecialTitle from '../Profile/SpecialTitle'
import Categories from '../Profile/Categories';
import ProComp from '../Profile/ProComp.jsx';
import Footer from '../Profile/Footer';
import { useNavigate } from 'react-router-dom';
function Profile({userdata}) {
 
  const localdata=JSON.parse(localStorage.getItem('user'))
    const userinfo= JSON.parse(localStorage.getItem("user"))
    console.log("inside profile",userinfo.user)
    const [questions, setQuestions] = useState([]);
    const navigate=useNavigate()
    useEffect(()=>{
        Questionservice.getQuestion(localdata.token).then(obj=>{
          console.log("inf pro",obj.data)
             setQuestions(obj.data)
        })
    },[])
  return (
   
    
//     <div class="container-fluid">
//     <Navbar userdata={userdata}/>
//   <div class="row">
//   <SpecialTitle userName={localdata.user.userName} role="User"/>
//   <ProfileData className="profileinfo"  firstName = {userinfo.user.firstName} lastName ={userinfo.user.lastName} userName = {userinfo.user.userName} email={userinfo.user.email} phone=
//   {userinfo.user.phone} />
  
//   <div class="col-md-3 col-sm-12">
//   <Categories/>
//   </div>
// </div>
// </div>
<>
<Navbar/>
<div class="container">
    <div class="main-body">
    
         
        
        
    
          <div class="row gutters-sm">
            <div class="col-md-4 mb-3 mt-5">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150"/>
                    <div class="mt-3">
                      <h4>{localdata.user.userName}</h4>
                      <p class="text-secondary mb-1">{localdata.user.role}</p>
                      <p class="text-secondary mb-1">Number of Questions:{questions.length}</p>
                    </div>
                  </div>
                </div>
              </div>
              <br/>
             <button class="btn btn-secondary" onClick={()=>navigate('/Post')}> Post a Question</button>
            </div>
            <div class="col-md-8">
              <div class="card mb-3 mt-5">
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Full Name</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                    {localdata.user.firstName +" "+ localdata.user.lastName}
                    </div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Email</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      {localdata.user.email}
                    </div>
                  </div>
                 
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Mobile</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      {localdata.user.phone}
                    </div>
                  </div>
                  <hr/>
              
                 
                </div>
                <br/>
                <br/>
                <br/>
              </div>
              <div class="bg-dark">
              <div class="row gutters-sm ">
                <div class="col-sm-12 mb-3 mt-3   ">
                  <div class="card h-100">
                    <div class="card-body">
                      <h6 class="d-flex align-items-center mb-3"><i class="material-icons text-info mr-2">Questions</i>All </h6>
                      
                      
                      {questions.map(question => {
                        return (
                          <div class="row">
                          <div class="col-sm-3">
                            <h6 class="mb-0">{question._id}</h6>
                          </div>
                          <div class="col-sm-9 text-secondary">
                          {question.questionName}
                          </div>
                        </div>
                            
                        )
                    }) }
                    </div>
                  </div>
                </div>
                
              </div>
                    
                     
                </div>
               
 
 
 
            </div>
          </div>
 
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Profile
