import React from 'react';
import styled from 'styled-components';

import Score from './Score';
import Progress from './Progress';

import { useDispatch, useSelector } from 'react-redux';
import { addAnswer } from './redux/modules/quiz';

const Quiz = (props) => {
    const dispatch = useDispatch();
    const answer = useSelector((state) => state.quiz.answers);
    const quiz = useSelector((state) => state.quiz.quiz);

    const num = answer.length;

    const onClick_O = () => {
        {quiz.map((l,idx)=>{
            if (num === idx) {
                if (l.answer === text_O.current.innerHTML) {
                    dispatch(addAnswer(true));
                } else {
                    dispatch(addAnswer(false));
                }
            }
        })}
    }
    
    const onClick_X = () =>{
        {quiz.map((l, idx) => {
        if (num === idx) {
            if (l.answer === text_X.current.innerHTML) {
            dispatch(addAnswer(true))
            } else {
            dispatch(addAnswer(false))
            }
        }
        })}
  }


    const text_O = React.useRef();
    const text_X = React.useRef();


    if (num > quiz.length - 1) {
        return <Score {...props}/>;
    }

    return (
        <div>
            <Progress/>
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
                            
                                <YesButton ref={text_O} onClick={onClick_O} >O</YesButton>
                                <NoButton ref={text_X} onClick={onClick_X}>X</NoButton>

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