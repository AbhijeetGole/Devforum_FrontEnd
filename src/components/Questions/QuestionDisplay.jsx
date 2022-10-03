import {React } from "react";

import Questionservice from "../services/Question.service";


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import AnswerQuestion from "./AnswerQuestion";
import CommentBox from "./CommentBox";
import AnswerBox from "./AnswerBox";


function QuestionDisplay({ token, question, answers, qId,setQuestions ,seteditFlag,setpreeditQuestion,setupdateQid}) {

    
    const deleteQuestion =async () => {
        console.log("in delete function",token)
        console.log("delete button working")
        console.log(qId)

        await Questionservice.deleteQuestion(token, qId)
            .then(response => {
                console.log(response)
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
                
            )
            .catch(err => {
                console.log(err)
            })

    }
    const updateQuestion=async ()=>{
         seteditFlag(true);
         setupdateQid(qId)
         console.log("edit click")
         console.log(question)
         setpreeditQuestion(question)
        
         
    }
    
   
    return (
        <section class="card mt-4">
            <div class="border p-2">
                <div class="row m-0">
                    <div class="">
                        <a class="text-decoration-none" href="#">
                            <img class="" src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png" width="50" height="50" alt="..." />
                        </a>
                    </div>
                   
                 <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle  float-right" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Action
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" onClick={updateQuestion} href="#">Edit</a>
    <a class="dropdown-item"onClick={deleteQuestion} href="#">Delete </a>
   
  </div>
</div>
                </div>
                <div class="">
                    {question}
                </div>
                <CommentBox queId={qId} />
                <AnswerBox token={token} queId={qId} />
            </div>
            {answers.map((ans) => {
                return <AnswerQuestion answer={ans} queId={qId} />
            })}
        </section>


    )
}

export default QuestionDisplay