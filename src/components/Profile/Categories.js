import { isVisible } from "@testing-library/user-event/dist/utils";
import axios from "axios";
import { Button } from "bootstrap";
import React, { useState, useEffect } from "react";
import Questionservice from "../services/Question.service";
// import Cat from './Cat'
import getAllCategory from "../services/Question.service"


function Categories(token) {
  const localdata=JSON.parse(localStorage.getItem("user"))
  const [cat, setCat] = useState([])
  let Category = [];
  let catList
  let a = 0, i = 4,b;
  const [catNumber, setcatNumber] = useState(4)
  const [vis, setVis] = useState(true)
  let [disable,setDisable]= useState(true)
  useEffect(() => {
    if(localdata.user.role=="admin"){
      setDisable(false)
    }
    Questionservice.getAllCategory(localdata.token).then(obj => {
      console.log("success", obj.data)
      setCat(obj.data);
      //console.log(cat[0].categoryName,"right")
    })
      .catch(err => {
        // console.log(err)
      })

  }, [catNumber, setVis])

 
    
    const editCat=async(e,x)=>{
      
      console.log(x)
    Questionservice.updateCategory(localdata.token,e,x).then(res=>{
      if(res.status==200){
        Questionservice.getAllCategory(localdata.token).then(obj => {
          setCat(obj.data);
        })
      }
      else{
        console.log("gygv");
        alert("Only admin can delete category")
      }
    }).catch(()=>{
      alert("Only admin can delete category")
    })
    
    
  }
  const deleteCat=async(e)=>{
    
    Questionservice.deleteCategory(localdata.token,e).then(res=>{
            if(res.status==200){
              Questionservice.getAllCategory(localdata.token).then(obj => {
                console.log("success", obj.data)
                setCat(obj.data);
                //console.log(cat[0].categoryName,"right")
              })
                .catch(err => {
                  // console.log(err)
                })
            }else{
              console.log("gygv");
              alert("Only admin can delete category")
            }
    }).catch(()=>{
      alert("Only admin can delete category")
    })
   }
  function xyz() {
    if(catNumber!=cat.length){
    setcatNumber(cat.length)
    }else{
      setcatNumber(4)
    }
    setVis(false)
    
  }
  var x;
  function abc(event)
  {
    x=event.target.value
  }
  (catList = cat.map((cat) => {
    return (
      <>
        {
          (a < catNumber) ? <li>
            <a className="btn "  role="button">
            {a = a + 1}.{cat.categoryName} 
            </a>
            
          
          <div className="dropdown show dropdown-toggle-split dropstart dropleft " style={{float:"right"}}>
            <a className="btn  dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              
            </a>

            <div className="dropdown-menu  " aria-labelledby="dropdownMenuLink">
            <input name="UpdateCat" className="form-control" onChange={abc} placeholder="Update"/>
            <button className="dropdown-item " onClick={()=>editCat(cat._id,x)} disabled={disable} >Edit</button>
            <button className="dropdown-item" onClick={()=>deleteCat(cat._id)} disabled={disable}>Delete</button>
            </div>
        </div>
          </li>
          
          : (console.log(a)) 
        }
        
        </>
    )}))





return (
  <div class="card border-info mb-3 mt-5" >
    <div class="card-body p-3 text-black  mb-3">
      <h5 class="card-title m-0 ">Following Topic
      </h5>
      <div class="list-group list-group-flush">
        <ul>

          {catList}

        </ul>
        <button class="btn btn-sm btn-primary" onClick={xyz} disabled={!vis}  >View All</button>
      </div>
    </div>
  </div>
)
}
export default Categories