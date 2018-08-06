import React, { Component } from 'react';
import { Circle, Group } from 'react-konva';
import IdleAnim from './idleAnim';

export default class Target extends Component {

    started = () => {
      return this.props.gameState() === 3
    }

    startGame = () => {
      if(this.started()) return
      this.props.gameState(3);
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
      return (
        <Group>
          <IdleAnim gameState={this.props.gameState}/>
          <Circle
            x={window.innerWidth/2}
            y={window.innerHeight/2}
            width={60}
            height={60}
            fill={'yellow'}
            shadowBlur={5}
          />
          <Circle
            x={window.innerWidth/2}
            y={window.innerHeight/2}
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