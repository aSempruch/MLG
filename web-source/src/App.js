import React, { Component } from 'react';
import './App.css';
import Target from './components/target';
import StartText from './components/starttext';
import { Stage, Layer } from 'react-konva';

class App extends Component {

  state = {
    gameState: 0,
  }

  setGameState = (val) => {
    this.setState({gameState: val});
  }

  render() {
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <StartText gameState={this.state.gameState}/>
          <Target gameState={this.state.gameState}/>
        </Layer>
      </Stage>
    );
  }
}



export default App;
