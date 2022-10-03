import {React,useState} from 'react'


import QuestionDisplay from './QuestionDisplay';

function SearchedQue({ quename }) {
    const [que, setQue] = useState("")

    // useEffect(() => {
    //     console.log("use effect")
    //     Questionservice.getQuestionsByText(quename).then(
    //         (data) => {
    //             console.log(quename)
    //             console.log(data)
    //             setQue = (quename)
    //         }
    //     )
    //     .catch(err=>{
    //         console.log(err)
    //     }) 
               
    // }, [])

    return (
        <div>
            {que.length ? que.map(question => {
                return (
                    <QuestionDisplay key={question._id} question={question.questionName} />
                )
            }) : <p>Not present</p>}
        </div>

    )
}

export default SearchedQue