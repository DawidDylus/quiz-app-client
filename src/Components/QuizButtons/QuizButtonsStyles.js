import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Buttons = styled.div`    
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 10%;
    background: #66cc66 ;
`
export const Button = styled.button`
    border-radius: 60px;
    background: ${({ bgBase }) => (bgBase ? bgBase : "#267326")};
    border: none;
    font-size: 2rem;
    cursor: pointer;
    width: 30%;
    height: 100%;    
    font-weight: bold;

    :hover {
        background: ${({ bgHover }) => (bgHover ? bgHover : "gray")}
    }
`


