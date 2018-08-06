import React, { Component } from 'react';
import { Circle, Group } from 'react-konva';

export default class Target extends Component {
    render(){
      return (
        <Group>
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
          />
        </Group>
      );
    }
  }