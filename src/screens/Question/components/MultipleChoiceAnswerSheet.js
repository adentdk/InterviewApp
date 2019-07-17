import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import { ListItem } from 'react-native-elements'
import SelectMultiple from 'react-native-select-multiple'
import RadioForm from 'react-native-simple-radio-button'

import { globalStyles } from '../../../styles/globalStyles'


export default class MultipleChoiceAnswerSheet extends Component {

    state = {
        selected: 0,
        choice: []
    }
    componentDidMount =  async () => {
        let choice = []
        await this.props.choice.split(',').map((item, key) => {
            choice.push({ label: item, value: key })
        })
        this.setState({
            choice: choice
        })
        this.props.changeState('answer', this.state.choice[0].label)
    }

    handleRadioClick = (selected) => {
        this.setState({
            selected: selected
        })

        console.log(this.state.choice);
        
        this.props.changeState('answer', this.state.choice[selected].label)
    }

    render() {
        let { choice } = this.state

        return (
            <View style={{ flex: 1, height: '100%', width: '100%' }}>
                {
                    (choice.length == 0) ?
                        <View />
                        :
                        <RadioForm
                            radio_props={choice}
                            initial={0}
                            onPress={(selected) => this.handleRadioClick(selected)}
                        />
                }
            </View>
        )

    }
}
