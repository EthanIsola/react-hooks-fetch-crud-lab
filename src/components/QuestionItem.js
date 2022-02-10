import React, { useState } from "react";

function QuestionItem({ question, questions, setQuestions }) {
  const { id, prompt, answers, correctIndex } = question;
  const [status, setStatus] = useState('')

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  const deleteLink = "http://localhost:4000/questions/" + question.id

  const handleDelete = ()=>{
    fetch(deleteLink, { method: 'DELETE' })
    .then(() => console.log('Delete successful'));
    setQuestions(questions.filter((item)=>{return item !== question}))
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick = {handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
