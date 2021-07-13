import './App.css';
import React from 'react';

import Score from './Score';
import Quiz from './Quiz';
import Start from './Start';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ["야옹이","뇽뇽"],
      score:["100","80"]
    };
  }

  render() {
    return (
      <div className="app">
        {/* <start></start> */}
        <Score name={this.state.name} score={this.state.score}></Score>
        {/* <quiz></quiz> */}
      </div>
    )
  }
}


export default App;
