import React from 'react';
import styled from 'styled-components';

const Quiz = (props) => {

    const name = props.name;
    const number = props.number;

    return (
        <Container>
            <p><span>{number[0]}번 문제</span></p>
            <h2>{name[0]}은(는) n살이다</h2>
            <img src="https://file.mk.co.kr/meet/neds/2021/04/image_readtop_2021_374021_16187973224615548.jpg" />

            <YesButton>O</YesButton>
            <NoButton>X</NoButton>
        </Container>
    );
};


const Container = styled.div`
    max-width: 350px;
    min-height: 80vh;
    background-color: #fff;
    padding: 16px;
    margin: 20px auto;
    border-radius: 5px;
    border: 1px solid #ddd;
    
    text-align: center;
    display: flex;
    flex-direction: column;

    & > p > span{
        background-color: rgba(171, 20, 10, 0.3);
        border-radius: 10px;
        padding: 5px;
        width: 10vw;
        margin: 0px auto;
    }
`


const YesButton = styled.button`
    background-color: rgba(171, 106, 184, 0.411);
    border-radius: 10px;
    padding: 10px;
    border: 0px solid rgba(171, 106, 184, 0.411);
    margin: 5px;
`
const NoButton = styled.button`
    background-color: rgba(50, 20, 184, 0.411);
    border-radius: 10px;
    padding: 10px;
    border: 0px solid rgba(50, 20, 184, 0.411);
    margin: 5px;
`

export default Quiz;