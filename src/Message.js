import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addRank } from './redux/modules/rank';


const Message = (props) => {
    const dispatch = useDispatch();
    const name = useSelector((state) => state.quiz.name);
    const answers = useSelector((state) => state.quiz.answers);
    const user_name = useSelector((state) => state.rank.user_name);

    const input_text = React.useRef(null);

    /// 답변에서 true인 answer만 걸러내기
    let correct = answers.filter((answer) => {
        return answer;
    });

    // 점수계산
    let score = (correct.length / answers.length) * 100;

    return (
        <div>
            <img src="https://image.flaticon.com/icons/png/512/4244/4244638.png" alt='trashImg' style={{ width: "80%", margin: "16px" }} />
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
                    }}>{name}</span>을 더 열심히 하겟다는
                <span
                    style={{
                    background: '#fef5d4',
                    padding: "5px 10px",
                    borderRadius: '30px'
                    }}>{user_name}의</span> 마음을 알려주세요!
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
                {name}님 같이 노력하는 사람들을 보러가요!</button>
        </div>
    )
}

export default Message;