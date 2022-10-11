import axios from "axios";


const API_URL = "http://localhost:3000/user";


const register = async(firstName,lastName,userName, password,email,phone) => {
  return axios
    .post(API_URL + "/register", {
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
  localStorage.setItem("user",JSON.stringify(response.data));
  console.log( "inside login",localStorage.getItem("user"));

  return data;
}


const logout = async() => {
  // const response=await axios.delete(API_URL+'/logout');
  localStorage.clear("user");
};




const authService = {
  register,
  login,
  logout,
  
};

export default authService;