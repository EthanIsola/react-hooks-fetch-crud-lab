import React, {useEffect, useState} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {

  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then(res => res.json())
      .then(
        (result) => {
          setQuestions(result)
        },

      )
  }, [])

  

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{/* display QuestionItem components here after fetching */}</ul>
      {questions.map((question)=>{
        return <QuestionItem question = {question} setQuestions = {setQuestions} questions = {questions} />
      })}
    </section>
  );
}

export default QuestionList;
