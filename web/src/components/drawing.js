import React, { Component } from 'react'
import { Layer, Line, Rect } from 'react-konva'
import { getHeight, getWidth, getX, getY } from '../logic'

const   xShift = (window.innerWidth-getWidth())/2,
        yShift=(window.innerWidth-getWidth())/2

export default class Drawing extends Component {

    state = {
        points: [],
        ballPoints: [],
        started: false,
    }

    updateDrawing = () => {
        if(this.props.gameState() !== 3) return
        const pos = this.props.getMousePos()
        const { points } = this.state
        if(pos[0] !== points[points.length-2] && pos[1] !== points[points.length-1])
            this.setState({
                points: [...points.splice(points.length-1000, points.length) , pos[0]-xShift, pos[1]-yShift]
            })
    }

    componentWillReceiveProps(n){
        if(n.gameState() !== 3) return
        if(!this.state.started){
            this.startBallTracking(50)
            this.setState({started: true})
        }
    }

    startBallTracking(interval){
        setInterval(_ => {
            this.setState({
                ballPoints: [...this.state.ballPoints, getX()-xShift, getY()-yShift]
            })
            this.updateDrawing()
        }, interval)
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
                        strokeWidth={60}
                        opacity={0.2}
                        points={ballPoints}
                        width={10}
                        shadowBlur={1}
                    />
                    <Line
                        perfectDrawEnabled={false}
                        x={xShift}
                        y={yShift}
                        stroke='orange'
                        strokeWidth={25}
                        opacity={0.4}
                        points={ballPoints}
                        width={10}
                        shadowBlur={1}
                    />
                    <Line
                        perfectDrawEnabled={false}
                        x={xShift}
                        y={yShift}
                        stroke='#64aadb'
                        strokeWidth={8}
                        opacity={1}
                        points={points}
                        width={10}
                        shadowBlur={1}
                    />
                    <Rect
                        x={xShift-30}
                        y={xShift-30}
                        height={getHeight()+60}
                        width={getWidth()+60}
                        onMouseMove={this.props.setMousePos}
                    />
                </Layer>
            )
        else return null
    }
}
