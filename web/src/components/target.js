import React, { Component } from 'react';
import { Circle, Group } from 'react-konva';
import IdleAnim from './idleAnim';
import Logic from '../logic';

export default class Target extends Component {

    state = {
      x: window.innerWidth/2,
      y: window.innerHeight/2
    }

    started = () => {
      return this.props.gameState() === 3
    }

    startGame = () => {
      if(this.started()) return
      this.props.gameState(3);
      setInterval(_ => {
        this.setState({
          x: Logic.getX(),
          y: Logic.getY()
        })
      }, 10)
    }

    startIdle = () => {
      if(this.started()) return
      this.props.gameState(2);
    }

    stopIdle = () => {
      if(this.started()) return
      this.props.gameState(1);
    }

    render(){
      const { x, y } = this.state;
      return (
        <Group>
          <IdleAnim gameState={this.props.gameState}/>
          <Circle
            x={x}
            y={y}
            width={60}
            height={60}
            fill={'yellow'}
            shadowBlur={5}
          />
          <Circle
            x={x}
            y={y}
            width={25}
            height={25}
            fill={'blue'}
            shadowBlur={2}
            onMouseOver={this.startIdle}
            onMouseOut={this.stopIdle}
            onClick={this.startGame}
          />
        </Group>
      );
    }
  }