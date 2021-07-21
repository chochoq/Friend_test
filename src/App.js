import './App.css';
import React from 'react';
import styled from 'styled-components';

import Score from './Score';
import Quiz from './Quiz';
import Start from './Start';
import Ranking from './Ranking';
import Message from './Message';
import NotFound from './NotFound';

import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { addUserName, addUserMessage,addRank,getRank } from './redux/modules/rank';
import { getQuiz, addAnswer, resetAnswer } from './redux/modules/quiz';

// import { firestore } from "./firebase";

const mapStateToProps = (state) => ({
  ...state,
});
const mapDispatchToProps = (dispatch) => ({
  load: () => { },
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    return (
      <AppDiv className="app">
        <Container>
          <Switch>
            <Route exact path="/" component={ Start }/>
            <Route path='/quiz' component={Quiz } />
            <Route path='/score' component={ Score}  />
            <Route path='/ranking' component={Ranking }/>
            <Route path='/message' component={ Message } />
            <Route component={ NotFound} />
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

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(App));
