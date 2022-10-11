import React from "react";  

function Comp2(props){
    return(
      <div className="col-md-3 col-sm-12 mt-5 ">
      <div className="card text-black mb-3 border-info mb-3">
        <div className="card-body">
          <h5 className="card-title">Hello! {props.userName}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{props.role}</h6>
          <p className="card-text text-black">You can ask questions as well as answer the questions</p>
          <a href="https://www.google.co.in/" className="btn btn-sm btn-primary">Google</a>
        </div>
      </div>
    </div>
    )
}

export default Comp2