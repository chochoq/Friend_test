// 리액트 패키지를 불러옵니다.
import React from 'react';

const Start = ({ name }) => {
    console.log(name)

    const my_name = name;
    
    return (
        <div style={{
            display: "flex",
            height: "100vh",
            overflow: "hidden",
            padding: "16px",
            boxSizing:"border-box"
            }}>
            <div
                className="outter"
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    height: "100vh",
                    width: "100vw",
                    overflow: "hidden",
                    padding: "0px 10vw",
                    boxSizing: "border-box",
                    maxWidth: "400px"
                    
                }}
            >
                <img src="https://file.mk.co.kr/meet/neds/2021/04/image_readtop_2021_374021_16187973224615548.jpg" alt='junhoImg' style={{ width: "80%", margin: "16px" }} />
                
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
                    }}>{name}</span> 에 대해 얼마나 알고있을까?
                </h1>
                
                <input type="text" placeholder="이름"
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
                    시작하기</button>
            </div>
        </div>

        
    );
}

export default Start;