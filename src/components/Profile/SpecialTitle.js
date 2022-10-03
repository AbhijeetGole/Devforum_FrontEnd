import React from "react";  

function Comp2(props){
    return(
        <div className="col-md-3 col-sm-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Hello! {props.firstName}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{props.role}</h6>
                <p className="card-text">You can ask questions as well as answer the questions</p>
                <a href="www.google.com" className="btn btn-sm btn-primary">Google</a>
              </div>
            </div>
          </div>
    )
}

export default Comp2