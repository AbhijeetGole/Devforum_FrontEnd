
import React, { useState, useEffect } from "react";
import Questionservice from "../services/Question.service";


function Categories(token) {
  const [cat, setCat] = useState([])
  
   let catList
    let a=0;
    const [catNumber,setcatNumber]=useState(4)
    const [vis,setVis]=useState(true)
  useEffect (() => {
   
    Questionservice.getAllCategory(token).then(obj => {
      console.log("success", obj.data)
      setCat(obj.data);
      
  })
      .catch(err => {
           console.log(err)
        })
     
    },[catNumber,setVis])
   
    
    function xyz(){
      setcatNumber(cat.length)
      setVis(false)
      console.log(vis)
    }

    (catList=cat.map((cat)=>{
      return(
        <>
          {
            (a<catNumber)?<li>{a+=1}.{cat.categoryName} </li>:(console.log(a))          
          }
        </>
    )}))
   
   
   
   
 
  return (
    <div class="card" >
      <div class="card-body p-3">
        <h5 class="card-title m-0 ">Following Topic
          {/* <i onClick={changex} class="fa fa-plus float-right"></i> */}
          {/* <i class="fa fa-plus float-right"></i> */}
        </h5>
        <div class="list-group list-group-flush">
          <ul>
           
            {catList}
       
          </ul>
          <a href="#" class="btn btn-sm btn-primary" onClick={xyz} disabled={vis}  >View All</a>
        </div>
      </div>
    </div>
  )
}
export default Categories