import React, { Component } from 'react'
import { Layer } from 'react-konva'
import { Bounds, Drawing, Target } from '../components'

export default class MovingComponents extends Component {

    render(){

        const { gameState, setMousePos, getMousePos, x, y } = this.props

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