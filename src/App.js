import './App.css';
import React from 'react';
import styled from 'styled-components';

import Score from './Score';
import Quiz from './Quiz';
import Start from './Start';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ["야옹이","뇽뇽"],
      score: ["100", "80"],
      number: ["1", "2", "3"],
      page:"start",
    };
  }

  render() {
    return (
      <AppDiv className="app">
        {this.state.page === "quiz" && (<Quiz name={this.state.name} score={this.state.score} />)}
        {this.state.page === "start" && (<Start name={this.state.name}/>)}
        {this.state.page === "score" && (<Score name={this.state.name} score={this.state.score}/>)}

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

export default App;
