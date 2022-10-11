import {React } from "react";

import Questionservice from "../services/Question.service";


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import AnswerQuestion from "./AnswerQuestion";
import CommentBox from "./CommentBox";
import AnswerBox from "./AnswerBox";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer, toast } from "react-toastify";

function QuestionDisplay({ token, question, answers, qId,setQuestions ,seteditFlag,setpreeditQuestion,setupdateQid,queUser}) {

    const localdata=JSON.parse(localStorage.getItem('user'))
    const deleteQuestion =async () => {
        console.log("in localdata delete function",localdata.token)
        console.log("delete button working")
        console.log(qId)

        await Questionservice.deleteQuestion(localdata.token, qId)
            .then(response => {
                console.log(response)
                if(response.status==404){
                    toast.error("cannot delete question posted by other user",{
                        position:"top-center",
                        autoClose:1500
                      })
                }
                if(response.status==200){
                    toast.success("Question deleted successfully",{
                        position:"top-center",
                        autoClose:1500
                      })
                    Questionservice.returnAllQuestion(localdata.token).then(obj => {
                        console.log("success", obj.data)
                        setQuestions(obj.data);
                        
                    })
                        .catch(err => {
                            console.log(err)
                        })
                }
                }
                
            )
            .catch(() => {
                // alert("You cannot delete question posted by other user")
                toast.error("You cannot delete question posted by other user",{
                    position:"top-center",
                    autoClose:1500
                  })
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
        <section class="card mt-4 border-info mb-3 bg-white ">
            <ToastContainer position="bottom-center" autoClose={1500} />
            <div class="border p-2">
                <div class="row m-0">
                    <div class="">
                        <a class="text-decoration-none" href="#">
                            <img class="" src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png" width="50" height="50" alt="..." />
                        </a>
                    </div>
                    <div class="flex-grow-1 pl-2">
								<a class="text-decoration-none" href="#">
									<h2 class="text-capitalize h5 mb-0">{queUser}</h2>
								</a> 
								<p class="small text-secondary m-0 mt-1">1 day ago</p>
							</div>
                   
                 <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle  float-right" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    
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
                <AnswerBox token={localdata.token} queId={qId} />
            </div>
            {answers.map((ans) => {
                return <AnswerQuestion answer={ans} queId={qId} />
            })}
        </section>


    )
}

export default QuestionDisplay