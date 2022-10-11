import React from "react";
import { useNavigate } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css'
import Search from "./Search"
import DropDown from "./DropDown"
import "./Comp1.css"

function Comp1({userdata,setFlag,nSetQtext}) {
  const navigate= useNavigate();
  return (
    // <nav className="navbar navbar-light bg-white mb-2">
    //   <img src={require('./zensarlogo.png')} className="man" alt="dev forum" />
    //   {/* <h5>DEVFORUM</h5> */} 
      
    //   <Search setFlag={setFlag} sSetQtext={nSetQtext}/>
      
    //   <div className="pull-right">

    //     <ul className="nav d-inline-block">
    //       <DropDown userdata={userdata} />
    //     </ul>
    //     <div className="d-inline-block">
    //       <a className="text-decoration-none" href="#">
    //         <img className="" src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png" width="50" height="50" alt="..." />
    //       </a>
    //     </div>
    //   </div>

    // </nav>
   
   
   <nav class="navbar navbar-expand-lg ">
  <img src={require('./zensarlogo.png')} className="man" alt="dev forum" />
  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" onClick={()=> navigate('/Post')} >Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" onClick={()=> navigate('/Post')}>Post</a>
      </li>
      <li class="nav-item dropdown">
      <DropDown userdata={userdata} />
        
      </li>
      <li class="nav-item">
      <a className="nav-link" href="#" onClick={()=> navigate('/Chart')}>Chart</a>
      </li>
      
    </ul>
    {/* <form class="form-inline my-2 my-lg-0"> */}
      {/* <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/> */}
      {/*  <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
      <Search setFlag={setFlag} sSetQtext={nSetQtext}/>
    {/* </form> */}
  </div>
</nav>
  )
}

export default Comp1


