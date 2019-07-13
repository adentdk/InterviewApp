import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button, Input } from 'react-native-elements'
import { globalStyles } from '../../../styles/globalStyles'


export default class VideoAnswerSheet extends Component {
    render() {
        return(
            <Input multiline={true}
                placeholder={"type your answer here"}
                placeholderTextColor={"#aaa"}
                inputContainerStyle={{flex:1,justifyContent:"flex-start",alignItems:"flex-start"}}
                containerStyle={{flex:1,alignItems:"flex-start",justifyContent:"flex-start"}}

                onChangeText={() => {
                    this.props.changeState('answer',)
                }}
            />
        )
    }
}