import React from 'react';
import styled from 'styled-components';

const Score = (props) => {

    const name = props.name;
    const score = props.score;

    console.log(name);
    console.log(score);

    return (
            <Container>
                <h1><Span>{name[0]}</Span> 퀴즈에 대한 내 점수는?</h1>
                <h1><Span>{score[0]}</Span> 점</h1>
                <p>멘트 궈궈</p>

                <ScoreButton>점수보기</ScoreButton>
                <RankButton>랭킹보기</RankButton>
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
`

const Span = styled.span`
    background-color: rgba(171, 20, 10, 0.3);
    border-radius: 10px;
    padding: 5px;
`

const ScoreButton = styled.button`
    background-color: rgba(171, 106, 184, 0.411);
    border-radius: 10px;
    padding: 10px;
    border: 0px solid rgba(171, 106, 184, 0.411);
    margin: 5px;
`
const RankButton = styled.button`
    background-color: rgba(50, 20, 184, 0.411);
    border-radius: 10px;
    padding: 10px;
    border: 0px solid rgba(50, 20, 184, 0.411);
    margin: 5px;
`


export default Score;