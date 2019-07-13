import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button, Input } from 'react-native-elements'
import { globalStyles } from '../../styles/globalStyles'

export default class Register extends Component {
  render() {
    return (
      <View style={globalStyles.container}>
        <Text style={globalStyles.welcome}>Register Yourself</Text>
        <Input placeholder={"Your name"} />
        <Input placeholder={"Your email"} />
        <Input placeholder={"Your phone number"} />
        <Button title={"Let's start"} type={"outline"}
                onPress={() => {
                  this.props.navigation.dispatch("Question");
                }}/>
      </View>
    );
  }
}