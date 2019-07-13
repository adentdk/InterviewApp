import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements'
import { globalStyles } from '../../../styles/globalStyles'


export default class MultipleChoiceAnswerSheet extends Component {
    render() {
        let choice = []
        this.props.choice.split(',').map((item, key) => {
            choice.push({ index: key, value: item })
        })

        return (
            <View style={{ flex: 1 }}>
                <FlatList data={choice}
                    keyExtractor={(item, index) => (item, index).toString()}
                    renderItem={({ item }) =>
                        <ListItem
                            leftElement={<Text>{item.value}</Text>}
                            rightIcon={{ name: "checkcircleo", type: "antdesign" }}
                        />
                    } />
            </View>
        )
    }
}