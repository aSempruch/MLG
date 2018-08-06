import React, { Component } from 'react'
import { Rect } from 'react-konva'
import { getHeight, getWidth } from '../logic'

export default class Bounds extends Component {
  render() {
    const height = getHeight(), width = getWidth();
    return (
      <Rect
        x={window.innerWidth/2-width/2-30}
        y={window.innerHeight/2-height/2-30}
        height={height+60}
        width={width+60}
        strokeWidth={5}
        stroke='black'
      />
    )
  }
}
