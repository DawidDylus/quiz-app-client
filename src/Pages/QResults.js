import React from 'react'
import QuizResults from '../Components/QuizResults/QuizResults'
import { useLocation } from 'react-router-dom';
const QResults = () => {

    const location = useLocation();

    return (
        <>
            <QuizResults results={location.state} />
        </>
    )
}

export default QResults
