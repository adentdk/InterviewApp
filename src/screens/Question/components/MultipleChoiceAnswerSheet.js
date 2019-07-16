import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import { ListItem } from 'react-native-elements'
import SelectMultiple from 'react-native-select-multiple'
import RadioForm from 'react-native-simple-radio-button'

import { globalStyles } from '../../../styles/globalStyles'


export default class MultipleChoiceAnswerSheet extends Component {

    state = {
        selected: 0,
        selectedItems: [],
        choice: []
    }

    onSelectionsChange = (selectedItems) => {
        let selected = ""
        this.setState({
            selectedItems
        })
        selectedItems.map(item => {
            selected += item.label + ", "
        })
        this.props.changeState('answer', selected)
    }

    handleRadioClick = (selected,choice) => {
        this.setState({
            selected : selected
        })
        console.log(choice);
        
        this.props.changeState('answer', choice[selected])
    }

    render() {
        let choice = []
        let { selectedItems } = this.state
        this.props.choice.split(',').map((item, key) => {
            choice.push({label : item, value : key})
        })
        this.setState({
            choice : choice
        })
        console.log(selectedItems);

        if (this.props.type == "multiple select") {
            return (
                <View style={{ flex: 1, height: '100%', width: '100%' }}>
                    <SelectMultiple
                        items={choice}
                        selectedItems={this.state.selectedItems}
                        onSelectionsChange={this.onSelectionsChange} />
                </View>
            )
        } else if (this.props.type == "multiple choice") {
            return (
                <View style={{ flex: 1, height: '100%', width: '100%' }}>
                    <RadioForm
                        radio_props={choice}
                        initial={0}
                        onPress={(selected) => this.handleRadioClick(selected)}
                    />
                </View>
            )
        }
    }
}
