import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:3001/devforum";




const getQuestionsByText=async(quename)=>{
return await axios.get(`${API_URL}/question/search/`+quename)

}
const postQuestion=async(questionName,token,category)=>{
    const questionObject={
        questionName:questionName,
        categoryName:category,
        status:"open"
    }
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    const response=await axios.post(`${API_URL}/question`,questionObject);
    return response.data;
}
const getQuestion= async(token)=>{
    console.log("header token",token)
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    return await axios.get(`${API_URL}/question`);
    
}
const postAnswer=async(description,token,qid)=>{
  
     const answers={
           description:description,

    }
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    axios.post("http://localhost:3001/devforum/question/"+qid+"/answer",answers);
}
const deleteQuestion=async(token,qid)=>{
    console.log("in servise",token)
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
     return axios.delete("http://localhost:3001/devforum/question/"+qid);
}
const updateQuestion=async(token,questionName,qid)=>{
    console.log("in servise",token)
    const que ={
        questionName:questionName
    }
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    return axios.put("http://localhost:3001/devforum/question/"+qid,que);
}
const getAllCategory=async(token)=>{
    axios.defaults.headers.common['Authorizaiton']=`Bearer ${token}`;
    return await axios.get(`${API_URL}/category`);
}
const returnAllQuestion=async()=>{

    // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    return await axios.get("http://localhost:3001/devforum/questions");

}
const deleteCategory=async(token,qid)=>{

    console.log("in servise",token,qid)

    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

     return axios.delete("http://localhost:3001/devforum/category/"+qid);

}

const updateCategory=async(token,cid,cat)=>{

    const catupdate={

        categoryName:cat

    }

    console.log(catupdate)

    console.log("in servise",token,cid)

    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    return axios.put("http://localhost:3001/devforum/category/"+cid,catupdate);

}

const Questionservice={
    postQuestion,
    getQuestion,
    getQuestionsByText,
    postAnswer,
    deleteQuestion,
    updateQuestion,
    getAllCategory,returnAllQuestion,deleteCategory,updateCategory
}
export default Questionservice