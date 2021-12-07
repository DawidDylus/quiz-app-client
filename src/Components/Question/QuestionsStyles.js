import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 90%;
    background: #c6ecc6;
`
export const Wrapper = styled.div`
    height: 50%;
    background: #66cc66;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 80%;
`
export const QuestionWrap = styled.h1`
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`
export const AnswersWrap = styled.div`
    gap: 30px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100%;
`
export const Answer = styled.button`
    background: #267326;
    color: white;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    width: 40%;
    height: 4.5rem;
    &.active{
        background: #ffff99;
        color: black;
    }
`