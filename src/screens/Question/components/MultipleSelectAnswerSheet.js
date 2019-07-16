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
    componentDidMount() {
        let choice = []
        this.setState({
            choice: choice
        })
        this.props.choice.split(',').map((item, key) => {
            choice.push({ label: item, value: key })
        })
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

    render() {
        let { selectedItems, choice } = this.state
        return (

            <View style={{ flex: 1, height: '100%', width: '100%' }}>
                {
                    (choice.length == 0) ?
                        <View />
                        :
                        <SelectMultiple
                            items={choice}
                            selectedItems={selectedItems}
                            onSelectionsChange={this.onSelectionsChange} />
                }
            </View>
        )
    }
}
