import React, { Component } from 'react'
import { Rect, Group } from 'react-konva'
import { height, width } from '../constants'

export default class Bounds extends Component {
  render() {
    return (
      <Group>
      <Rect
        x={window.innerWidth/2-width/2-30}
        y={window.innerHeight/2-height/2-30}
        height={height+60}
        width={width+60}
        fill='white'
        stroke='#053D64'
        strokeWidth={2}
      />
      </Group>
    )
  }
}
