import React, { Component } from 'react'
import { Layer } from 'react-konva'
import { Bounds, Drawing, Target } from '../components'
import { wallX, wallY, width, height, speed } from '../constants'

export default class MovingComponents extends Component {

    state = {
        x: window.innerWidth/2, 
        y: window.innerHeight/2,
        started: false,
        direction: {x: 1, y: 1}
    }

    getDirection = () => {
        var x = Math.random()*2-1
        var y
        if(x >= 0) y = 1-x
        else y = 1+x
        return { x: x, y: y }
    }

    getX = () => {
        var { x, direction } = this.state
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

    getY = () => {
        var { y, direction } = this.state
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

    startGame = () => {
        var timer = setInterval(_ => {
            this.setState({
                x: this.getX(),
                y: this.getY()
            })
        }, 10)
        this.setState({
            started: true,
            gameTimer: timer
        })
    }

    componentWillReceiveProps(next){
        if(this.state.started) return
        if(next.gameState() === 3)
            this.startGame()
    }

    render(){

        const { gameState, setMousePos, getMousePos } = this.props
        const { x, y } = this.state

        return(
            <Layer>
                <Bounds/>
                <Drawing
                    gameState={gameState}
                    setMousePos={setMousePos}
                    getMousePos={getMousePos}
                    x={x}
                    y={y}
                />
                <Target 
                    gameState={gameState} 
                    setMousePos={setMousePos} 
                    getMousePos={getMousePos}
                    x={x}
                    y={y}
                />
            </Layer>
        )
    }
}