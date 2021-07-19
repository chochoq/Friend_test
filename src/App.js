import './App.css';
import React from 'react';
import styled from 'styled-components';

import Score from './Score';
import Quiz from './Quiz';
import Start from './Start';
import Rank from './Rank';
import Comment from './Comment';
import NotFound from './NotFound';

import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ["잊누너"],
      score: ["100", "80"],
      comment:"주노 좋아하는구나!? 나도 조아해",
      number: ["1", "2", "3"],
      // page: "start",
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
          <Switch>
            <Route exact path='/' render={(props)=><Start name={this.state.name}/>}/>
            <Route path='/quiz' render={(props)=><Quiz list={this.state.list} />}/>
            <Route path='/score' render={(props) => <Score comment={this.state.comment} name={this.state.name} />} />
            <Route path='/rank' render={(props)=><Rank name={this.state.name} comment={this.state.comment}/> } />
            <Route path='/comment' render={(props) => <Comment name={this.state.name} />} />
            <Route render={() =><NotFound/>} />
          </Switch>
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

export default withRouter(App);
