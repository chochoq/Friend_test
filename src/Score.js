import React from 'react';
import styled from 'styled-components';

import { useSelector, useDispatch } from 'react-redux';
import { addRank } from './redux/modules/rank';

const Score = (props) => {
    const name = useSelector((state) => state.quiz.name);
    const score_texts = useSelector((state) => state.quiz.score_texts);
    const answers = useSelector((state) => state.quiz.answers);

    // 답변에서 true인 answer만 걸러내기
    let correct = answers.filter((answer) => {
        return answer;
    });

    // 점수계산
    let score = (correct.length / answers.length) * 100;

    // 점수별로 텍스트 띄우기
    let score_text = "";

    // object.keys는 딕셔너리의 키값을 배열로 만들어준다
    Object.keys(score_texts).map((s, idx) => {
        if (idx === 0) {
            score_text = score_texts[s];
        }
        // 실제점수와 기준점수(키로넣은 정수)를 비교해서 텍스트로 넣음
        score_text = parseInt(s) <= score ? score_texts[s] : score_text;
    });


    return (
            <Container>
                <Text><span>{name}에</span> 나는 얼만큼 알까?</Text>
            <ScoreDiv>
                <span>{score}점</span>
                <Text><p>{score_text}</p></Text>
            </ScoreDiv>


            <RankButton onClick={() => {
                props.history.push('/message');       
            }}outlined>{name}에게 한마디</RankButton>
            </Container>        
    );
};


const Container = styled.div`
    max-width: 350px;
    min-height: 80vh;
    background-color: #fff;
    padding: 16px;
    margin: 20px auto;

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
        padding: 5px 10px;
    }
    & p{
        font-size: 0.5em;
        padding-top: 10px;
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
        margin: 50px 0px;
        font-size: 16px;
        font-weight: 400;
    }
`;


const RankButton = styled.button`
    background-color: ${(props) => (props.outlined ? "#ffffff" : "#dadafc")};
    border-radius: 30px;
    padding: 10px;
    border: 1px solid rgba(171, 106, 184, 0.411);
    margin: 5px;

`


export default Score;