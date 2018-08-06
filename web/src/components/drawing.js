import React, { Component } from 'react'
import { Layer, Line, Rect } from 'react-konva'
import { getHeight, getWidth, getX, getY } from '../logic'

const   xShift = (window.innerWidth-getWidth())/2,
        yShift=(window.innerWidth-getWidth())/2

var iterator = 0;

export default class Drawing extends Component {

    state = {
        points: [],
        ballPoints: [],
    }

    updateDrawing = (e) => {
        if(this.props.gameState() !== 3) return
        if(iterator-- > 0) return
        iterator = 3
        const { clientX, clientY } = e.evt
        const { points } = this.state
        if(clientX !== points[points.length-2] && clientY !== points[points.length-1])
            this.setState({
                points: [...points.splice(points.length-1000, points.length) , clientX-xShift, clientY-yShift]
            })
    }

    componentWillReceiveProps(n){
        if(n.gameState() !== 3) return
        setInterval(_ => {
            this.setState({
                ballPoints: [...this.state.ballPoints, getX()-xShift, getY()-yShift]
            })
        }, 50)
    }

    render() {
        const { points, ballPoints } = this.state;
        if(this.props.gameState() === 3)
            return (
                <Layer>
                    <Line
                        perfectDrawEnabled={false}
                        x={xShift}
                        y={yShift}
                        stroke='orange'
                        points={ballPoints}
                        width={10}
                    />
                    <Line
                        perfectDrawEnabled={false}
                        x={xShift}
                        y={yShift}
                        stroke='#64aadb'
                        points={points}
                        width={10}
                    />
                    <Rect
                        x={xShift-30}
                        y={xShift-30}
                        height={getHeight()+60}
                        width={getWidth()+60}
                        onMouseMove={this.updateDrawing}
                    />
                </Layer>
            )
        else return null
    }
}
