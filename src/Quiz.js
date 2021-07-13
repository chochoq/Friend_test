import React from 'react';
import styled from 'styled-components';

const Quiz = (props) => {

    const name = props.name;
    const number = props.number;

    return (
        <AppDiv>
            <Container>
                <p>{number[0]}번문제</p>
                <h2>{name[0]}은(는) n살이다</h2>
                <img src="https://file.mk.co.kr/meet/neds/2021/04/image_readtop_2021_374021_16187973224615548.jpg" />
                <p>O</p>
                <p>X</p>
            </Container>
        </AppDiv>
    );
};

const AppDiv = styled.div`
    width: 100vw;
    min-height: 100vh;
    background-color: rgba(171, 106, 184, 0.411);
    padding: 32px;
    box-sizing: border-box;
`

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
`

export default Quiz;