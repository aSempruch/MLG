import React, { Component } from 'react'
import { Layer, Text } from 'react-konva'

export default class Timer extends Component {

    state = {
        time: 20,
        started: false
    }

    componentWillReceiveProps(n){
        if(n.gameState() === 3 && !this.state.started){
            this.setState({started: true})
            this.startTimer()
        }
    }

    startTimer = () => {
        setInterval(_ => {
            const { time } = this.state
            if(time < 1)
                this.props.gameState(4)
            else
                this.setState({time: time-1})
        }, 1000)
    }

    render() {
        const { time } = this.state
        return (
            <Layer>
                <Text
                    x={window.innerWidth/2-10}
                    y={window.innerHeight/2-270}
                    fontSize={40}
                    text={time}
                />
            </Layer>
        )
    }
}
