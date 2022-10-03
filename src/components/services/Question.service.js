import axios from "axios";

const API_URL = "http://localhost:3001/devforum";




const getQuestionsByText=async(quename)=>{
return await axios.get(`${API_URL}/question/search/`+quename)

}
const postQuestion=async(questionName,token)=>{
    const questionObject={
        questionName:questionName,
        categoryName:"java",
        status:"open"
    }
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    const response=await axios.post(`${API_URL}/question`,questionObject);
    return response.data;
}
const getQuestion= async(token)=>{
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

const Questionservice={
    postQuestion,
    getQuestion,
    getQuestionsByText,
    postAnswer,
    deleteQuestion,
    updateQuestion,
    getAllCategory
}
export default Questionservice