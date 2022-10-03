import React from "react"
import {useNavigate} from 'react-router-dom'

function DropDown() {
    const navigate = useNavigate();
    
    return (
        <div className="dropdown show">
            <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Profile
            </a>

            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a className="dropdown-item" onClick={()=> navigate('/Profile')} >Profile</a>
                <a className="dropdown-item" href="#">Contact Support</a>
                <a className="dropdown-item" href="#" onClick={()=> navigate('/')}>Logout</a>
            </div>
        </div>
    )
}


export default DropDown