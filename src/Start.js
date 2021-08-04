// 리액트 패키지를 불러옵니다.
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUserName } from "./redux/modules/rank";


const Start = ( props ) => {
    const dispatch = useDispatch();
    const name = useSelector((state) => state.quiz.name);
    const input_text = React.useRef(null);

    return (
        <div>
            <img src="https://image.flaticon.com/icons/png/512/3081/3081597.png" alt='재활용이미지' style={{ width: "80%", margin: "16px" }} />
            
            <h1 style={{
                fontSize: '1.5em',
                margin: "0px",
                lineHeight: "1.4",
            }}>
                나는 <span
                    style={{
                        background: '#fef5d4',
                        padding: "5px 10px",
                        borderRadius: '30px'
                    }}>{name}을</span> 얼마나 열심히 할까?
            </h1>
            
            <input ref={input_text} type="text" placeholder="이름을 적어주세요"
                style={{
                    padding: '10px',
                    margin: '24px 0px',
                    border: '1px solid #dadafc',
                    borderRadius: '30px',
                    width: "60%"
                }}>
            </input>

            <button
                style={{
                    padding: "8px 24px",
                    background: "#dadafc",
                    borderRadius: '30px',
                    border: '#dadafc'
                }}
                onClick={() => {
                    // 이름저장
                    dispatch(addUserName(input_text.current.value));
                    props.history.push('/quiz');
                }}
            >
                시작하기</button>
        </div>


        
    );
};

export default Start;