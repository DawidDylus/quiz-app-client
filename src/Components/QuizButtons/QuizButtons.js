import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import {
    Button,
    Buttons,
    ButtonLink
} from './QuizButtonsStyles'

const QuizButtons = ({
    activeAnswer,
    setActiveAnswer,
    answers,
    setCurrentQuestion,
    setAnswers,
    questions,
    currentQuestion
}) => {

    const [buttonContent, setButtonContent] = useState("Next");
    const navigate = useNavigate();
    

    useEffect(() => {

    }, [answers, currentQuestion])

    const calculateScore = cp => {
        let score = 0;
        for (let i = 0; i < cp.length; i++) {
            if (cp[i] === questions[i].correctAns)
                score++;
        }
        return score;
    }

    const pushToAnswers = () => {
        const ansCopy = [...answers]       

        if (answers.length < 9) {
            if(ansCopy[currentQuestion]) setActiveAnswer(ansCopy[currentQuestion])
            if (activeAnswer !== "") {               
                ansCopy.splice(currentQuestion, 0, activeAnswer)
                setAnswers(ansCopy)
                setActiveAnswer("")
                setCurrentQuestion((num) => num + 1)
            }
            if (answers.length === 8) {
                setButtonContent("Show Results")
            }
        }
        if (buttonContent === "Show Results") {
            ansCopy.push(activeAnswer)
            const passProps = calculateScore(ansCopy);           
            console.log(questions);
            console.log(ansCopy);
            console.log(passProps);
            navigate("results", { state: passProps });
        }
        
    }

    const prevQuestion = () => {
        console.log(answers[currentQuestion]);
        console.log(answers);
        if (currentQuestion > 0) {
            setActiveAnswer(answers[currentQuestion])
            setCurrentQuestion((num) => num - 1)
        }
        console.log(currentQuestion);
    }

    return (
        <>
            <Buttons>
                <Button onClick={prevQuestion} bgHover="#ffc299">Previous</Button>
                <Button onClick={pushToAnswers}
                    bgBase={buttonContent === "Next" ? null : "#ffff99"}
                    bgHover={buttonContent === "Next" ? "#99c2ff" : "#ffff4d"}>{buttonContent}</Button>
            </Buttons>
        </>
    )
}

export default QuizButtons
