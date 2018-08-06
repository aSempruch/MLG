import React, { Component } from 'react'
import { Rect, Layer } from 'react-konva'
import { getHeight, getWidth } from '../logic'

export default class Bounds extends Component {
  render() {
    const height = getHeight(), width = getWidth();
    return (
      <Layer>
      <Rect
        x={window.innerWidth/2-width/2-30}
        y={window.innerHeight/2-height/2-30}
        height={height+60}
        width={width+60}
        fill='#479AD4'
        stroke='#053D64'
        strokeWidth={2}
      />
      </Layer>
    )
  }
}