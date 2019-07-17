import React, { Component } from 'react';
import { Button, Input } from 'react-native-elements'


export default class TextAnswerSheet extends Component {
    render() {
        return(
            <Input multiline={true}
                placeholder={"type your answer here"}
                placeholderTextColor={"#aaa"}
                inputContainerStyle={{flex:1,justifyContent:"flex-start",alignItems:"flex-start"}}
                containerStyle={{flex:1,alignItems:"flex-start",justifyContent:"flex-start"}}

                onChangeText={(text) => {
                    this.props.changeState('answer',text)
                }}
            />
        )
    }
}