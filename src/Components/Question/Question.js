import React from 'react'
import {
    Container,
    QuestionWrap,
    AnswersWrap,
    Answer,
    Wrapper
} from './QuestionsStyles'

const Question = ({question, activeAnswer, setActiveAnswer}) => {
    return (
        <Container>
            <Wrapper>
                <QuestionWrap>{question.question}</QuestionWrap>
                <AnswersWrap>
                    <Answer className={activeAnswer === 'a' && 'active'} onClick={()=>setActiveAnswer('a')}>{question.ans1}</Answer>
                    <Answer className={activeAnswer === 'b' && 'active'} onClick={()=>setActiveAnswer('b')}>{question.ans2}</Answer>
                    <Answer className={activeAnswer === 'c' && 'active'} onClick={()=>setActiveAnswer('c')}>{question.ans3}</Answer>
                    <Answer className={activeAnswer === 'd' && 'active'} onClick={()=>setActiveAnswer('d')}>{question.ans4}</Answer>
                </AnswersWrap>
            </Wrapper>
        </Container>
    )
}

export default Question
