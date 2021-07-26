import React from 'react';
import styled from 'styled-components';
import AutorenewIcon from '@material-ui/icons/Autorenew';

const Spinner = (props) => {
    
    return (
        <OutDiv>
            <AutorenewIcon style={{ fontSize: '150px', color: '#8b5599' }} />
            <h1 style={{ fontSize: '15px', color: '#8b5599' }}>잠시만 기다려주세요</h1>
        </OutDiv>
    )
}

const OutDiv = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export default Spinner;