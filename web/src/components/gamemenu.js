import React, { Component } from 'react'
import { Article, Section, Headline, Layer, Tiles, Tile, Card, Box } from 'grommet'
import Spinning from 'grommet/components/icons/Spinning'
import '../../node_modules/grommet-css'

export default class GameMenu extends Component {

    state = {
        activeMenu: undefined
    }

    componentWillReceiveProps(n){
        if(n.gameState() === 4)
            this.setState({activeMenu: this.loading})
    }

    loading = (
        <Article>
            <Section align='center'>
                <Headline>
                    Thinking...
                </Headline>
                <Spinning size='xlarge'/>
            </Section>
        </Article>
    )

    substanceSelect = (
        <Article>
            <Section>
                <Headline>
                    Help Me Improve
                </Headline>
            </Section>
            <Tiles selectable={true}>
                <Tile>
                    <Card
                        label="Test"
                    />
                </Tile>
            </Tiles>
        </Article>
    )

    results = (
        <Article>
            <Section>
                <Headline>
                    Results
                </Headline>
                I think that you are under the influence of:
                <Box pad='medium'
                    margin='small'
                    colorIndex='light-2'
                >Test
                </Box>
            </Section>
        </Article>
    )

    render() {
        const { activeMenu } = this.state

        if(activeMenu === undefined)
            return null
        return (
            <Layer>
                {activeMenu}
            </Layer>
        )
    }
}
