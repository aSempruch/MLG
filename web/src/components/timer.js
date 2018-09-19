import React, { Component } from 'react'
import { Layer, Text } from 'react-konva'
import { totalGameTime, height } from '../constants'

export default class Timer extends Component {

    state = {
        time: totalGameTime,
        started: false,
        interval: undefined
    }

    componentWillReceiveProps(n){
        if(n.gameState() === 3 && !this.state.started){
            this.setState({started: true})
            this.startTimer()
        }
    }

    startTimer = () => {
        const interval = setInterval(_ => {
            const { time } = this.state
            if(time < 1){
                this.props.gameState(4)
                clearInterval(this.state.interval)
            }
            else
                this.setState({time: time-1})
        }, 1000)
        this.setState({
            interval: interval
        })
    }

    render() {
        const { time } = this.state
        return (
            <Layer>
                <Text
                    x={window.innerWidth/2-10}
                    y={window.innerHeight/2-height+100}
                    fontSize={40}
                    text={time}
                />
            </Layer>
        )
    }
}
