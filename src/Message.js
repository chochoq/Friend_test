import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addRank } from './redux/modules/rank';


const Message = (props) => {
    const dispatch = useDispatch();
    const name = useSelector((state) => state.quiz.name);
    const answers = useSelector((state) => state.quiz.answers);
    const user_name = useSelector((state) => state.quiz.user_name);

    const input_text = React.useRef(null);

    /// 답변에서 true인 answer만 걸러내기
    let correct = answers.filter((answer) => {
        return answer;
    });

    // 점수계산
    let score = (correct.length / answers.length) * 100;

    return (
        <div>
            <img src="https://file.mk.co.kr/meet/neds/2021/04/image_readtop_2021_374021_16187973224615548.jpg" alt='junhoImg' style={{ width: "80%", margin: "16px" }} />
            <h1 style={{
                fontSize: '1.5em',
                margin: "0px",
                lineHeight: "1.4",
            }}>
                <span 
                style={{
                    background: '#fef5d4',
                    padding: "5px 10px",
                    borderRadius: '30px'
                    }}>{name}</span> 에게 한마디
            </h1>
            
            <input ref={input_text} type="text" placeholder="내가 하고싶은 말은?"
                style={{
                    padding: '10px',
                    margin: '24px 0px',
                    border: '1px solid #dadafc',
                    borderRadius: '30px',
                    width: "60%"
                }}>
            </input>

            <button
                onClick={() => {
                    let rank_info = {
                        score: parseInt(score),
                        name: user_name,
                        message: input_text.current.value,
                        current: true,
                    };
                    // 메세지 저장
                    dispatch(addRank(rank_info));
                    props.history.push('/ranking');
                }}
                style={{
                    padding: "8px 24px",
                    background: "#dadafc",
                    borderRadius: '30px',
                    border: '#dadafc'
                }}>
                {props.name}에게 한마디하고 랭킹보러 갑시다</button>
        </div>
    )
}

export default Message;