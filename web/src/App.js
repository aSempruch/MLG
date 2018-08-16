import React, { Component } from 'react'
import './App.css'
import Target from './components/target'
import StartText from './components/starttext'
import Bounds from './components/bounds'
import Drawing from './components/drawing'
import Timer from './components/timer'
import GameMenu from './components/gamemenu'
import { Stage } from 'react-konva'
import { collectMouseData, submitData } from './logic'

class App extends Component {

  state = {
    gameState: 1,
    mousePos: []
  }

  gameState = (val) => {
      if(val){
        if(val === 4)
          submitData()
        return this.setState({gameState: val});
      }
      else return this.state.gameState;
  }

  setMousePos = (e) => {
    const { clientX, clientY } = e.evt;
    this.setState({mousePos: [clientX,clientY]})
    collectMouseData(clientX, clientY)
  }

  getMousePos = () => {
    return this.state.mousePos
  }

  render() {
    const { gameState, setMousePos, getMousePos } = this;
    return (
      <div>
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Bounds/>
        <Drawing gameState={gameState} setMousePos={setMousePos} getMousePos={getMousePos}/>
        <Target gameState={gameState} setMousePos={setMousePos} getMousePos={getMousePos}/>
        <StartText gameState={gameState}/>
        <Timer gameState={gameState}/>
      </Stage>
      <GameMenu gameState={gameState}/>
      </div>
    );
  }
}



export default App;
