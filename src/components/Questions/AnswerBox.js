import React, { useState } from 'react'
import Questionservice from '../services/Question.service';
function AnswerBox({ token, queId }) {
    const [description, setDescription] = useState([])
 

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await Questionservice.postAnswer(description, token, queId).then(
                (obj) => {
                    console.log("posting ans",obj)
                    
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
    return (
        <section class="mt-3">
            <form onSubmit={handleSubmit}>
                <div class="input-group input-group">
                    <input type="text" class="form-control" placeholder="Write Comment" aria-label="Recipient's username" aria-describedby="basic-addon2" value={description}
                        onChange={(e) => {
                            setDescription(e.target.value)
                        }} />
                    <div class="input-group-append">
                       
                        <button class="btn btn-primary">
                            Comment
                        </button>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default AnswerBox