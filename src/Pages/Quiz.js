import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Question from '../Components/Question/Question'
import QuizButtons from '../Components/QuizButtons/QuizButtons'


const Quiz = () => {
    
    const url = "http://localhost:3500/api/question/random"
    const [questions, setQuestions] = useState([])
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [activeAnswer, setActiveAnswer] = useState("")
    const [answers, setAnswers] = useState([])

    const getQuestions = async () => {
        const result = await axios.get(url)
        setQuestions(result.data)        
    }

    useEffect(() => {
        getQuestions()        
    }, [])

    return (
        <>
            {
                questions[currentQuestion] && <Question question={questions[currentQuestion]} activeAnswer={activeAnswer} setActiveAnswer={setActiveAnswer}/>  
            }
            <QuizButtons currentQuestion={currentQuestion} questions={questions} activeAnswer={activeAnswer} setActiveAnswer={setActiveAnswer} answers={answers} setCurrentQuestion={setCurrentQuestion} setAnswers={setAnswers}/>

        </>
    )
}

export default Quiz
