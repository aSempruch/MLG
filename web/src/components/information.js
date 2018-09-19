import React, { Component } from 'react'
import { Layer, Line, Circle, Text, Rect, Group } from 'react-konva'
import { wallY, height, wallX, width, TARGET_INNER_SIZE, TARGET_OUTER_SIZE } from '../constants'

export default class Information extends Component {

    state = {
        started: false,
        timer: undefined,
        points: []
    }

    componentWillReceiveProps(next){
        if(!this.state.started && next.gameState() === 3){
            this.setState({started: true})
            this.startDrawing()
        }
        else if(this.state.started && next.gameState() !== 3){
            this.setState({started: false})
            this.stopDrawing()
        }
    }

    startDrawing = () => {
        console.log('Starting')
        const timer = setInterval(() => {
            this.updateDraw()
        }, 100)
        this.setState({
            timer: timer
        })
    }

    stopDrawing = () => {
        clearInterval(this.state.timer)
    }

    updateDraw = () => {
        const { x, y, mousePos } = this.props
        const { points } = this.state
        const nextPoints = parsePoint(x, y, mousePos[0], mousePos[1])
        this.setState({
            points: [...points, nextPoints[0], nextPoints[1]]
        })
    }

    render() {
        const { points } = this.state
        return (
            <Layer
                x={wallX + width/2}
                y={wallY}
                offsetY={80}
            >
                <Rect
                    fill="black"
                    width={width + TARGET_OUTER_SIZE}
                    height={80}
                    x={-width/2 - TARGET_OUTER_SIZE/2}
                    y={-40}
                    opacity={0.05}
                    shadowBlur={4}
                />
                <Group x={-190}>
                    <Circle
                        radius={TARGET_OUTER_SIZE / 2}
                        stroke='black'
                    />
                    <Circle
                        radius={TARGET_INNER_SIZE / 2}
                        stroke='black'
                    />
                    <Line
                        stroke='black'
                        strokeWidth={3}
                        opacity={0.5}
                        points={points}
                        tension
                    />
                </Group>
            </Layer>
        )
    }
}

const parsePoint = (x, y, mx, my) => {
    var nx = mx-x, ny = my-y
    if(Math.abs(nx) > TARGET_OUTER_SIZE/2)
        nx = TARGET_OUTER_SIZE/2 * Math.sign(nx)
    if(Math.abs(ny) > TARGET_OUTER_SIZE/2)
        ny = TARGET_OUTER_SIZE/2 * Math.sign(ny)
    return [nx, ny]
}