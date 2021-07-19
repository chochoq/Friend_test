import React from 'react';


const Message = (props) => {

    console.log(props.name);
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
                    }}>{props.name}</span> 에게 한마디
            </h1>
            
            <input type="text" placeholder="내가 하고싶은 말은?"
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
                }}>
                {props.name}에게 한마디하고 랭킹보러 갑시다</button>
        </div>
    )
}

export default Message;