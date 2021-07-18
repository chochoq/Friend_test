import React from 'react';
import styled from 'styled-components';

const Rank = (props) => {

    return (
        <div>
            <h3>n명의 사람들 중 당신의 점수는?</h3>
            <hr></hr>
            <Box>
                <Text>
                    <h1>n등</h1>
                </Text>
                <p>이름</p> <p>메세지</p>
            </Box>
            <Button>다시하기</Button>
        </div>
    );

}

const Box = styled.div`
    border: 1px solid #bcbcbc;
    height: 15vh;
`

const Text = styled.div`
    position: absolute;
    left: 20%;
`

const Button = styled.button`
    background-color: rgba(171, 106, 184, 0.411);
    border-radius: 10px;
    padding: 10px;
    border: 0px solid rgba(171, 106, 184, 0.411);
    margin: 5px;
    width: 50vw;
`

export default Rank;

