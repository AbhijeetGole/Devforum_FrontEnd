import React from "react"
import {useNavigate} from 'react-router-dom'
import authService from "../services/auth.service";

function DropDown() {
    const navigate = useNavigate();
    const logoff=()=>{
         authService.logout().then(obj=>{
            console.log("logging out")
            navigate('/')
         })
    }
    return (
        <div className="dropdown show">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
          Profile
        </a>

            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a className="dropdown-item" onClick={()=> navigate('/Profile')} >Profile</a>
                <a className="dropdown-item" onClick={()=>navigate('/About')}>About</a>

                <a className="dropdown-item" href="#" onClick={logoff}>Logout</a>
            </div>
        </div>
    )
}


export default DropDown