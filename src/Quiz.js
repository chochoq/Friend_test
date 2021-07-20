import React from 'react';
import styled from 'styled-components';

import Score from './Score';

import { useDispatch, useSelector } from 'react-redux';
import { addAnswer } from './redux/modules/quiz';

const Quiz = (props) => {
    const dispatch = useDispatch();
    const answer = useSelector((state) => state.quiz.answers);
    const quiz = useSelector((state) => state.quiz.quiz);
    console.log(quiz);
    console.log(answer);


    const num = answer.length;

    const onButtonClick = (direction) => {
        let _answer = direction==="left"?'O':'X';

        if (_answer === quiz[num].answer) {
            // 정답
            dispatch(addAnswer(true));
        } else {
            dispatch(addAnswer(false));
        }
    }

    if (num > quiz.length - 1) {
        return <Score {...props}/>;
    }

    return (
        <div>
            <p><span>{num + 1}번 문제</span></p>

            {/* 질문자리 */}
            {quiz.map((l, idx) => {
                if (num === idx) {
                    return (
                        <h2 key={idx}>{l.question}</h2>
                    )
                }
            })}
            {/* 답변 */}
            {quiz.map((l, idx) => {
                if (idx === num) {
                    return (
                        <div key={idx}>
                            <Img src="https://file.mk.co.kr/meet/neds/2021/04/image_readtop_2021_374021_16187973224615548.jpg" />
                            
                            <YesButton onClick={onButtonClick}>O</YesButton>
                            <NoButton onClick={onButtonClick}>X</NoButton>
                        </div>
                    );
                }
            })}
        </div>
    );
};


const Container = styled.div`
    max-width: 90%;
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

const Img = styled.img`
    max-width: max-content;
    min-height: 50vh;
    width: 90%;
    margin: 16px
    
`


const YesButton = styled.button`
    background-color: rgba(171, 106, 184, 0.411);
    border-radius: 10px;
    padding: 10px;
    border: 0px solid rgba(171, 106, 184, 0.411);
    margin: 5px;
    width: 50vw;
`
const NoButton = styled.button`
    background-color: rgba(50, 20, 184, 0.411);
    border-radius: 10px;
    padding: 10px;
    border: 0px solid rgba(50, 20, 184, 0.411);
    margin: 5px;
    width: 50vw;
`

export default Quiz;