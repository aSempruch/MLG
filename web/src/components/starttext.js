import React, { Component } from 'react';
import { Text, Layer } from 'react-konva';

export default class StartText extends Component {

    state = {
        text: ''
    }

    componentWillReceiveProps(nextProps){
        this.setState({text: this.getText(nextProps.gameState())});
    }

    componentWillMount(){
        this.componentWillReceiveProps(this.props);
    }

    getText = (gameState) => {
        switch(gameState){
            case 1: return 'Mouse Here'
            case 2: return 'Click to Start'
            default: return ''
        }
    }

    render() {
        const { text } = this.state;
        const gameState = this.props.gameState()
        if(gameState === 1 || gameState === 2)
        return (
            <Layer>
            <Text
                text={text}
                x={window.innerWidth/2}
                y={window.innerHeight/2}
                offsetX={34}
                offsetY={50}
            />
            </Layer>
        )
        else return null;
  }
}
