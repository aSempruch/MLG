import React, { Component } from 'react';
import { Circle, Group } from 'react-konva';
import IdleAnim from './idleAnim';
import { TARGET_INNER_COLOR, TARGET_OUTER_COLOR, TARGET_INNER_SIZE, TARGET_OUTER_SIZE } from '../constants'

export default class Target extends Component {

    state = {
      shadow1: 0,
    }

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

    highLight = (val) => {
      if(val)
        this.setState({shadow1: 5})
      else
        this.setState({shadow1: 0})
    }

    render(){
      const { shadow1 } = this.state
      const { x, y } = this.props

      return (
        <Group>
          <IdleAnim gameState={this.props.gameState}/>
          <Circle
            x={x}
            y={y}
            radius={TARGET_OUTER_SIZE / 2}
            fill={TARGET_OUTER_COLOR}
            onMouseMove={this.props.setMousePos}
            shadowBlur={5}
          />
          <Circle
            x={x}
            y={y}
            radius={TARGET_INNER_SIZE / 2}
            fill={TARGET_INNER_COLOR}
            shadowBlur={shadow1}
            onMouseOver={_ => {this.startIdle();this.highLight(true)}}
            onMouseOut={_ => {this.stopIdle();this.highLight(false)}}
            onMouseMove={this.props.setMousePos}
            onClick={this.startGame}
          />
        </Group>
      );
    }
  }