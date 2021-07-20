import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { resetAnswer } from './redux/modules/quiz';
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom';

const Ranking = (props) => {
    const dispatch = useDispatch();
    const _ranking = useSelector((state) => state.rank.ranking);

    // 높은 수가 위로오게 sort정렬
    const ranking = _ranking.sort((a, b) => {
        return b.score - a.score;
    });

    return (
        <div>
            <TopBar>
                <p>
                    <span>{ranking.length}</span>명의 사람들 중 당신의 점수는?
                </p>
            </TopBar>

            <BoxWrap>
                {ranking.map((r, idx) => {
                        return (
                        <BoxItem key={idx} highlight={r.current ? true:false}>
                            <RankNum>
                                    <h1>{ idx+1 } 등</h1>
                                </RankNum>
                                <RankUser>
                                    <p>{r.name}</p> <p>{r.message}</p>
                                </RankUser>
                        </BoxItem>
                    )
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

