import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css'
import Search from "./Search"
import DropDown from "./DropDown"
import "./Comp1.css"

function Comp1({userdata,setFlag,nSetQtext}) {
  return (
    <nav className="navbar navbar-light bg-white mb-3">
      <a href="#" className="navbar-brand">Dev Forum</a>
      <Search setFlag={setFlag} sSetQtext={nSetQtext}/>
      
      <div className="pull-right">

        <ul className="nav d-inline-block">
          <DropDown userdata={userdata} />
        </ul>
        <div className="d-inline-block">
          <a className="text-decoration-none" href="#">
            <img className="" src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png" width="50" height="50" alt="..." />
          </a>
        </div>
      </div>

    </nav>
  )
}

export default Comp1


