import React from 'react';
import styled from 'styled-components';

const Quiz = (props) => {

    const [num, setNum] = React.useState(0);

    const list = props.list;
    console.log(list[0].question);

    const onNext = () => {
        setNum(num + 1);
    }

    return (
        <div>
            <p><span>{num + 1}번 문제</span></p>

            {/* 질문자리 */}
            {list.map((l, idx) => {
                if (num === idx) {
                    return (
                        <h2 key={idx}>{l.question}</h2>
                    )
                }
            })}
            {/* 답변 */}
            {list.map((l, idx) => {
                if (idx === num) {
                    return (
                        <div key={idx}>
                            <Img src="https://file.mk.co.kr/meet/neds/2021/04/image_readtop_2021_374021_16187973224615548.jpg" />
                            
                            <YesButton onClick={onNext}>O</YesButton>
                            <NoButton onClick={onNext}>X</NoButton>
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