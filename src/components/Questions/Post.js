import { React, useState, useEffect} from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import './Post.css'
import Questionservice from '../services/Question.service'
import QuestionDisplay from './QuestionDisplay';
import Navbar from '../Profile/Comp1'
import SpecialTitle from '../Profile/SpecialTitle'
import Categories from '../Profile/Categories';

function Post({ token,userdata }) {
  
    const [flag,setFlag]= useState(0)
    const [preeditQuestion,setpreeditQuestion]=useState('')
    
    const [editflag,seteditFlag]=useState(false)
    const [questions, setQuestions] = useState([]);
    const [qtext,setQtext]= useState("")
   
    const[updateQid,setupdateQid]=useState('');
    
    let defaultQuestion='';
    const [questionName, setQuestionName] = useState("")
    useEffect(() => {
        if(editflag){
            console.log("edit flag set")
           defaultQuestion=preeditQuestion;
           console.log(preeditQuestion)
           console.log(defaultQuestion)
           setQuestionName(defaultQuestion)
           seteditFlag(!editflag)
       }
        console.log(flag)
        if(flag==0 ){
          


            
            Questionservice.getQuestion(token).then(obj => {
                console.log("success", obj.data)
                setQuestions(obj.data);
                           
                console.log("inside qd use effect", obj.data[6].answers)
            })
                .catch(err => {
                    console.log(err)
                })
        }else{
            Questionservice.getQuestionsByText(qtext).then(obj=>{
                console.log("qtext",qtext)
                setQuestions(obj.data);
            })
        }
        

    }, [ qtext,editflag])

    
    
    
   
    

    const Submit = async (e) => {
        
        e.preventDefault();
        console.log("button clicked")
        try {
            await Questionservice.postQuestion(questionName,token).then(
                (response) => {
                    
                    console.log(response.message);

                    if(response.message=="Success"){
                        Questionservice.getQuestion(token).then(obj => {
                            console.log("success", obj.data)
                            setQuestions(obj.data);
                            
                        })
                            .catch(err => {
                                console.log(err)
                            })
                    }
                    
                },
                (err) => {
                    console.log(err)
                }
            )
        }
        catch (err) {
            console.log(err)
        }

    }
const update = async (e) => {

        e.preventDefault();
        console.log("button clicked")
            await Questionservice.updateQuestion(token,questionName,updateQid).then(
                (response) => {
                
                    console.log(response);    
                    if(response.status==200){
                        Questionservice.getQuestion(token).then(obj => {
                            console.log("success", obj.data)
                            setQuestions(obj.data);
                            
                        })
                            .catch(err => {
                                console.log(err)
                            })
                    }   
                }
            ).
         catch (err=>{
              console.log(err)
         }) 
    
}

    return (
        
        <div class="container-fluid">
            <Navbar userdata={userdata} setFlag={setFlag} flag={flag} nSetQtext={setQtext}/>
            <div class="row">
                
                <SpecialTitle firstName="Chinmay" role="User" />
        

                 
                    <div class="col-md-6 col-sm-12">
                        <form >
                            <section class="card">
                                <div class="card-header">
                                    <ul class="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
                                        <li class="nav-item">
                                            <a class="nav-link active" id="posts-tab" data-toggle="tab" href="#posts" role="tab" aria-controls="posts" aria-selected="true">Make
                                                a Post</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="card-body">
                                    <div class="tab-content" id="myTabContent">
                                        <div class="tab-pane fade show active" id="posts" role="tabpanel" aria-labelledby="posts-tab">
                                            <div class="form-group">
                                                <label class="sr-only" for="message">post</label>
                                                <textarea  class="form-control" id="message" rows="3" placeholder="What are you thinking..." value={questionName}
                                                    onChange={(e) => {
                                                        setQuestionName(e.target.value)
                                                    }}></textarea>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="text-right mar2 ">
                                        <button type="submit" onClick={Submit}
                                        class="btn btn-primary mar">Post</button>
                                        <button type="submit" onClick={update} class="btn btn-primary" >Update</button>
                                    </div>

                                </div>
                            </section>
                        </form>
                        <div>
                    {questions.length ? questions.map(question => {
                        return (
                            <QuestionDisplay token={token} key={question._id} question={question.questionName} answers={question.answers} qId={question._id} 
                            setQuestions={setQuestions} seteditFlag={seteditFlag} setpreeditQuestion={setpreeditQuestion} setupdateQid={setupdateQid}/>
                        )
                    }) : <p>Not present</p>}
                </div>
                    </div>
               
                

            
            <div class="col-md-3 col-sm-12">
                <Categories />
                
            </div>
            </div>
        </div>
     
      
  )
}

export default Post;
