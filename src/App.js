import logo from './logo.svg';
import './App.css';
import Login from './components/Auth/Login';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Post from './components/Questions/Post';
import {useState} from 'react';
import Register from '../src/components/Auth/Register';
import Profile  from './components/Auth/Profile';
import SearchedQue from './components/Questions/SearchedQue';
function App() {
  const [token,setToken]=useState('');
  const [userdata,setUserdata]=useState('');
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
        
        <Route exact path="/Post" element={<Post 
          token={token}
        /> }/>
      </Routes>
  );
}

export default App;
