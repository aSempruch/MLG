import React, { Component } from 'react';
import { Ring } from 'react-konva';

export default class idleAnim extends Component {

    maxSize = 100;

    state = {
        size: this.maxSize,
        interval: undefined,
        started: false
    }

    animate = () => {
        const { size } = this.state;
        const { maxSize } = this;
        const gameState = this.props.gameState();
        var nextSize;

        switch(gameState){
            case 2:
                if(size > 30)
                    nextSize = size-1
                else
                    nextSize = maxSize
                break;
            case 1:
                if(size < maxSize)
                    nextSize = size+0.7
                else
                    nextSize = 30
                break;
            default: break;
        }

        this.setState({
            size: nextSize
        });
    }

    // TODO: Clear Timer on unmount

    componentDidMount() {
        const timer = setInterval(this.animate, 14)
        this.setState({interval: timer})
    }

    componentWillReceiveProps(n){
        if(this.state.started) return
        const gameState = n.gameState()
        switch(gameState){
            case 3:
                this.setState({
                    started: true,
                    size: 10
                })
                clearInterval(this.state.interval)
                break
            default:
                return
        }
    }

    render() {
        const { size } = this.state;
        const maxSize = this.maxSize;
        const gameState = this.props.gameState()
        if(gameState === 1 || gameState === 2)
            return (
                <Ring
                    x={window.innerWidth / 2}
                    y={window.innerHeight / 2}
                    innerRadius={size-2}
                    outerRadius={size}
                    fill='red'
                    shadowBlur={0}
                    opacity={Math.abs(0.5 - (Math.abs(0.5 - (size / (maxSize)))))}
                />
            )
        else return null;
    }
    }