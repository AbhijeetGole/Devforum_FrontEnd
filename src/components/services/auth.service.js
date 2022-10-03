import axios from "axios";


const API_URL = "http://localhost:3000/user";


const register = async(firstName,lastName,userName, password,email,phone) => {
  return axios
    .post(API_URL + "/user", {
      firstName,
      lastName,
      userName,
      password,
      email,
      phone
    })
    .then((response) => {
      
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};


const login=async(userName,password)=>{
  
  let user={
    userName,
    password
  }
 


  
  const response=await axios.post(API_URL+'/login',user);
  

  const data=response.data;
  window.localStorage.setItem("auth-token",response.data.token);
  return data;
}


const logout = async() => {
  const response=await axios.delete(API_URL+'/logout');
  window.localStorage.clear("auth-token",response.data.token);
};




const authService = {
  register,
  login,
  logout,
  
};

export default authService;