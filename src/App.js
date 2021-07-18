import './App.css';
import React from 'react';
import styled from 'styled-components';

import Score from './Score';
import Quiz from './Quiz';
import Start from './Start';
import Rank from './Rank';
import Comment from './Comment';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ["잊누너","뇽뇽"],
      score: ["100", "80"],
      scoreMsg:"주노 좋아하는구나!? 나도 조아해",
      number: ["1", "2", "3"],
      page: "score",
      list: [
        { question: "주노는 잊누너", answer: "O" },
        { question: "주노는 개그맨", answer: "X" },
        { question: "주노는 잘생김", answer: "O" },
        { question: "주노는 뾰로롱", answer: "X" },
        { question: "주노는 쪼아쪼아", answer: "O" },
      ]
    };
  }

  render() {
    return (
      <AppDiv className="app">
        <Container>
          {this.state.page === "quiz" && (<Quiz list={this.state.list} />)}
          {this.state.page === "start" && (<Start name={this.state.name}/>)}
          {this.state.page === "score" && (<Score scoreMsg={this.state.scoreMsg} name={this.state.name}/>)}
          <Rank></Rank>
          <Comment></Comment>
        </Container>
      </AppDiv>
    )
  }
}


const AppDiv = styled.div`
    width: 100vw;
    min-height: 100vh;
    background-color: rgba(171, 106, 184, 0.411);
    padding: 32px;
    box-sizing: border-box;
`

const Container = styled.div`
    max-width: 350px;
    min-height: 80vh;
    background-color: #fff;
    padding: 16px;
    margin: 20px auto;
    border-radius: 5px;
    border: 1px solid #ddd;
    
    text-align: center;
    display: flex;
    flex-direction: column;
`;

export default App;
