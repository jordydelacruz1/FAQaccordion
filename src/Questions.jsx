import React, {useState} from 'react'
import data from './data'


const Questions = () => {

  const [showText, setShowText] = useState(Array(data.length).fill(false))


  const toggleText = (index) => {
    const answers = [...showText]
    answers[index] = !answers[index]
    setShowText(answers)
  }

  return (
    <div className="question-container">
      {
        data.map((question, index) => {
            return (
            <div key={question.id} className="question-box">
                <div className="flex">
                    <h4>{question.question}</h4>
                    <button className="btn" onClick={() => toggleText(index)}>
                        {showText[index] ? <img src="../faq-accordion-main/assets/images/icon-minus.svg" alt="icon plus" /> : <img src="../faq-accordion-main/assets/images/icon-plus.svg" alt="icon plus" />}
                    </button>
                </div>
                {showText[index] ? <p className="questions">{question.answer}</p> : <p className="questions none">{question.answer}</p>}
            </div> 
            )
        })
      }
    </div>
  )
}

export default Questions
