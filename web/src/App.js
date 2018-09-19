import React, { Component } from 'react'
import './App.css'
import { MovingComponents, StartText, Timer, GameMenu, Information } from './components'
import { Stage } from 'react-konva'
import { wallX, wallY, width, height, speed } from './constants'

class App extends Component {

  state = {
    x: window.innerWidth/2, 
    y: window.innerHeight/2,
    direction: getDirection(),
    gameTimer: undefined,
    gameState: 1,
    mousePos: [],
  }

  mouseData = []

  gameState = (val) => {
    if(val){
      if(this.state.gameState !== 3 && val === 3)
        this.startGame()
      else if(this.state.gameState === 3 && val === 4)
        this.stopGame()
      return this.setState({gameState: val});
    }
    else return this.state.gameState;
  }

  setMousePos = (e) => {
    const { clientX, clientY } = e.evt;
    this.setState({mousePos: [clientX,clientY]})
    if(this.state.gameState === 3)
      this.mouseData.push([clientX, clientY])
  }

  getMousePos = () => {
    return this.state.mousePos
  }

  startGame = () => {
    var timer = setInterval(_ => {
      this.setState({
        x: getX(this.state.x, this.state.direction),
        y: getY(this.state.y, this.state.direction)
      })
    }, 10)
    this.setState({
      started: true,
      gameTimer: timer
    })
  }

  stopGame = () => {
      clearInterval(this.state.gameTimer)
  }

  render() {
    const { gameState, setMousePos, getMousePos } = this
    const { x, y } = this.state
    return (
      <div>
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <MovingComponents
          gameState={gameState}
          setMousePos={setMousePos}
          getMousePos={getMousePos}
          x={x}
          y={y}
        />
        <StartText gameState={gameState}/>
        <Timer gameState={gameState}/>
        <Information 
          gameState={gameState} 
          mousePos={this.state.mousePos}
          x={x}
          y={y}
        />
      </Stage>
      <GameMenu gameState={gameState}/>
      </div>
    );
  }
}

const getX = (x, direction) => {
  if(x >= wallX + width){
    x = wallX + width
    direction.x *= -1
  }
  else if(x <= wallX){
    x = wallX
    direction.x *= -1
  }
  x += direction.x * speed
  return x
}

const getY = (y, direction) => {
  if(y >= wallY + height){
    y = wallY + height
    direction.y *= -1
  }
  else if(y <= wallY){
    y = wallY
    direction.y *= -1
  }
  y += direction.y * speed
  return y
}

const getDirection = () => {
  var x = Math.random()*2-1
  var y
  if(x >= 0) y = 1-x
  else y = 1+x
  return { x: x, y: y }
}


export default App;
