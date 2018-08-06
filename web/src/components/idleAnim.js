import React, { Component } from 'react';
import { Ring, Group } from 'react-konva';

export default class idleAnim extends Component {

    maxSize = 100;

    state = {
        size: this.maxSize
    }

    animate = () => {
        const { size } = this.state;
        const { maxSize } = this;
        const gameState = this.props.gameState();
        var nextSize;

        switch(gameState){
            case 2:
                if(size > 30)
                    nextSize = size-0.5
                else
                    nextSize = maxSize
                break;
            case 1:
                if(size < maxSize)
                    nextSize = size+0.5
                else
                    nextSize = 30
                break;
            default: break;
        }

        this.setState({
            size: nextSize
        });
    }

    componentDidMount() {
        setInterval(this.animate, 14)
    }

    // getOpacity = () => {
    //     const { size } = this.state;
    //     var maxSize = this.maxSize;
    //     // if(this.props.gameState() !== 1)
    //     //     maxSize = maxSize * 0.4
    //     return 0.5 - (Math.abs(0.5 - (size / (maxSize))))
    // }

    render() {
        const { size } = this.state;
        const maxSize = this.maxSize;
        const gameState = this.props.gameState()
        if(gameState === 1 || gameState === 2)
            return (
                <Group>
                    <Ring
                        x={window.innerWidth / 2}
                        y={window.innerHeight / 2}
                        innerRadius={size-2}
                        outerRadius={size}
                        fill='red'
                        shadowBlur={0}
                        opacity={0.5 - (Math.abs(0.5 - (size / (maxSize))))}
                    />
                </Group>
            )
        else return null;
    }
    }