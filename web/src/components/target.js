import React, { Component } from 'react';
import { Circle, Layer } from 'react-konva';
import IdleAnim from './idleAnim';
import Logic from '../logic';

export default class Target extends Component {

    state = {
      x: window.innerWidth/2,
      y: window.innerHeight/2,
      shadow1: 0
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

    highLight = (val) => {
      if(val)
        this.setState({shadow1: 5})
      else
        this.setState({shadow1: 0})
    }

    render(){
      const { x, y, shadow1 } = this.state;
      return (
        <Layer>
          <IdleAnim gameState={this.props.gameState}/>
          <Circle
            x={x}
            y={y}
            width={60}
            height={60}
            fill={'#FF9000'}
            onMouseMove={this.props.setMousePos}
            shadowBlur={5}
          />
          <Circle
            x={x}
            y={y}
            width={25}
            height={25}
            fill={'#FFB04A'}
            shadowBlur={shadow1}
            onMouseOver={_ => {this.startIdle();this.highLight(true)}}
            onMouseOut={_ => {this.stopIdle();this.highLight(false)}}
            onMouseMove={this.props.setMousePos}
            onClick={this.startGame}
          />
        </Layer>
      );
    }
  }