import React from 'react'
import { useEffect,useState } from 'react';
import Questionservice from '../services/Question.service';
import QuestionDisplay from '../Questions/QuestionDisplay';
function ProComp({question, qId}) {
    
  return (
    <div class="row gutters-sm">
                <div class="col-sm-12 mb-3">
                  <div class="card h-100">
                    <div class="card-body">
                      <h6 class="d-flex align-items-center mb-3"><i class="material-icons text-info mr-2">Questions</i>All </h6>
                      {/* {question} */}
                      <h1> hello</h1>
                    </div>
                  </div>
                </div>
                
              </div>
  )
}

export default ProComp