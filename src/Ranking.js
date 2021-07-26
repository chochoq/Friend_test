import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { resetAnswer } from './redux/modules/quiz';
import { getRankFB } from './redux/modules/rank';
import Spinner from './Spinner';


const Ranking = (props) => {
    const dispatch = useDispatch();
    const _ranking = useSelector((state) => state.rank.ranking);
    const is_loaded = useSelector((state) => state.rank.is_loaded);
    
    // 스크롤 이동할 div의 ref를 잡아줌
    const user_rank = React.useRef(null);

    React.useEffect(() => {
        dispatch(getRankFB());

        if (!user_rank.current) {
            return;
        }
        
        window.scrollTo({
            top: user_rank.current.offsetTop,
            left: 0,
            behavior: 'smooth'
        });
    }, []);

    // 높은 수가 위로오게 sort정렬
    const ranking = _ranking.sort((a, b) => {
        return b.score - a.score;
    });

    if (!is_loaded) {
        return (<Spinner />);
    }

    return (
        <div>
            <TopBar>
                <p>
                    <span>{ranking.length}명의</span> 사람들 중 당신의 점수는?
                </p>
            </TopBar>

            <BoxWrap>
                {ranking.map((r, idx) => {
                    if (r.current) {
                        return (
                            <BoxItem key={idx} highlight={true} ref={user_rank}>
                                <RankNum>
                                        <h1>{idx + 1} 등</h1>
                                    </RankNum>
                                    <RankUser>
                                        <b>{r.name}</b> <p>{r.message}</p>
                                    </RankUser>
                            </BoxItem>
                        )
                    }
                    return (
                        <BoxItem key={idx}>
                            <RankNum>
                                <h1>{idx + 1} 등</h1>
                            </RankNum>
                            <RankUser>
                                <b>{r.name}</b> <p>{r.message}</p>
                            </RankUser>
                        </BoxItem>
                    );
                })}

                
            </BoxWrap>
            <Button onClick={() => {
                dispatch(resetAnswer());
                window.location.href = '/';
            }}>다시하기</Button>
        </div>
    );

}

const TopBar = styled.h3`
    position: fixed;
    top:0;
    left: 0;
    width: 100vw;
    min-height: 50px;
    & > p {
        text-align: center;
        margin: 50px 0px 20px;
    }
    & > p > span {
        border-radius: 30px;
        background-color: #fef5d4;
        font-weight: 600;
        padding: 4px 8px;
    }
`;
const BoxWrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 58px;
`;


const BoxItem = styled.div`
    border: 1px solid #bcbcbc;
    height: 15vh;

    width: 100%;
    margin:8px auto;
    display: flex;
    border-radius: 10px;
    border: 1px solid #ddd;
    /* padding: 8px 16px; */
    align-items: center;
    background-color: ${props => props.highlight ? "#ffd6aa" : "#ffffff"}
`;

const RankNum = styled.div`
    text-align: center;
    font-size: 0.8em;
    font-weight: 600;
    padding: 0px 16px 0px 30px;
    border-right: 1px solid #ddd;
`;

const RankUser = styled.div`
    padding: 8px 16px ;
    text-align:left;
    & > p{
        &:first-child>b{
            border-bottom:2px solid #212121;
        }
        margin: 0px 0px 8px 0px;
    }
`;

// 플로팅버튼
const Button = styled.button`
    position: fixed;
    bottom: 5vh;
    left: 0;
    padding: 8px 24px;
    background-color: ${(props) => (props.outlined ? "#ffffff" : "#dadafc")};
    border-radius: 30px;
    margin: 20px 25vw;
    border: 1px solid #dadafc;
    width: 50vw;
`;

export default Ranking;

