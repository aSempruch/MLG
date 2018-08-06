import React, { Component } from 'react';
import { Text } from 'react-konva';

export default class StartText extends Component {

    state = {
        text: ''
    }

    componentWillReceiveProps(nextProps){
        this.setState({text: this.getText(nextProps.gameState)});
    }

    componentWillMount(){
        this.componentWillReceiveProps(this.props);
    }

    getText = (gameState) => {
        switch(gameState){
            case 0: return 'Move Your Mouse Here'
            case 1: return 'Click to Start'
            default: return ''
        }
    }

    render() {
        const { text } = this.state;
        return (
            <Text
                text={text}
                x={window.innerWidth/2}
                y={window.innerHeight/2}
                offsetX={34}
                offsetY={50}
            />
        )
  }
}
