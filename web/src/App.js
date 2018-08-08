import React, { Component } from 'react';
import './App.css';
import Target from './components/target';
import StartText from './components/starttext';
import Bounds from './components/bounds'
import Drawing from './components/drawing'
import { Stage } from 'react-konva';

class App extends Component {

  state = {
    gameState: 1,
    mousePos: []
  }

  gameState = (val) => {
      if(val) return this.setState({gameState: val});
      else return this.state.gameState;
  }

  setMousePos = (e) => {
    const { clientX, clientY } = e.evt;
    this.setState({mousePos: [clientX,clientY]})
  }

  getMousePos = () => {
    return this.state.mousePos
  }

  render() {
    const { gameState, setMousePos, getMousePos } = this;
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Bounds/>
        <Drawing gameState={gameState} setMousePos={setMousePos} getMousePos={getMousePos}/>
        <Target gameState={gameState} setMousePos={setMousePos} getMousePos={getMousePos}/>
        <StartText gameState={gameState}/>
      </Stage>
    );
  }
}



export default App;
