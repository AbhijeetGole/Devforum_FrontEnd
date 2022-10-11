
import './App.css';
import Login from './components/Auth/Login';
import { Route, Routes} from 'react-router-dom';
import Post from './components/Questions/Post';
import {useState} from 'react';
import Register from '../src/components/Auth/Register';
import Profile  from './components/Auth/Profile';
import SearchedQue from './components/Questions/SearchedQue';
import DoughnutChart from "./components/Chart"
import About from './components/Profile/About';
function App() {
  const [token,setToken]=useState('');
  const [userdata,setUserdata]=useState('');
  // const tokendata=JSON.parse(localStorage.getItem("user"))
  // let role=tokendata.user.role;
  return (
      <Routes>
        <Route exact path="/" element={<Login 
          setToken={setToken} setUserdata={setUserdata}
          
        /> }/>
        <Route exact path="/Register" element={<Register 
          
        /> }/>
         <Route exact path="/Profile" element={<Profile
           userdata={userdata}
          /> }/>
           <Route exact path="/SearchedQue" element={<SearchedQue
           
          /> }/>
         <Route exact path="/Chart" element={<DoughnutChart
           
           /> }/>
        <Route exact path="/Post" element={<Post 
          token={token}  setToken={setToken} userdata={userdata}
        /> }/>

<Route exact path="/Chart" element={<DoughnutChart 
        /> }/>

{/* <Route exact path="/About" element={<About 
        /> }/> */}
      </Routes>
      

      
  );
}

export default App;
