import React from 'react';
import styled from 'styled-components';

const Score = (props) => {

    const scoreMsg = props.scoreMsg;
    const name = props.name;

    return (
            <Container>
                <Text><span>{name}</span> 퀴즈에 대한 내 점수는?</Text>
            <ScoreDiv>
                <span>100</span> 점
                <p>{scoreMsg}</p>
            </ScoreDiv>

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
`;

const Text = styled.h1`
    font-size: 1.5em;
    margin:0px;
    line-height: 1.4;

    & span{
        background-color: rgba(171, 20, 10, 0.2);
        border-radius: 10px;
        padding: 5px;
    }
`;

const ScoreDiv = styled.div`
    font-weight: 600;
    font-size: 1.5em;
    margin: 24px;

    & span{
            background-color: rgba(171, 20, 10, 0.2);
            border-radius: 10px;
            padding: 5px;
        }

    & > p{
        margin: 24px 0px;
        font-size: 16px;
        font-weight: 400;
    }
`;


const ScoreButton = styled.button`
    background-color: rgba(171, 106, 184, 0.411);
    border-radius: 30px;
    padding: 10px;
    border: 1px solid rgba(171, 106, 184, 0.411);
    margin: 5px;
`
const RankButton = styled.button`
    background-color: rgba(50, 20, 184, 0.411);
    border-radius: 30px;
    padding: 10px;
    border: 1px solid rgba(50, 20, 184, 0.411);
    margin: 5px;

`


export default Score;