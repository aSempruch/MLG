import React, { Component } from 'react';
import './App.css';
import Target from './components/target';
import StartText from './components/starttext';
import { Stage, Layer } from 'react-konva';

class App extends Component {

  state = {
    gameState: 1,
  }

  gameState = (val) => {
      if(val) return this.setState({gameState: val});
      else return this.state.gameState;
  }

  render() {
    const { gameState } = this;
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <StartText gameState={gameState}/>
          <Target gameState={gameState}/>
        </Layer>
      </Stage>
    );
  }
}



export default App;
