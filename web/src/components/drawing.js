import React, { Component } from 'react'
import { Group, Line, Rect } from 'react-konva'
import { height, width } from '../constants'

const   xShift = (window.innerWidth-width)/2,
        yShift=(window.innerHeight-height)/2

export default class Drawing extends Component {

    state = {
        points: [],
        ballPoints: [],
        started: false,
        interval: undefined
    }

    updateDrawing = () => {
        if(this.props.gameState() !== 3) return
        const pos = this.props.getMousePos()
        const { points } = this.state
        if(pos[0]-xShift !== points[points.length-2] && pos[1]-yShift !== points[points.length-1])
            this.setState({
                points: [...points.slice(points.length-300, points.length) , pos[0]-xShift, pos[1]-yShift]
            })
        
    }

    componentWillReceiveProps(n){
        const gameState = n.gameState()
        if(gameState === 3){
            if(!this.state.started){
                this.startBallTracking(10)
                this.setState({started: true})
            }
        }
        if(gameState === 4){
            clearInterval(this.state.interval)
        }
    }

    startBallTracking(interval){
        var timer = setInterval(_ => {
            const { ballPoints } = this.state
            const { x, y } = this.props
            this.setState({
                ballPoints: [...ballPoints.slice(ballPoints.length-500, ballPoints.length), x-xShift, y-yShift]
            })
            this.updateDrawing()
        }, interval)
        this.setState({
            interval: timer
        })
    }

    render() {
        const { points, ballPoints } = this.state;
        if(this.props.gameState() === 3)
            return (
                <Group>
                    <Line
                        perfectDrawEnabled={false}
                        x={xShift}
                        y={yShift}
                        stroke='orange'
                        strokeWidth={60}
                        opacity={0.5}
                        points={ballPoints}
                        width={10}
                        shadowBlur={1}
                        tension
                    />
                    <Line
                        perfectDrawEnabled={false}
                        x={xShift}
                        y={yShift}
                        stroke='orange'
                        strokeWidth={25}
                        opacity={1}
                        points={ballPoints}
                        width={10}
                        shadowBlur={1}
                        tension
                    />
                    <Line
                        x={xShift}
                        y={yShift}
                        stroke='orange'
                        strokeWidth={20}
                        opacity={0.1}
                        points={points}
                        width={10}
                        shadowBlur={50}
                        tension={3}
                    />
                    <Rect
                        x={xShift-30}
                        y={yShift-30}
                        height={height+60}
                        width={width+60}
                        onMouseMove={this.props.setMousePos}
                    />
                </Group>
            )
        else return null
    }
}
