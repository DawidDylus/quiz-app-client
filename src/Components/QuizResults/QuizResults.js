import React from 'react';
import { Container, Wrapper, Result } from './QuizResultsStyles'

const QuizResults = ({ results }) => {
    return (
        <>
            <Container>
                <Wrapper>
                    <Result>
                        <h1>
                            Your score is: {results === null ? 0 : results}
                        </h1>
                    </Result>
                </Wrapper>
            </Container>
        </>
    )
}

export default QuizResults
