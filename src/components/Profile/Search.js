import { useEffect } from "react";
import {React, useState} from "react"


function Search({ setFlag, sSetQtext }) {



  let [quename, setQuename] = useState("")
  function changeName(event) {

    setQuename(event.target.value)
    
    sSetQtext(quename);
  }
  
  const handleSearch = (e) => {
    e.preventDefault()
    sSetQtext(quename);
    if(quename.length==0){
      setFlag(0)
      console.log("flag in handlesearch")
   }else{
    setFlag(1)
   }
  }

  return (

    <>
      < form className="form-inline w-25" onSubmit={handleSearch} >
        <div class="input-group w-100">
          <input type="search" class="form-control " placeholder="Search" name="quename" value={quename} onChange={e => changeName(e)} aria-label="Search" aria-describedby="search-addon" />
          <span class="input-group-text border-0" id="search-addon">
            <i class="fas fa-search"></i>
          </span>
        </div>
      
      </form>



    </>


  );
}
export default Search




